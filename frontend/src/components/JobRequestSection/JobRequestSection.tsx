import Link from "next/link";
import styles from "./JobRequestSection.module.css";

export default function JobRequestSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="job-request-headline"
    >
      <div className={styles.overlay} aria-hidden />
      <div className={styles.content}>
        <h2 id="job-request-headline" className={styles.headline}>
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
