"use client";

import { useEffect, useRef } from "react";
import styles from "./Policies.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export default function PoliciesHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hero section page load par hi animate hona chahiye
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add(styles.active);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.hero} ${styles.reveal}`}>
      <div className={styles.container}>
        <h1 className={`${styles.heroTitle} ${styles.reveal} ${styles.revealDown}`}>
          POLICIES AND DISCLOSURES
        </h1>
        
        <p className={`${styles.heroDate} ${styles.reveal} ${styles.revealDown} ${styles.delay1}`}>
          Last updated: Oct 17, 2025 10:47 AM
        </p>

        <div className={styles.heroTextContainer}>
          <p className={`${styles.heroText} ${styles.reveal} ${styles.revealLeft} ${styles.delay2}`}>
            We value your privacy very highly. Please read this Privacy Policy carefully before using the completestaffingsolutions.com website (the “Website”) operated by Complete Staffing Solutions, a(n) Corporation formed in Massachusetts, United States (“us, we, our”) as this Privacy Policy contains important information regarding your privacy and how we may use the information we collect about you.
          </p>

          <p className={`${styles.heroText} ${styles.reveal} ${styles.revealRight} ${styles.delay3}`}>
            Your access to or use of the Website is conditional upon your acceptance of and compliance with this Privacy Policy. This Privacy Policy applies to everyone, including but not limited to visitors, users and others, who wish to access or use the Website.
          </p>

          <p className={`${styles.heroText} ${styles.reveal} ${styles.revealUp} ${styles.delay4}`}>
            By accessing or using the Website, you agree to be bound by this Privacy Policy. If you disagree with any part of this Privacy Policy, you do not have our permission to access or use the Website.
          </p>
        </div>
      </div>
    </section>
  );
}