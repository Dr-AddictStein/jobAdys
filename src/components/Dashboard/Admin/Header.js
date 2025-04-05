'use client';

import Image from 'next/image';
import styles from '@/styles/Dashboard/Admin/Header.module.css';

export default function Navbar() {
  return (
    <nav className={styles.Header}>
      <div className={styles.left}>
        <Image src="/logo.png" alt="JobAdys Logo" width={30} height={30} />
        <span className={styles.logoText}>JobAdys</span>
        <input className={styles.search} type="text" placeholder="Search job here..." />
      </div>
      <div className={styles.right}>
        <a href="#">My Profile</a>
        <a href="#">All Profiles</a>
        <a href="#">All Offers</a>
        <a href="#">Write System Notification</a>
        <span className={styles.username}>Vladyslav Titov</span>
      </div>
    </nav>
  );
}
