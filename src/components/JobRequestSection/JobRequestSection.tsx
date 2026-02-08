"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./JobRequestSection.module.css";

export default function JobRequestSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.section} ${isVisible ? styles.active : ""}`}>
      <div className={styles.overlay} />
      <div className={`${styles.content} ${styles.revealUp}`}>
        <h2 className={styles.headline}>Connecting businesses with the<br />best talent is our passion.</h2>
        <Link href="/job-request" className={styles.ctaButton}>Place a Job Request</Link>
      </div>
    </section>
  );
}