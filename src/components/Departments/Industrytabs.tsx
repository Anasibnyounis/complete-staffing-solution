"use client";

import React, { useState } from "react";
import styles from "./Industrytabs.module.css";
import { FaSearch } from "react-icons/fa";
const IndustryTabs: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    "Accounting",
    "Administrative",
    "Engineering",
    "Finance",
    "Healthcare",
    "Information Technology",
    "Sales",
  ];

  const positions = {
    column1: [
      "Accounting Manager",
      "Finance Manager",
      "Credit Analyst",
      "Financial Analyst",
      "Staff and Senior Accountants",
      "Payroll Specialists",
      "Collections Specialist",
      "Accounting Managers",
      "Administrative Assistant",
    ],
    column2: [
      "Bookkeepers",
      "AP & AR Specialist",
      "Credit & Collections",
      "Office Manager",
      "Executive Assistant",
      "Administrative Assistant",
      "Receptionist",
      "Human Resource Assistant",
      "Coder",
    ],
    column3: [
      "Marketing Assistant",
      "Customer Service Representative",
      "Data Entry Specialist",
      "Medical Billing Professionals",
      "Medical Receptionist",
      "Medical Secretary",
      "Mortgage Professionals",
      "Loan Officers",
      "Receptionist",
    ],
    column4: [
      "Registered Nurse",
      "Physical Therapist",
      "Medical Assistant",
      "Phlebotomist",
      "Dental Assistant",
      "Patient Care Technician",
      "Medical Biller",
      "Medical Secretary",
    ],
  };

  return (
    <section className={styles.section}>
      {/* Top Section: Blue background with input + buttons */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          {/* Search Input */}
          <div className={styles.searchBox}>
            <div className={styles.searchInputWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search industries (e.g Healthcare, Legal...)"
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* Buttons Row */}
          <div className={styles.buttonsRow}>
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

      {/* Positions Section: Full width white */}
      <div className={styles.positionsWrapper}>
        <div className={styles.positionsGrid}>
          <div className={styles.column}>
            <ul>
              {positions.column1.map((position, idx) => (
                <li key={idx}>{position}</li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <ul>
              {positions.column2.map((position, idx) => (
                <li key={idx}>{position}</li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <ul>
              {positions.column3.map((position, idx) => (
                <li key={idx}>{position}</li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <ul>
              {positions.column4.map((position, idx) => (
                <li key={idx}>{position}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryTabs;
