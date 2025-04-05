import Image from "next/image";
import styles from "@/styles/Hellopage/Hero.module.css";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>The #1 Freelance Site to Find
            Remote Jobs-No Ads, Scams,
            or even Junk
        </h2>
        <p className={styles.contentText}>Find your next flexible, hybrid, or work from home job.</p>
        <Link href="/auth">
          <button className={styles.button}>Find Your Next Remote Job!</button>
        </Link>
      </div>
      <Image src="/heroImage.svg" alt="JobAdys Hero Image" width={450} height={250}/>
    </section>
  );
}

