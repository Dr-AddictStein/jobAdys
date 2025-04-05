import '@/styles/globals.css';
import styles from '@/styles/Auth/Layout.module.css';

export default function AUTHLayout({ children }) {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.contentWrapper}>
        {children}
      </main>
    </div>
  )
}