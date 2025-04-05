import Image from "next/image";
import styles from "@/styles/AUTH/AUTH.module.css";
import Link from 'next/link';


export default function Main() {
    return (
      <section className={styles.Main}>
        <div className={styles.page}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <Image src="/logotypeH.svg" alt="JobAdys Logo" width={154} height={50} />
                    <p>
                        JobAdys is a freelancing social networking platform helping professionals connect and collaborate remotely.
                    </p>
                    <Image
                        src="/heroImage.svg"
                        alt="Illustration"
                        width={330}
                        height={230}
                    />
                </div>
                <hr className={styles.Bdivider} />
                <div className={styles.right}>
                    <div className={styles.block}>
                        <h2>First time here?</h2>
                        <p>Press Sign up and join our lines</p>
                        <Link href="/auth/registration" className={styles.button}>Sign up</Link>
                    </div>

                    <hr className={styles.divider} />

                    <div className={styles.block}>
                        <h3>Registered user?</h3>
                        <Link href="/auth/login" className={styles.button}>Sign in</Link>
                    </div>

                    <p className={styles.help}>
                        Do you need <Link href="/help">help</Link>?
                    </p>
                </div>
            </div>
        </div>
      </section>
    );
  }