"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./IndustriesBrowseSection.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
/* Industry card data: image path, title, button label, button style (blue = Explore roles, green = Learn more) */
const INDUSTRIES = [
  {
    id: "healthcare",
    image: "/industries/healthcare.jpg",
    title: "Healthcare",
    description: "Qualified medical professionals for hospitals, clinics and practices",
    buttonLabel: "Explore roles",
    buttonVariant: "blue" as const,
    iconColor: "#4A7BAD",
  },
  {
    id: "office-finance",
    image: "/industries/office%20finance.jpg",
    title: "Office & Finance",
    description: "Experienced professionals for administrative and support roles",
    buttonLabel: "Learn more",
    buttonVariant: "green" as const,
    iconColor: "#6CA642",
  },
  {
    id: "legal",
    image: "/industries/legal.jpg",
    title: "Legal",
    description: "Experienced legal talent for law firms and legal departments",
    buttonLabel: "Explore roles",
    buttonVariant: "blue" as const,
    iconColor: "#4A7BAD",
  },
  {
    id: "manufacturing",
    image: "/industries/manufacture.jpg",
    title: "Manufacturing",
    description: "Skilled workers for production, assembly and quality",
    buttonLabel: "Learn more",
    buttonVariant: "green" as const,
    iconColor: "#6CA642",
  },
  {
    id: "office-admin",
    image: "/industries/office%20admin.jpg",
    title: "Office & Admin",
    description: "Experienced professionals for administrative and support roles",
    buttonLabel: "Explore roles",
    buttonVariant: "blue" as const,
    iconColor: "#4A7BAD",
  },
  {
    id: "information-technology",
    image: "/industries/information.jpg",
    title: "Information Technology",
    description: "Top-notch talent for IT solutions and operations",
    buttonLabel: "Learn more",
    buttonVariant: "green" as const,
    iconColor: "#6CA642",
  },
  {
    id: "real-estate",
    image: "/industries/real%20estate.jpg",
    title: "Real Estate",
    description: "Reliable agents and support staff for real estate industry",
    buttonLabel: "Explore roles",
    buttonVariant: "blue" as const,
    iconColor: "#4A7BAD",
  },
  {
    id: "logistics",
    image: "/industries/logistics.jpg",
    title: "Logistics",
    description: "Workers for supply chain, warehousing and distribution",
    buttonLabel: "Learn more",
    buttonVariant: "green" as const,
    iconColor: "#6CA642",
  },
];

const FILTERS = [
  "All",
  "Office & Admin",
  "Finance",
  "Healthcare",
  "Legal",
  "Manufacturing",
  "Tech",
];

// Icon component - renders different icons based on industry
function IndustryIcon({ title, color }: { title: string; color: string }) {
  return (
    <div className={styles.cardIcon} style={{ backgroundColor: color }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
        {title === "Healthcare" && (
          // Medical cross icon
          <path d="M10 2C10 2 10 2 10 2L10 8L16 8C16 8 16 8 16 8L16 12C16 12 16 12 16 12L10 12L10 18C10 18 10 18 10 18L6 18C6 18 6 18 6 18L6 12L0 12C0 12 0 12 0 12L0 8C0 8 0 8 0 8L6 8L6 2C6 2 6 2 6 2L10 2Z" transform="translate(2, 1)" />
        )}
        {title === "Office & Finance" && (
          // Briefcase icon
          <path d="M18 6h-3V4a2 2 0 00-2-2H7a2 2 0 00-2 2v2H2a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zM7 4h6v2H7V4zm11 14H2V8h16v10z" transform="scale(0.9) translate(1, 0)" />
        )}
        {title === "Legal" && (
          // Scale/balance icon
          <path d="M10 2L5 8h10l-5-6zm-5 8h10v1H5v-1zm0 3h10v1H5v-1zm2 3h6l-3 2-3-2z" />
        )}
        {title === "Manufacturing" && (
          // Gear/cog icon
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z" />
        )}
        {title === "Office & Admin" && (
          // Document/file icon
          <path d="M6 2h8l4 4v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v12h10V8h-4V4H6zm2 8h6v2H8v-2zm0-4h6v2H8v-2z" />
        )}
        {title === "Information Technology" && (
          // Monitor/computer icon
          <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v8h12V4H4zm2 10h8v2H6v-2z" />
        )}
        {title === "Real Estate" && (
          // House icon
          <path d="M10 2L2 8v10h6v-6h4v6h6V8l-8-6zm0 2.5L16 9v7h-2v-6H6v6H4V9l6-4.5z" />
        )}
        {title === "Logistics" && (
          // Box/package icon
          <path d="M10 2L2 6v8l8 4 8-4V6l-8-4zm0 2l6 3-6 3-6-3 6-3zm-6 5l6 3v6l-6-3V9zm8 3l6-3v6l-6 3V12z" />
        )}
      </svg>
    </div>
  );
}

export default function IndustriesBrowseSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  /* Filter industries by selected category and search query */
  const filteredIndustries = INDUSTRIES.filter((ind) => {
    const matchesSearch =
      !searchQuery.trim() ||
      ind.title.toLowerCase().includes(searchQuery.trim().toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      ind.title.toLowerCase().includes(activeFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={styles.groupParent}>
      {/* Search + filters strip (light blue background) */}
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} aria-hidden />
        <div className={styles.groupContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} aria-hidden />
            <div className={styles.searchInputWrapper}>
              <Image
                src="/industries/search%20icon.svg"
                alt=""
                width={40}
                height={40}
                className={styles.searchIcon}
                aria-hidden
                unoptimized
              />
              <input
                type="search"
                placeholder="Search industries (e.g. Healthcare, Legal...)"
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search industries"
              />
            </div>
          </div>
          <div className={styles.frameParent} role="group" aria-label="Filter by category">
            {FILTERS.map((label) => (
              <button
                key={label}
                type="button"
                className={
                  activeFilter === label
                    ? styles.filterButtonActive
                    : styles.filterButton
                }
                onClick={() => setActiveFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Industry cards grid */}
      <div className={styles.cardsGrid}>
        {filteredIndustries.map((industry) => (
          <div key={industry.id} className={styles.card}>
            <div className={styles.cardImageWrap}>
              <Image
                src={industry.image}
                alt=""
                fill
                className={styles.cardImage}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 280px"
                unoptimized
              />
            </div>
            <div className={styles.cardContent}>
              {/* Icon + Title */}
              <div className={styles.cardHeader}>
                <IndustryIcon title={industry.title} color={industry.iconColor} />
                <h3 className={styles.cardTitle}>{industry.title}</h3>
              </div>
              {/* Description */}

              <p className={styles.cardDescription}>     {industry.description}</p>
              {/* Button */}
              <Link
                href={
                  industry.buttonVariant === "blue"
                    ? "/job-request"
                    : "/industries-we-serve"
                }
                className={
                  industry.buttonVariant === "blue"
                    ? `${styles.cardButton} ${styles.buttonBlue}`
                    : `${styles.cardButton} ${styles.buttonGreen}`
                }
              >
                {industry.buttonLabel}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}