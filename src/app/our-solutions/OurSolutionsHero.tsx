"use client";
import Link from "next/link";
import styles from "../industries-we-serve/healthcare/IndustryDetailPageHero.module.css";

export default function OurSolutionsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} style={{ backgroundImage: "url('/about us/our service placeholder.jpg')" }} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Our Solutions</h1>
        <p className={styles.subtitle}>
        Our solutions should break down into Retained, Executive search, Contract, Direct-Hire
        </p>
        <Link href="/job-request" className={styles.ctaButton}>Place Job Request</Link>
      </div>
    </section>
  );
}
