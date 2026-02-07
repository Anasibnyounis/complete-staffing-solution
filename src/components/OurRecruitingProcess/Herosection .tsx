import React from 'react';
import styles from './Herosection.module.css'
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
/////font
////////font

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-jakarta",
});
//////
const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>OUR RECRUITING PROCESS</h1>
        <p className={styles.subtitle}>
Finding the Right Talent. The Right Way.        </p>
        <p className={styles.description}>
          At Complete Staffing Solutions, our recruiting process is built to be fast, transparent, and human-focused. We don’t just fill positions — we connect the right people with the right opportunities through a proven, step-by-step approach.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;