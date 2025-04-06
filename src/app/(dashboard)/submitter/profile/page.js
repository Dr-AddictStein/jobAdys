'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function SubmitterProfilePage() {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    bio: '',
    phone: '',
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  
  // Fetch user profile data
  useEffect(() => {
    fetchProfileData();
  }, [user]);
  
  // Function to fetch profile data
  const fetchProfileData = async () => {
    if (!user?.email) return;
    
    setIsLoading(true);
    
    try {
      console.log("Fetching profile data for:", user.email);
      
      // Check if we have stored profile data in localStorage
      const storedProfile = localStorage.getItem(`profile_${user.email}`);
      if (storedProfile) {
        const parsedProfile = JSON.parse(storedProfile);
        console.log("Found stored profile data:", parsedProfile);
        setProfileData(parsedProfile);
        setFormData({
          name: parsedProfile.name || '',
          birthDate: parsedProfile.birthDate || '',
          bio: parsedProfile.bio || '',
          phone: parsedProfile.phone || '',
        });
        setIsLoading(false);
        return;
      }
      
      // No stored data, fetch from API
      const response = await fetch(`/API/users/get-profile?email=${user.email}`);
      
      if (!response.ok) {
        console.error("Error fetching profile:", response.status);
        
        // Don't try to read the body content again if it fails
        setIsLoading(false);
        return;
      }
      
      const data = await response.json();
      
      if (data.user) {
        console.log("Profile data received:", data.user);
        
        // Store the profile data in localStorage
        localStorage.setItem(`profile_${user.email}`, JSON.stringify(data.user));
        
        setProfileData(data.user);
        setFormData({
          name: data.user.name || '',
          birthDate: data.user.birthDate || '',
          bio: data.user.bio || '',
          phone: data.user.phone || '',
        });
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Save profile changes
  const handleSubmit = async () => {
    if (!user?.email) return;
    
    setIsLoading(true);
    console.log("Submitting profile update");
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('email', user.email);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('birthDate', formData.birthDate);
      formDataToSend.append('bio', formData.bio);
      formDataToSend.append('phone', formData.phone);
      
      if (selectedImage) {
        formDataToSend.append('image', selectedImage);
      }
      
      // Using new API endpoint
      console.log("Sending request to /API/update-profile");
      const response = await fetch('/API/update-profile', {
        method: 'POST',
        body: formDataToSend,
      });
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        let errorMessage = "Failed to update profile";
        try {
          // Only try to read the response body once
          const errorResponse = await response.json();
          errorMessage = errorResponse.error || `Error: ${response.status}`;
          console.error("Error details:", errorResponse);
        } catch (e) {
          // If we can't parse as JSON, just use the status code
          console.error("Error parsing response:", e);
          errorMessage = `Error: ${response.status}`;
        }
        
        alert(errorMessage);
        return;
      }
      
      const data = await response.json();
      
      if (data.user) {
        console.log("Profile updated successfully:", data.user);
        
        // Update localStorage with the new profile data
        localStorage.setItem(`profile_${user.email}`, JSON.stringify(data.user));
        
        setProfileData(data.user);
        setIsEditing(false);
        setSelectedImage(null);
        
        // Also update the form data with the new values
        setFormData({
          name: data.user.name || '',
          birthDate: data.user.birthDate || '',
          bio: data.user.bio || '',
          phone: data.user.phone || '',
        });
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert(`Error updating profile: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle password form field changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any previous errors/success messages when the user types
    setPasswordError('');
    setPasswordSuccess('');
  };
  
  // Handle password update
  const handlePasswordSubmit = async () => {
    if (!user?.email) return;
    
    setPasswordError('');
    setPasswordSuccess('');
    
    // Validate passwords
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setPasswordError('All fields are required');
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }
    
    try {
      console.log("Sending password change request");
      const response = await fetch('/API/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });
      
      console.log("Password change response status:", response.status);
      
      if (!response.ok) {
        // Handle error response
        try {
          const errorData = await response.json();
          setPasswordError(errorData.error || 'Failed to update password');
        } catch (parseError) {
          setPasswordError(`Error ${response.status}: Failed to update password`);
        }
        return;
      }
      
      // Success
      const data = await response.json();
      
      // Reset form and show success message
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setPasswordSuccess(data.message || 'Password updated successfully');
      
      // Close password form after a delay
      setTimeout(() => {
        setIsChangingPassword(false);
        setPasswordSuccess('');
      }, 2000);
    } catch (error) {
      console.error('Error updating password:', error);
      setPasswordError('An error occurred. Please try again.');
    }
  };
  
  // Cancel editing mode
  const handleCancel = () => {
    setIsEditing(false);
    setSelectedImage(null);
    setPreviewImage(null);
    
    // Reset form data to current profile data
    if (profileData) {
      setFormData({
        name: profileData.name || '',
        birthDate: profileData.birthDate || '',
        bio: profileData.bio || '',
        phone: profileData.phone || '',
      });
    }
  };
  
  // Toggle password change form
  const togglePasswordChange = () => {
    setIsChangingPassword(!isChangingPassword);
    // Reset form and messages
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setPasswordError('');
    setPasswordSuccess('');
  };
  
  if (isLoading && !profileData) {
    return (
      <main style={{ 
        fontFamily: 'sans-serif', 
        backgroundColor: '#f9f3f3', 
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div>Loading profile...</div>
      </main>
    );
  }
  
  // Calculate age if birthDate exists
  const getAge = (birthDateStr) => {
    if (!birthDateStr) return '';
    
    try {
      const birthDate = new Date(birthDateStr);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      return age;
    } catch (error) {
      return '';
    }
  };

  return (
    <main style={{ 
      fontFamily: 'sans-serif', 
      backgroundColor: '#f9f3f3', 
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{
        minWidth: '1200px',
        margin: '0 auto',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        backgroundColor: 'white'
      }}>
        {/* Blue header with name and edit button */}
        <div style={{ 
          backgroundColor: '#4a90e2', 
          height: '200px',
          color: 'white',
          position: 'relative',
        }}>
          {/* Name and pencil positioned at the top */}
          <div style={{
            display: 'flex',
            width: '100%',
            padding: '20px 40px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ flex: 1 }}></div> {/* Spacer */}
            <h1 style={{ 
              fontWeight: 'normal', 
              fontSize: '1.8rem',
              margin: 0,
              flex: 1,
              textAlign: 'center'
            }}>
              {isEditing ? (
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    padding: '5px 10px',
                    width: '100%',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    borderRadius: '4px',
                    fontSize: '1.6rem'
                  }}
                />
              ) : (
                profileData?.name || user?.name || 'User Name'
              )}
            </h1>
            <div style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              {isEditing ? (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div 
                    onClick={handleCancel}
                    style={{
                      cursor: 'pointer',
                      marginRight: '15px'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
                    </svg>
                  </div>
                  <div 
                    onClick={handleSubmit}
                    style={{
                      cursor: 'pointer'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              ) : (
                <div 
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsEditing(true)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="white"/>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content area */}
        <div style={{ 
          position: 'relative',
          marginTop: '-100px',
          padding: '0 20px 40px',
        }}>
          {/* Profile picture centered and overlapping */}
          <div style={{ 
            width: '200px',
            height: '200px',
            margin: '0 auto 40px',
            position: 'relative',
            zIndex: 10,
          }}>
            {isEditing && (
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            )}
            <div 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '5px solid white',
                boxSizing: 'border-box',
                position: 'relative'
              }}
              onClick={() => {
                if (isEditing) {
                  document.getElementById('image-upload').click();
                }
              }}
            >
              <img 
                src={previewImage || profileData?.image || "/human.jpeg"}
                alt="Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {isEditing && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.3)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  cursor: 'pointer'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="white"/>
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Content with appropriate spacing */}
          <div style={{ 
            maxWidth: '650px', 
            margin: '0 auto',
            padding: '0 10px' 
          }}>
            {/* Personal Info */}
            <div style={{
              borderBottom: '1px solid #e0e0e0',
              paddingBottom: '1rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              {isEditing ? (
                <div style={{ textAlign: 'center', margin: '0.5rem 0' }}>
                  <input 
                    type="date" 
                    name="birthDate"
                    value={formData.birthDate || ''}
                    onChange={handleChange}
                    style={{
                      padding: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              ) : (
                <p style={{ 
                  fontSize: '1.1rem', 
                  margin: '0.5rem 0',
                  fontWeight: 'normal'
                }}>
                  {profileData?.birthDate ? 
                    `Born: ${profileData.birthDate} (age ${getAge(profileData.birthDate)})` : 
                    'Birth date not set'}
                </p>
              )}
            </div>

            {/* Role Info */}
            <div style={{
              borderBottom: '1px solid #e0e0e0',
              paddingBottom: '1rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontSize: '1.1rem', 
                margin: '0.5rem 0',
                fontWeight: 'normal'
              }}>
                Role: {profileData?.role || 'Submitter'}
              </p>
            </div>

            {/* Bio */}
            <div style={{
              textAlign: 'center',
              marginBottom: '2.5rem'
            }}>
              {isEditing ? (
                <textarea 
                  name="bio"
                  value={formData.bio || ''}
                  onChange={handleChange}
                  placeholder="Enter your bio"
                  style={{
                    width: '100%',
                    minHeight: '120px',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    fontSize: '1rem'
                  }}
                />
              ) : (
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.5',
                  margin: '1rem 0',
                  color: '#333'
                }}>
                  {profileData?.bio || 'No bio provided'}
                </p>
              )}
            </div>

            {/* Private Information */}
            <div style={{
              marginBottom: '1rem'
            }}>
              <h2 style={{ 
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 'normal',
                marginBottom: '1.5rem'
              }}>
                Private Information
              </h2>
              
              <div style={{
                borderBottom: '1px solid #e0e0e0',
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                <p style={{ 
                  fontSize: '1rem', 
                  margin: '0.5rem 0',
                  color: '#333'
                }}>
                  Email: {user?.email || '******'}
                </p>
              </div>
              
              <div style={{
                borderBottom: '1px solid #e0e0e0',
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                <div style={{ position: 'relative' }}>
                  <p style={{ 
                    fontSize: '1rem', 
                    margin: '0.5rem 0',
                    color: '#333',
                    display: 'inline-block'
                  }}>
                    Password: ********
                  </p>
                  {!isEditing && !isChangingPassword && (
                    <span 
                      onClick={togglePasswordChange}
                      style={{
                        color: '#4a90e2',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        marginLeft: '10px',
                        textDecoration: 'underline',
                        display: 'inline-block',
                        verticalAlign: 'middle'
                      }}
                    >
                      Change
                    </span>
                  )}
                </div>
                
                {isChangingPassword && (
                  <div style={{ 
                    marginTop: '15px', 
                    padding: '15px',
                    maxWidth: '300px',
                    margin: '10px auto',
                    textAlign: 'left',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    backgroundColor: '#f9f9f9'
                  }}>
                    {passwordError && (
                      <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '10px' }}>
                        {passwordError}
                      </p>
                    )}
                    
                    {passwordSuccess && (
                      <p style={{ color: 'green', fontSize: '0.9rem', marginBottom: '10px' }}>
                        {passwordSuccess}
                      </p>
                    )}
                    
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>
                        Current Password:
                      </label>
                      <input 
                        type="password" 
                        name="currentPassword" 
                        value={passwordData.currentPassword} 
                        onChange={handlePasswordChange}
                        style={{
                          width: '100%',
                          padding: '8px',
                          border: '1px solid #ccc',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                    
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>
                        New Password:
                      </label>
                      <input 
                        type="password" 
                        name="newPassword" 
                        value={passwordData.newPassword} 
                        onChange={handlePasswordChange}
                        style={{
                          width: '100%',
                          padding: '8px',
                          border: '1px solid #ccc',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>
                        Confirm New Password:
                      </label>
                      <input 
                        type="password" 
                        name="confirmPassword" 
                        value={passwordData.confirmPassword} 
                        onChange={handlePasswordChange}
                        style={{
                          width: '100%',
                          padding: '8px',
                          border: '1px solid #ccc',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <button 
                        onClick={togglePasswordChange}
                        style={{
                          padding: '8px 12px',
                          background: '#f2f2f2',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={handlePasswordSubmit}
                        style={{
                          padding: '8px 12px',
                          background: '#4a90e2',
                          border: 'none',
                          borderRadius: '4px',
                          color: 'white',
                          cursor: 'pointer'
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div style={{
                textAlign: 'center'
              }}>
                {isEditing ? (
                  <div style={{ textAlign: 'center', margin: '0.5rem 0' }}>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone || ''}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      style={{
                        padding: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                ) : (
                  <p style={{ 
                    fontSize: '1rem', 
                    margin: '0.5rem 0',
                    color: '#333'
                  }}>
                    Mobile Phone: {profileData?.phone || '******'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 