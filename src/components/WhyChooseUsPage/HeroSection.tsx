"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add(styles.active);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.hero} ${styles.reveal}`}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={`${styles.reveal} ${styles.revealLeft}`}>
            <h1 className={styles.title}>
              WHY USE COMPLETE STAFFING SOLUTIONS?
            </h1>
            <p className={styles.text}>
              It is our passion for search and career placement that really sets us apart. We have the best employee retention in the industry and have grown through two recessions because of our talented staff. No one will take more time to learn your culture and what you need than Complete Staffing Solutions. It is the opportunity to service companies like yours that has helped Complete Staffing become one of the top staffing firms in Southern New England.
            </p>
          </div>

          <div className={`${styles.heroImage} ${styles.reveal} ${styles.revealRight} ${styles.delay1}`}>
            <Image
              src="/why%20choose%20us/whychooseus-hero.jpg"
              alt="Business professionals"
              fill
              className={styles.image}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}