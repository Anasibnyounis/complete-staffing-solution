"use client";

import { useEffect, useRef } from 'react';
import Link from "next/link";
import styles from './Departmentshero.module.css';
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-jakarta",
});

export default function DepartmentsHero() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
        }
      });
    }, { threshold: 0.1 });

    const elements = revealRef.current?.querySelectorAll(`.${styles.reveal}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} ref={revealRef}>
      <div className={styles.heroBackground} />
      <div className={styles.container}>
        <h1 className={`${styles.title} ${styles.reveal}`}>
          POSITIONS WE RECRUIT ACROSS INDUSTRIES
        </h1>
        <p className={`${styles.subtitle} ${styles.reveal} ${styles.delay1}`}>
          From entry-level to executive roles — connect with top talent to fill your goals fast and efficiently.
        </p>
        <div className={`${styles.buttons} ${styles.reveal} ${styles.delay2}`}>
          <Link href="/job-request" className={styles.btnPrimary}>
            Place Job Request
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            Talk To Recruiter
          </Link>
        </div>
      </div>
    </section>
  );
}