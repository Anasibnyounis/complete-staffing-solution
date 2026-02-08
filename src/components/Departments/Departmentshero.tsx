"use client";
import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import styles from './Departmentshero.module.css';

const DepartmentsHero: React.FC = () => {
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
      <div className={styles.container}>
        <h1 className={`${styles.title} ${styles.reveal}`}>
          POSITIONS WE RECRUIT ACROSS INDUSTRIES
        </h1>
        <p className={`${styles.subtitle} ${styles.reveal} ${styles.delay1}`}>
          If our many facets to executive roles — connect with talent to fill the goal- fast, efficiently.
        </p>
        <div className={`${styles.buttons} ${styles.reveal} ${styles.delay2}`}>
          <Link href="/job-request">
            <button className={styles.btnPrimary}>
              Place Job Request
            </button>
          </Link>

          <Link href="/contact">
            <button className={styles.btnSecondary}>
              Talk To Recruiter
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsHero;