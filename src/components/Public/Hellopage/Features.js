import Image from "next/image";
import styles from "@/styles/Hellopage/Features.module.css";

export default function Features() {
    return (
      <section className={styles.JobAdysSection}>
        <h2 className={styles.heading}>How JobAdys is Different</h2>

        <div className={styles.content}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}></span>
              <div>
                <h3 className={styles.title}>Higher Quality Listings</h3>
                <p className={styles.text}>
                  Only legit jobs. No ads, scams, or junk to sift through. Our team spends 200+ hours/day verifying every job.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}></span>
              <div>
                <h3 className={styles.title}>Unlimited Job Search Resources</h3>
                <p className={styles.text}>
                  Full access to all features including unlimited jobs, articles, and webinars to help you with your remote job search.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}></span>
              <div>
                <h3 className={styles.title}>Save Time</h3>
                <p className={styles.text}>
                  Go straight from job listings to applications. No more hopping from one job board to the next.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image src="/Features.svg" alt="JobAdys Team" width={630} height={550} className={styles.image} />
          </div>
        </div>
      
    </section>
    );
  }
  