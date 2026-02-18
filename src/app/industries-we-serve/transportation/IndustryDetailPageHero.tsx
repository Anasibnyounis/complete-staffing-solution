"use client";
import Link from "next/link";
import styles from "./IndustryDetailPageHero.module.css";

export default function IndustryDetailPageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} style={{ backgroundImage: "url('/industries detail pages/transportation-hero.jpg')" }} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Transportation & Logistics Staffing Solutions</h1>
        <p className={styles.subtitle}>
Delivering efficiency to the global economy with expert supply chain talent.          </p>
        <Link href="/job-request" className={styles.ctaButton}>Place Job Request</Link>
      </div>
    </section>
  );
}