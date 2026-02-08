"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Industries.module.css";

const ICONS_BASE = "/homepage/industries%20section";

function enc(path: string) {
  return path.replace(/ /g, "%20").replace(/\(/g, "%28").replace(/\)/g, "%29");
}

const industries = [
  { name: "Agriculture", icon: "planting 1.svg", slug: "agriculture" },
  { name: "Arts", icon: "art 1.svg", slug: "arts" },
  { name: "Legal", icon: "legal-document (1) 1.svg", slug: "legal" },
  { name: "Manufacturing", icon: "manufacturing 1.svg", slug: "manufacturing" },
  { name: "Corporate Services", icon: "service 1.svg", slug: "corporateservices" },
  { name: "Construction", icon: "engineer 1.svg", slug: "construction" },
  { name: "Information Technology", icon: "information-technology 1.svg", slug: "it" },
  { name: "Consumer Goods", icon: "goods (1) 1.svg", slug: "consumergoods" },
  { name: "Design", icon: "loupe 1.svg", slug: "design" },
  { name: "Education", icon: "education (1) 1.svg", slug: "education" },
  { name: "Energy", icon: "flash 1.svg", slug: "energy" },
  { name: "Entertainment", icon: "video (1) 1.svg", slug: "entertainment" },
  { name: "Finance", icon: "bar-chart 1.svg", slug: "finance" },
  { name: "Healthcare", icon: "heart-rate 1.svg", slug: "healthcare" },
];

const positions = [
  { name: "Accountant", icon: "accounting 1.svg" },
  { name: "Controller", icon: "bar-chart 1.svg" },
  { name: "Surgical Schedulers", icon: "calendar 1.svg" },
  { name: "Medical Assistants", icon: "nurse-cap 1.svg" },
  { name: "Pharmacy Technicians", icon: "pharmacy 1.svg" },
  { name: "Physician Assistants", icon: "physician (1) 1.svg" },
  { name: "Nursing & Allied Health", icon: "nurse-cap 1.svg" },
  { name: "Contract Recruiters", icon: "integration 1.svg" },
  { name: "Accounts Payable Specialist", icon: "invoice 1.svg" },
  { name: "Accounts Receivable Specialist", icon: "accounting 1.svg" },
  { name: "Accounting Manager", icon: "accounting 1.svg" },
  { name: "Patient Service Coordinators", icon: "calendar 1.svg" },
  { name: "Medical Billers", icon: "invoice 1.svg" },
];

const INITIAL_COUNT = 6;

function ItemCard({
  name,
  iconFile,
  href,
  index,
  isVisible,
}: {
  name: string;
  iconFile: string;
  href: string;
  index: number;
  isVisible: boolean;
}) {
  const iconSrc = `${ICONS_BASE}/${enc(iconFile)}`;
  const arrowSrc = `${ICONS_BASE}/${enc("iconamoon_arrow-down-2.svg")}`;

  return (
    <Link 
      href={href} 
      className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className={styles.cardLeft}>
        <div className={styles.cardIconWrap}>
          <Image 
            src={iconSrc} 
            alt="" 
            width={40} 
            height={40} 
            className={styles.cardIcon}
            unoptimized 
          />
        </div>
        <span className={styles.cardLabel}>{name}</span>
      </div>
      <Image 
        src={arrowSrc} 
        alt="" 
        width={30} 
        height={30} 
        className={styles.cardArrow}
        unoptimized 
      />
    </Link>
  );
}

export default function Industries() {
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [showAllPositions, setShowAllPositions] = useState(false);
  const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
  const [isPositionsVisible, setIsPositionsVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const industriesRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === industriesRef.current) {
            setIsIndustriesVisible(true);
          } else if (entry.target === positionsRef.current) {
            setIsPositionsVisible(true);
          } else if (entry.target === statsRef.current) {
            setIsStatsVisible(true);
          }
        }
      });
    }, observerOptions);

    if (industriesRef.current) observer.observe(industriesRef.current);
    if (positionsRef.current) observer.observe(positionsRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const handleShowAllIndustries = () => {
    setShowAllIndustries(true);
  };

  const handleShowAllPositions = () => {
    setShowAllPositions(true);
  };

  return (
    <section className={styles.section}>
      {/* -------- INDUSTRIES -------- */}
      <div 
        ref={industriesRef}
        className={`${styles.block} ${isIndustriesVisible ? styles.blockVisible : ''}`}
      >
        <h3 className={styles.blockTitle}>Industries We Serve:</h3>

        <div className={styles.cardsGrid}>
          {(showAllIndustries
            ? industries
            : industries.slice(0, INITIAL_COUNT)
          ).map((item, index) => (
            <ItemCard
              key={item.name}
              name={item.name}
              iconFile={item.icon}
              href={`/industries-we-serve/${item.slug}`}
              index={index}
              isVisible={isIndustriesVisible}
            />
          ))}
        </div>

        {!showAllIndustries && (
          <div className={`${styles.buttonWrap} ${isIndustriesVisible ? styles.buttonVisible : ''}`}>
            <button
              className={`${styles.viewAllButton} ${styles.viewAllIndustries}`}
              onClick={handleShowAllIndustries}
            >
              View All Industries
            </button>
          </div>
        )}
      </div>

      {/* -------- POSITIONS -------- */}
      <div 
        ref={positionsRef}
        className={`${styles.block} ${isPositionsVisible ? styles.blockVisible : ''}`}
      >
        <h3 className={styles.blockTitle}>Positions We Specialize In:</h3>

        <div className={styles.cardsGrid}>
          {(showAllPositions
            ? positions
            : positions.slice(0, INITIAL_COUNT)
          ).map((item, index) => (
            <ItemCard
              key={item.name}
              name={item.name}
              iconFile={item.icon}
              href={`/primary-positions?q=${encodeURIComponent(item.name)}`}
              index={index}
              isVisible={isPositionsVisible}
            />
          ))}
        </div>

        {!showAllPositions && (
          <div className={`${styles.buttonWrap} ${isPositionsVisible ? styles.buttonVisible : ''}`}>
            <button
              className={`${styles.viewAllButton} ${styles.viewAllPositions}`}
              onClick={handleShowAllPositions}
            >
              View All Positions
            </button>
          </div>
        )}
      </div>

      {/* -------- STATS -------- */}
      <div 
        ref={statsRef}
        className={`${styles.statsBlock} ${isStatsVisible ? styles.statsVisible : ''}`}
      >
        <div className={styles.statItem}>
          <div className={styles.statNumber}>14K</div>
          <div className={styles.statDescription}>
            We have served over 14,000 businesses and job seekers
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>83K</div>
          <div className={styles.statDescription}>
            We have placed over 83,000 candidates in rewarding positions
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>30K</div>
          <div className={styles.statDescription}>
            We have built relationships with over 30,000 talented professionals
          </div>
        </div>
      </div>
    </section>
  );
}