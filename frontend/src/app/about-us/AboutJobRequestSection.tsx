import Link from "next/link";
import styles from "./AboutJobRequestSection.module.css";

export default function AboutJobRequestSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-job-request-headline"
    >
      <div className={styles.overlay} aria-hidden />
      <div className={styles.content}>
        <h2 id="about-job-request-headline" className={styles.headline}>
          Connecting businesses with the
          <br />
          best talent is our passion.
        </h2>
        <Link href="/job-request" className={styles.ctaButton}>
          Place a Job Request
        </Link>
      </div>
    </section>
  );
}
