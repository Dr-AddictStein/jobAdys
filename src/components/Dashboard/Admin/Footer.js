import styles from '@/styles/Dashboard/Admin/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.disclaimer}>
        *The names and logos of the companies referred to above are all trademarks of their respective holders. Unless specifically stated otherwise, such references are not intended to imply any affiliation or association with JobAdys.
      </div>
      
      <div className={styles.columns}>
        <div>
          <h4>Main Pages</h4>
          <Link href="/">Home</Link>
          <Link href="#">My Profile</Link>
          <Link href="#">Offers</Link>
          <Link href="#">Profils</Link>
        </div>
        <div>
          <h4>About</h4>
          <Link href="#">About JobAdys</Link>
          <Link href="#">How It Works</Link>
          <Link href="#">Terms of Use</Link>
        </div>
        <div>
          <h4>Help & Support</h4>
          <Link href="#">FAQ</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Security Tips</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
      
      <hr className={styles.divider} />
      
      <div className={styles.bottom}>
        <Link href="#">Manage Cookies</Link>
        <Link href="#">Terms of Use</Link>
        <Link href="#">Privacy Policy</Link>
        <span>©2025 JobAdys</span>
      </div>
    </footer>
  );
}
