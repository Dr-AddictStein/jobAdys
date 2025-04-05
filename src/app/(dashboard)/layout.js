import Header from '@/components/Dashboard/Admin/Header';
import Footer from '@/components/Dashboard/Admin/Footer';
import styles from '@/styles/Dashboard/Layout.module.css';

export default function AdminLayout({ children }) {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.contentWrapper}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
