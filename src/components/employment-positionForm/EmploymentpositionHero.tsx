"use client";

import styles from "./EmploymentpositionHero.module.css";
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
export default function EmploymentpositionHero() {
  return (
    <section className={styles.heroSection}>
      {/* Dark overlay */}
      <div className={styles.heroOverlay} />

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
Online Application          </h1>
          <p className={styles.heroSubtitle}>
            Kindly take the opportunity to review the current openings on our job board, where you have the option to submit direct applications for the positions of interest. In the event that you do not come across a role that aligns with your preferences or career aspirations, we encourage you to provide your information below. By doing so, our dedicated team of recruiters will promptly reach out to engage in a more comprehensive discussion regarding potential opportunities that may be a suitable fit for your professional goals. Your proactive engagement in this process is appreciated, and we look forward to the possibility of welcoming you to our organization.
          </p>
        </div>
      </div>
    </section>
  );
}
