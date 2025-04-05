'use client';

import Image from 'next/image';
import styles from '@/styles/Dashboard/Admin/Header.module.css';
import { useUser } from '@/hooks/useUser';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Navbar() {
  const { user } = useUser();
  const { logout } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("user", user);
    }
  }, [user]);
  
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.Header}>
        <div className={styles.left}>
          <Link href="/submitter">
            <Image src="/Logotipe.png" alt="JobAdys Logo" width={120} height={40} />
          </Link>
          <div className={styles.searchContainer}>
            <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input className={styles.search} type="text" placeholder="Search job here..." />
          </div>
        </div>
        <div className={styles.right}>
          <span className={styles.username}>{user?.name || 'Guest'}</span>
          <button onClick={logout} className={styles.logoutButton}>Logout</button>
        </div>
      </nav>
      <div className={styles.navLinks}>
        <Link href="/submitter/profile">My Profile</Link>
        <Link href="/submitter">Dashboard</Link>
        <Link href="/submitter/allOffers">All Offers</Link>
        <Link href="/submitter/newOffer">Create New Offer</Link>
      </div>
    </div>
  );
}
