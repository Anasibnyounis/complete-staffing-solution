"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Departmentcards.module.css";

const DEPARTMENTS = [
  // Row 1
  { id: "media", title: "Media & Communications", color: "#4A7BAD" },
  { id: "nonprofit", title: "Nonprofit", color: "#6CA642" },
  { id: "public", title: "Public Administration", color: "#8B6F47" },
  { id: "real-estate", title: "Real Estate", color: "#4A7BAD" },
  { id: "travel", title: "Recreation & Travel", color: "#6CA642" },
  { id: "retail", title: "Retail", color: "#8B6F47" },
  { id: "it", title: "Software & IT Services", color: "#4A7BAD" },
  { id: "transportation", title: "Transportation & Logistics", color: "#6CA642" },
  { id: "wellness", title: "Wellness & Fitness", color: "#8B6F47" },
  
  // Row 2
  { id: "education", title: "Education", color: "#4A7BAD" },
  { id: "energy", title: "Energy & Mining", color: "#6CA642" },
  { id: "entertainment", title: "Entertainment", color: "#8B6F47" },
  { id: "finance", title: "Finance", color: "#4A7BAD" },
  { id: "hardware", title: "Hardware & Networking", color: "#6CA642" },
  { id: "healthcare", title: "Healthcare", color: "#E74C3C" },
  { id: "property", title: "Property Management", color: "#4A7BAD" },
  { id: "legal", title: "Legal", color: "#8B6F47" },
  { id: "manufacturing", title: "Manufacturing", color: "#6CA642" },
  
  // Row 3
  { id: "agriculture", title: "Agriculture", color: "#6CA642" },
  { id: "arts", title: "Arts", color: "#8B6F47" },
  { id: "construction", title: "Construction", color: "#4A7BAD" },
  { id: "consumergoods", title: "Consumer Goods", color: "#6CA642" },
  { id: "corporateservices", title: "Corporate Services", color: "#8B6F47" },
  { id: "design", title: "Design", color: "#4A7BAD" },
];

export default function DepartmentCards() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredDepartments = DEPARTMENTS.filter((dept) =>
    dept.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const departmentsToShow = showAll ? filteredDepartments : filteredDepartments.slice(0, 8);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    elements?.forEach((el, index) => {
      // Apply stagger animation for new cards
      setTimeout(() => {
        el.classList.add(styles.show);
      }, index * 50);
    });
  }, [showAll, searchQuery]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Search Box */}
        <div className={`${styles.searchWrapper} ${styles.reveal}`}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search departments (e.g. Healthcare, IT, Finance...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Department Cards Grid */}
        <div className={styles.cardsGrid}>
          {departmentsToShow.map((dept, index) => (
            <Link
              key={dept.id}
              href={`/industries-we-serve/${dept.id}`}
              className={`${styles.card} ${styles.reveal}`}
              style={{
                borderTopColor: dept.color,
                "--index": index,
              } as any} // for CSS stagger
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{dept.title}</h3>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.viewLink}>View Details</span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && filteredDepartments.length > 8 && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              style={{
                background: "#19478E",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "4px",
                fontWeight: 500,
                fontSize: "18px",
                cursor: "pointer",
                border: "none",
              }}
              onClick={() => setShowAll(true)}
            >
              View All Departments
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
