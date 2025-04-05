import Image from "next/image";
import styles from "@/styles/Helppage/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>Help & Support Center</h2>
        <p className={styles.contentText}>Find the answers to your questions or get assistance from our team.</p>
      </div>
    </section>
  );
}
