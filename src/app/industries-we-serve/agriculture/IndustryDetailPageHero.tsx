"use client";
import Link from "next/link";
import styles from "./IndustryDetailPageHero.module.css";

export default function IndustryDetailPageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} style={{ backgroundImage: "url('/industries detail pages/agriculture-hero.jpg')" }} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Agriculture Staffing Solutions</h1>
        <p className={styles.subtitle}>Supporting the backbone of the food supply chain with skilled and reliable workforce solutions.</p>
        <Link href="/job-request" className={styles.ctaButton}>Place Job Request</Link>
      </div>
    </section>
  );
}