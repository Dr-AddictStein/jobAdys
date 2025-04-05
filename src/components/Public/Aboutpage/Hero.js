import styles from "@/styles/Aboutpage/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>About JobAdys – Your Gateway to Real Projects</h2>
        <p className={styles.contentText}>Learn about JobAdys, how to use the platform, and our Terms of Use.</p>
      </div>
    </section>
  );
}
