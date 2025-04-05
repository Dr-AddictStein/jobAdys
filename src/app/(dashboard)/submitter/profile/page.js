export default function SubmitterProfilePage() {
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
              Vladyslav Titov
            </h1>
            <div style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              {/* Edit button */}
              <div style={{
                cursor: 'pointer'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="white"/>
                </svg>
              </div>
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
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '5px solid white',
              boxSizing: 'border-box',
            }}>
              <img 
                src="/human.jpeg" 
                alt="Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
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
              <p style={{ 
                fontSize: '1.1rem', 
                margin: '0.5rem 0',
                fontWeight: 'normal'
              }}>
                Born: 26.8.2005 (age 19)
              </p>
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
                Role: Submitter
              </p>
            </div>

            {/* Bio */}
            <div style={{
              textAlign: 'center',
              marginBottom: '2.5rem'
            }}>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.5',
                margin: '1rem 0',
                color: '#333'
              }}>
                I am administrator of JobAdys, overseeing user management and
                ensuring the platform's smooth operation. He is responsible for
                moderating content, managing offers, and addressing any violations to
                maintain a safe and productive environment for all users.
              </p>
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
                  Email: ******
                </p>
              </div>
              
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
                  Password: ********
                </p>
              </div>
              
              <div style={{
                textAlign: 'center'
              }}>
                <p style={{ 
                  fontSize: '1rem', 
                  margin: '0.5rem 0',
                  color: '#333'
                }}>
                  Mobile Phone: ******
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 