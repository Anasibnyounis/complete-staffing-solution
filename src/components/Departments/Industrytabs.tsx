"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Industrytabs.module.css";
import { FaSearch } from "react-icons/fa";

const IndustryTabs: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
        }
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const industries = [
    "Accounting", "Administrative", "Engineering", "Finance", "Healthcare", "Information Technology", "Sales",
  ];

  const positions = {
    column1: ["Accounting Manager", "Finance Manager", "Credit Analyst", "Financial Analyst", "Staff and Senior Accountants", "Payroll Specialists", "Collections Specialist", "Accounting Managers", "Administrative Assistant"],
    column2: ["Bookkeepers", "AP & AR Specialist", "Credit & Collections", "Office Manager", "Executive Assistant", "Administrative Assistant", "Receptionist", "Human Resource Assistant", "Coder"],
    column3: ["Marketing Assistant", "Customer Service Representative", "Data Entry Specialist", "Medical Billing Professionals", "Medical Receptionist", "Medical Secretary", "Mortgage Professionals", "Loan Officers", "Receptionist"],
    column4: ["Registered Nurse", "Physical Therapist", "Medical Assistant", "Phlebotomist", "Dental Assistant", "Patient Care Technician", "Medical Biller", "Medical Secretary"],
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={`${styles.searchBox} ${styles.reveal}`}>
            <div className={styles.searchInputWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search industries (e.g Healthcare, Legal...)"
                className={styles.searchInput}
              />
            </div>
          </div>

          <div className={`${styles.buttonsRow} ${styles.reveal} ${styles.delay1}`}>
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`${styles.industryButton} ${
                  index === activeIndustry ? styles.activeButton : ""
                }`}
                onClick={() => setActiveIndustry(index)}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.positionsWrapper} `}>
        <div className={styles.positionsGrid}>
          {[positions.column1, positions.column2, positions.column3, positions.column4].map((col, i) => (
            <div key={i} className={styles.column}>
              <ul>
                {col.map((position, idx) => (
                  <li key={idx}>{position}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryTabs;