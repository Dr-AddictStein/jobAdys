import styles from "@/styles/Header.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
        <section className={styles.section}>
            <Image src="/logotype.svg" alt="JobAdys Logo" width={150} height={50} />
            <nav className={styles.authNav}>
                <Link href="/auth/login">
                  <button hreaf="/login" className={styles.signIn}>Sign In</button>
                </Link>
                <Link href="/auth/registration">
                  <button className={styles.signUp}>Sign Up</button>
                  </Link>
            </nav>
        </section>
    </header>
  );
}