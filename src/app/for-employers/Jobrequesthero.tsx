import styles from "./Jobrequesthero.module.css";

export default function JobRequestHero() {
  return (
    <section className={styles.heroSection}>
      {/* Dark overlay */}
      <div className={styles.heroOverlay} />

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Find Your Perfect Candidate
          </h1>
          <p className={styles.heroSubtitle}>
            Tell us about your hiring needs and we'll connect you with top talent.
            Our experienced team is ready to help you build your dream team.
          </p>
        </div>
      </div>
    </section>
  );
}
