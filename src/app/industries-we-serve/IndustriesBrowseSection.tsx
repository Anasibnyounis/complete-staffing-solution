"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./IndustriesBrowseSection.module.css";

/* Industry card data: image path, title, button label, button style (blue = Explore roles, green = Learn more) */
const INDUSTRIES = [
  {
    id: "healthcare",
    image: "/industries/healthcare.jpg",
    title: "Healthcare",
    buttonLabel: "Explore roles",
    buttonVariant: "blue" as const,
  },
  {
    id: "office-finance",
    image: "/industries/office%20finance.jpg",
    title: "Office & Finance",
    buttonLabel: "Learn more",
    buttonVariant: "green" as const,
  },
  {
    id: "legal",
    image: "/industries/legal.jpg",
    title: "Legal",
    buttonLabel: "Explore roles",
    buttonVariant: "blue" as const,
  },
  {
    id: "manufacturing",
    image: "/industries/manufacture.jpg",
    title: "Manufacturing",
    buttonLabel: "Learn more",
    buttonVariant: "green" as const,
  },
  {
    id: "office-admin",
    image: "/industries/office%20admin.jpg",
    title: "Office & Admin",
    buttonLabel: "Explore roles",
    buttonVariant: "blue" as const,
  },
  {
    id: "information-technology",
    image: "/industries/information.jpg",
    title: "Information Technology",
    buttonLabel: "Learn more",
    buttonVariant: "green" as const,
  },
  {
    id: "real-estate",
    image: "/industries/real%20estate.jpg",
    title: "Real Estate",
    buttonLabel: "Explore roles",
    buttonVariant: "blue" as const,
  },
  {
    id: "logistics",
    image: "/industries/logistics.jpg",
    title: "Logistics",
    buttonLabel: "Learn more",
    buttonVariant: "green" as const,
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
              />
            </div>
            <div className={styles.cardBody}>
              <b className={styles.cardTitle}>{industry.title}</b>
              <Link
                href={
                  industry.buttonVariant === "blue"
                    ? "/job-request"
                    : "/industries-we-serve"
                }
                className={
                  industry.buttonVariant === "blue"
                    ? styles.buttonBlue
                    : styles.buttonGreen
                }
              >
                {industry.buttonLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
