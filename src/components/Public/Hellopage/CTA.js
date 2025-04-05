import Image from "next/image";
import styles from "@/styles/Hellopage/CTA.module.css";
import Link from 'next/link';

export default function CTA() {
    return (
      <section className={styles.CTA}>
         <Image src="/threeStars.svg" alt="CTA stars" width={66} height={94}/>
        <h3 className={styles.title}>
        Over 100,000 Jobseekers Have Used 
        JobAdys to Find the Best Way to Work
        </h3>
        <Link href="/auth">
          <button className={styles.button}>Find Your Next Remote Job!</button>
        </Link>
      </section>
    );
  }
  