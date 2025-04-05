import styles from "@/styles/Footer.module.css";


export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerLegal}>
        <p>
        *The names and logos of the companies referred to above are all trademarks of their respective holders. Unless specifically stated otherwise, such references are not intended to imply any affiliation or association with JobAdys.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>Main Pages</h4>
          <ul>
            <li><a href="../">Home</a></li>
            <li><a href="#">Find Offer</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>About</h4>
          <ul>
            <li><a href="/public/about">About JobAdys</a></li>
            <li><a href="/public/about">How It Works</a></li>
            <li><a href="/public/about">Terms of Use</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Help & Support</h4>
          <ul>
            <li><a href="/public/help">FAQ</a></li>
            <li><a href="/public/help">Privacy Policy</a></li>
            <li><a href="/public/help">Security Tips</a></li>
            <li><a href="/public/help">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <hr className={styles.line} />
        <div className={styles.bottomLinks}>
          <a href="/public/about">Terms of Use</a>
          <span>|</span>
          <a href="/public/help">Privacy Policy</a>
          <span>|</span>
          <p>©2025 JobAdys</p>
        </div>
      </div>
    </footer>
  );
}