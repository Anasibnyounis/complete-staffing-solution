"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./IndustriesGridSection.module.css";

/* ── SVG Icons ─────────────────────────────────────────────────────── */
function IconHealthcare() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  );
}
function IconFinance() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  );
}
function IconIT() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
}
function IconEngineering() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
    </svg>
  );
}
function IconAdmin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><polyline points="16 3 12 7 8 3"/>
    </svg>
  );
}
function IconLegal() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}
function IconManufacturing() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M6 20V10l6-6 6 6v10"/><path d="M10 20v-5h4v5"/>
    </svg>
  );
}
function IconRealEstate() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}
function IconLogistics() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );
}
function IconEnergy() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}
function IconEducation() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}
function IconSales() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  );
}
function IconNonprofit() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}
function IconConstruction() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M6 20V8l6-4 6 4v12"/><path d="M10 20v-6h4v6"/>
    </svg>
  );
}
function IconRetail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}
function IconWellness() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    id: "agriculture",
    title: "Agriculture",
    description: "Connecting skilled farm managers, agricultural scientists and crop consultants with leading agricultural organizations.",
    icon: <IconEnergy />,
    color: "#6CA642",
    detailId: "agriculture",
  },
  {
    id: "arts",
    title: "Arts",
    description: "Placing creative talent including graphic designers, art directors and creative directors across arts and media sectors.",
    icon: <IconNonprofit />,
    color: "#8B6F47",
    detailId: "arts",
  },
  {
    id: "construction",
    title: "Construction",
    description: "Providing experienced project managers, civil engineers and construction managers for residential and commercial projects.",
    icon: <IconConstruction />,
    color: "#4A7BAD",
    detailId: "construction",
  },
  {
    id: "consumer-goods",
    title: "Consumer Goods",
    description: "Matching brand managers, product managers and marketing specialists with top consumer goods companies.",
    icon: <IconRetail />,
    color: "#6CA642",
    detailId: "consumer-goods",
  },
  {
    id: "corporate-services",
    title: "Corporate Services",
    description: "Staffing administrative assistants, executive assistants, HR coordinators and business analysts for corporate offices.",
    icon: <IconAdmin />,
    color: "#19478E",
    detailId: "corporate-services",
  },
  {
    id: "design",
    title: "Design",
    description: "Connecting UX designers, interior designers, product designers and creative directors with leading design firms.",
    icon: <IconIT />,
    color: "#6B4C9A",
    detailId: "design",
  },
  {
    id: "education",
    title: "Education",
    description: "Placing teachers, academic advisors, curriculum developers and education consultants across K-12 and higher education.",
    icon: <IconEducation />,
    color: "#4A7BAD",
    detailId: "education",
  },
  {
    id: "energy-mining",
    title: "Energy & Mining",
    description: "Staffing alternative energy consultants, geotechnical engineers and mechanical engineers for energy and mining sectors.",
    icon: <IconEnergy />,
    color: "#6CA642",
    detailId: "energy-mining",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    description: "Connecting event producers, stage managers, production coordinators and talent managers with entertainment companies.",
    icon: <IconSales />,
    color: "#8B6F47",
    detailId: "entertainment",
  },
  {
    id: "finance",
    title: "Finance",
    description: "Expert placement of CFOs, financial analysts, investment advisors and portfolio managers across financial institutions.",
    icon: <IconFinance />,
    color: "#19478E",
    detailId: "finance",
  },
  {
    id: "hardware-networking",
    title: "Hardware & Networking",
    description: "Placing network engineers, hardware technicians, systems architects and infrastructure managers in tech organizations.",
    icon: <IconIT />,
    color: "#4A7BAD",
    detailId: "hardware-networking",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Connecting registered nurses, physical therapists, medical billing clerks and allied health professionals with healthcare providers.",
    icon: <IconHealthcare />,
    color: "#C0392B",
    detailId: "healthcare",
  },
  {
    id: "legal",
    title: "Legal",
    description: "Staffing paralegals, legal assistants, compliance officers and contract administrators for law firms and corporate legal teams.",
    icon: <IconLegal />,
    color: "#8B6F47",
    detailId: "legal",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Providing production managers, quality control inspectors, manufacturing engineers and plant managers to manufacturers.",
    icon: <IconManufacturing />,
    color: "#6CA642",
    detailId: "manufacturing",
  },
  {
    id: "media-communications",
    title: "Media & Communications",
    description: "Placing marketing professionals, PR specialists, social media managers and content writers across media organizations.",
    icon: <IconSales />,
    color: "#4A7BAD",
    detailId: "media-communications",
  },
  {
    id: "nonprofit",
    title: "Nonprofit",
    description: "Matching program directors, grant writers, development officers and community outreach coordinators with nonprofits.",
    icon: <IconNonprofit />,
    color: "#6CA642",
    detailId: "nonprofit",
  },
  {
    id: "public-administration",
    title: "Public Administration",
    description: "Staffing policy analysts, city planners, public affairs officers and budget analysts for government organizations.",
    icon: <IconAdmin />,
    color: "#8B6F47",
    detailId: "public-administration",
  },
  {
    id: "public-safety",
    title: "Public Safety",
    description: "Connecting public safety officers, emergency coordinators, safety inspectors and security managers with public agencies.",
    icon: <IconLegal />,
    color: "#C0392B",
    detailId: "public-safety",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Placing real estate agents, property managers, leasing consultants, mortgage brokers and appraisers nationwide.",
    icon: <IconRealEstate />,
    color: "#4A7BAD",
    detailId: "real-estate",
  },
  {
    id: "recreation-travel",
    title: "Recreation & Travel",
    description: "Providing travel agents, tour guides, event coordinators, recreation managers and hospitality managers.",
    icon: <IconLogistics />,
    color: "#6CA642",
    detailId: "recreation-travel",
  },
  {
    id: "retail",
    title: "Retail",
    description: "Connecting store managers, visual merchandisers, retail buyers, inventory managers and sales associates.",
    icon: <IconRetail />,
    color: "#8B6F47",
    detailId: "retail",
  },
  {
    id: "software-it",
    title: "Software & IT Services",
    description: "Top-tier placement of developers, cloud engineers, IT security professionals, systems analysts and network administrators.",
    icon: <IconIT />,
    color: "#6B4C9A",
    detailId: "it",
  },
  {
    id: "transportation-logistics",
    title: "Transportation & Logistics",
    description: "Staffing logistics coordinators, supply chain managers, warehouse managers and fleet managers across supply chains.",
    icon: <IconLogistics />,
    color: "#6CA642",
    detailId: "transportation-logistics",
  },
  {
    id: "wellness-fitness",
    title: "Wellness & Fitness",
    description: "Placing personal trainers, wellness coaches, nutritionists, fitness managers and yoga instructors across wellness sectors.",
    icon: <IconWellness />,
    color: "#4A7BAD",
    detailId: "wellness-fitness",
  },
  {
    id: "property-management",
    title: "Property Management",
    description: "Connecting property managers, leasing agents, facilities managers, maintenance supervisors and community managers.",
    icon: <IconRealEstate />,
    color: "#19478E",
    detailId: "property-management",
  },
];

const FILTERS = ["All", "Healthcare", "Finance", "Technology", "Legal", "Engineering", "Admin"];

const INITIAL_COUNT = 8;

export default function IndustriesGridSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = INDUSTRIES.filter((ind) => {
    const q = searchQuery.trim().toLowerCase();
    const matchSearch = !q || ind.title.toLowerCase().includes(q) || ind.description.toLowerCase().includes(q);
    const matchFilter =
      activeFilter === "All" ||
      (activeFilter === "Healthcare" && ind.id.includes("healthcare")) ||
      (activeFilter === "Finance" && (ind.id.includes("finance") || ind.id.includes("accounting"))) ||
      (activeFilter === "Technology" && (ind.id.includes("software") || ind.id.includes("hardware") || ind.id.includes("it"))) ||
      (activeFilter === "Legal" && ind.id.includes("legal")) ||
      (activeFilter === "Engineering" && (ind.id.includes("engineering") || ind.id.includes("manufacturing") || ind.id.includes("energy") || ind.id.includes("construction"))) ||
      (activeFilter === "Admin" && (ind.id.includes("admin") || ind.id.includes("corporate") || ind.id.includes("public")));
    return matchSearch && matchFilter;
  });

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  return (
    <section className={styles.section}>
      {/* Search + Filters strip */}
      <div className={styles.searchStrip}>
        <div className={styles.stripInner}>
          {/* Search box */}
          <div className={styles.searchBox}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="#666" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="search"
              placeholder="Search industries (e.g. Healthcare, Legal...)"
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowAll(true); }}
              aria-label="Search industries"
            />
            {searchQuery && (
              <button className={styles.clearBtn} onClick={() => { setSearchQuery(""); setShowAll(false); }}>✕</button>
            )}
          </div>

          {/* Filter pills */}
          <div className={styles.filterRow} role="group" aria-label="Filter by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ""}`}
                onClick={() => { setActiveFilter(f); setShowAll(false); }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {visible.map((ind) => (
            <div key={ind.id} className={styles.card}>
              {/* Image placeholder */}
              <div className={styles.cardImgWrap} style={{ backgroundColor: `${ind.color}18` }}>
                <div className={styles.cardImgPlaceholder} style={{ borderColor: `${ind.color}40` }}>
                  <div className={styles.iconCircle} style={{ backgroundColor: ind.color }}>
                    {ind.icon}
                  </div>
                  <span className={styles.imgPlaceholderText}>Image Coming Soon</span>
                </div>
              </div>

              {/* Content */}
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconSmall} style={{ backgroundColor: ind.color }}>
                    {ind.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{ind.title}</h3>
                </div>
                <p className={styles.cardDesc}>{ind.description}</p>
                <Link
                  href={`/industries-we-serve/${ind.detailId}`}
                  className={styles.cardBtn}
                  style={{ backgroundColor: ind.color }}
                >
                  Explore Roles
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <div className={styles.noResults}>
            <p>No industries found for "<strong>{searchQuery}</strong>"</p>
          </div>
        )}

        {/* View All / Show Less */}
        {hasMore && !searchQuery && (
          <div className={styles.viewAllRow}>
            <button
              className={styles.viewAllBtn}
              onClick={() => setShowAll((p) => !p)}
            >
              {showAll
                ? "Show Less"
                : `View All Industries (${filtered.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}