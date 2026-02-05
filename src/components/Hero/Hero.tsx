"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Hero image - right side */}
      <Image
        className={styles.heroImage}
        src="/homepage/hero%20image.png"
        alt="Professionals collaborating at desk with laptop"
        width={780}
        height={560}
        priority
        sizes="(max-width: 1200px) 60vw, 780px"
      />

      {/* Left content overlay with gradient */}
      <div className={styles.contentOverlay}>
        <div className={styles.gradientBg} />
        <div className={styles.contentInner}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>
              Empowering Careers.
              <br />
              Strengthening
              <br />
              Businesses.
            </h1>
            <p className={styles.description}>
              For over 25 years, we&apos;ve matched exceptional candidates with
              leading employers — helping businesses grow and careers thrive.
            </p>
          </div>
          <div className={styles.buttonsRow}>
            <Link
              href="/job-request"
              className={`${styles.ctaButton} ${styles.ctaButtonCandidate}`}
            >
              Find an Ideal Candidate
            </Link>
            <Link
              href="/primary-positions"
              className={`${styles.ctaButton} ${styles.ctaButtonPosition}`}
            >
              Find an Ideal Position
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
