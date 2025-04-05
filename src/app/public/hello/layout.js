import "@/styles/globals.css";
import styles from '@/styles/Public/Layout.module.css';

export default function PublicLayout({ children }) {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.contentWrapper}>
        {children}
      </main>
    </div>
  );
}
