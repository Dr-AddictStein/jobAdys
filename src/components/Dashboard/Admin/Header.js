'use client';

import Image from 'next/image';
import styles from '@/styles/Dashboard/Admin/Header.module.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch the user data or get it from session/local storage
    // This is a placeholder - replace with your actual authentication method
    const fetchUserData = async () => {
      try {
        // Example: Get from localStorage, session, or API call
        const user = localStorage.getItem('user');
        if (user) {
          const userData = JSON.parse(user);
          setUsername(userData.name || userData.username || 'User');
        } else {
          // If no user in storage, you might want to redirect to login
          // or use a guest username
          setUsername('Guest');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUsername('User');
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.Header}>
        <div className={styles.left}>
          <Image src="/Logotipe.png" alt="JobAdys Logo" width={120} height={40} />
          <div className={styles.searchContainer}>
            <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input className={styles.search} type="text" placeholder="Search job here..." />
          </div>
        </div>
        <div className={styles.right}>
          <span className={styles.username}>{username || 'Vladyslav Titov'}</span>
        </div>
      </nav>
      <div className={styles.navLinks}>
        <a href="#">My Profile</a>
        <a href="#">All Profiles</a>
        <a href="#">All Offers</a>
        <a href="#">Write System Notification</a>
      </div>
    </div>
  );
}
