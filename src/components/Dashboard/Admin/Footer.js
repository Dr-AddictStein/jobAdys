import styles from '@/styles/Dashboard/Admin/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <h4>Main Pages</h4>
          <a href="#">Home</a>
          <a href="#">My Profile</a>
          <a href="#">Offers</a>
          <a href="#">Profiles</a>
        </div>
        <div>
          <h4>About</h4>
          <a href="#">About JobAdys</a>
          <a href="#">How It Works</a>
          <a href="#">Terms of Use</a>
        </div>
        <div>
          <h4>Help & Support</h4>
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Security Tips</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>Manage Cookies</span>
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>©2025 JobAdys</span>
      </div>
    </footer>
  );
}
