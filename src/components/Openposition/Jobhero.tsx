"use client";
import styles from "./Openposition.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function JobHero() {
  return (
    <section className={`${styles.hero} ${jakarta.variable} ${inter.variable}`}>
      <div className={styles.heroOverlay} />
      
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          FIND YOUR NEXT OPPORTUNITY
        </h1>
        <p className={styles.heroSubtitle}>
          Browse current openings and apply updated daily.
        </p>
        
        <div className={styles.searchForm}>
          <div className={styles.searchInputs}>
            
            {/* Keyword Input Wrapper */}
            <div className={styles.inputWrapper}>
              <img src="/open position/1.png" alt="" className={styles.inputIcon} />
              <input
                type="text"
                placeholder="Keyword"
                className={styles.searchInput}
              />
            </div>

            {/* Location Input Wrapper */}
            <div className={styles.inputWrapper}>
              <img src="/open position/4.png" alt="" className={styles.inputIcon} />
              <input
                type="text"
                placeholder="Location"
                className={styles.searchInput}
              />
            </div>

            {/* Category Select Wrapper */}
            <div className={styles.selectWrapper}>
              <img src="/open position/2.png" alt="" className={styles.inputIcon} />
              <select className={styles.searchSelect}>
                <option>All Categories</option>
                <option>Finance</option>
                <option>Operations</option>
                <option>Technology</option>
                <option>Administrative</option>
              </select>
              {/* Custom Dropdown Arrow */}
              <div className={styles.customArrow}>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>

            <button className={styles.searchButton}>
              Search Job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}