"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => { setIsActive(true); }, []);

  return (
    <section className={`${styles.heroSection} ${isActive ? styles.active : ""}`}>
      <Image
        className={`${styles.heroImage} ${styles.revealRight}`}
        src="/homepage/hero%20image.png"
        alt="Professionals collaborating"
        width={780} height={560} priority
      />

      <div className={styles.contentOverlay}>
        <div className={styles.gradientBg} />
        <div className={`${styles.contentInner} ${styles.revealLeft}`}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>Empowering Careers.<br />Strengthening<br />Businesses.</h1>
            <p className={styles.description}>For over 25 years, we’ve matched exceptional candidates with leading employers — helping businesses grow and careers thrive.</p>
          </div>
          <div className={`${styles.buttonsRow} ${styles.delay1}`}>
            <Link href="/job-request" className={`${styles.ctaButton} ${styles.ctaButtonCandidate}`}>Find an Ideal Candidate</Link>
            <Link href="/open-position" className={`${styles.ctaButton} ${styles.ctaButtonPosition}`}>Find an Ideal Position</Link>
          </div>
        </div>
      </div>
    </section>
  );
}