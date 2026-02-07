"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Industries.module.css";

const ICONS_BASE = "/homepage/industries%20section";

function enc(path: string) {
  return path.replace(/ /g, "%20").replace(/\(/g, "%28").replace(/\)/g, "%29");
}

const industries = [
  { name: "Agriculture", icon: "planting 1.svg", slug: "agriculture"  },
  { name: "Arts", icon: "art 1.svg", slug: "arts"  },
  { name: "Legal", icon: "legal-document (1) 1.svg"  , slug: "legal"  },
  { name: "Manufacturing", icon: "manufacturing 1.svg" , slug: "manufacturing" },
  { name: "Corporate Services", icon: "service 1.svg", slug: "corporateservices"  },
  { name: "Construction", icon: "engineer 1.svg" , slug: "construction" },
  { name: "Information Technology", icon: "information-technology 1.svg" , slug: "it" },
  { name: "Consumer Goods", icon: "goods (1) 1.svg" , slug: "consumergoods" },
  { name: "Design", icon: "loupe 1.svg" ,slug: "design" },
  { name: "Education", icon: "education (1) 1.svg" ,slug: "education" },
  { name: "Energy", icon: "flash 1.svg" ,slug: "energy"},
  { name: "Entertainment", icon: "video (1) 1.svg",slug: "entertainment" },
  { name: "Finance", icon: "bar-chart 1.svg" ,slug: "finance"},
  { name: "Healthcare", icon: "heart-rate 1.svg" , slug: "healthcare" },
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

const stats = [
  {
    number: "14 k",
    description:
      "Small to mid-size organization that we work with annually, helping them achieve their unique Business goals",
  },
  {
    number: "83 k",
    description:
      "Average number of Manpower Associates on assignment monthly",
  },
  {
    number: "30 k",
    description: "Manpower Associates hired by employers",
  },
];

function ItemCard({
  name,
  iconFile,
  href,
}: {
  name: string;
  iconFile: string;
  href: string;
}) {
  const iconSrc = `${ICONS_BASE}/${enc(iconFile)}`;
  const arrowSrc = `${ICONS_BASE}/${enc("iconamoon_arrow-down-2.svg")}`;
  return (
    <Link href={href} className={styles.card}>
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
  return (
    <section className={styles.section} aria-labelledby="industries-title">
      <div className={styles.introWrapper}>
        <div className={styles.intro}>
          <h2 id="industries-title" className={styles.sectionSubtitle}>
            Proven staffing solutions across diverse industries.
          </h2>
          <p className={styles.sectionDescription}>
            We adhere to the highest standards of quality in all our products
            and services. From design and development to manufacturing.
          </p>
        </div>
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Industries We Serve:</h3>
        <div className={styles.cardsGrid}>
          {industries.map((item) => (
            <ItemCard
              key={item.name}
              name={item.name}
              iconFile={item.icon}
              href={item.slug ? `/industries-we-serve/${item.slug}` : `/industries-we-serve?q=${encodeURIComponent(item.name)}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.buttonWrap}>
        <Link
          href="/industries-we-serve"
          className={`${styles.viewAllButton} ${styles.viewAllIndustries}`}
        >
          View All Industries
        </Link>
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Positions We specialize In:</h3>
        <div className={styles.cardsGrid}>
          {positions.map((item) => (
            <ItemCard
              key={item.name}
              name={item.name}
              iconFile={item.icon}
              href={`/primary-positions?q=${encodeURIComponent(item.name)}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.buttonWrap}>
        <Link
          href="/open-position"
          className={`${styles.viewAllButton} ${styles.viewAllPositions}`}
        >
          View All Positions
        </Link>
      </div>

      <div className={styles.statsBlock}>
        {stats.map((stat) => (
          <div key={stat.number} className={styles.statItem}>
            <span className={styles.statNumber}>{stat.number}</span>
            <p className={styles.statDescription}>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
