"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

const ICON_BASE = "/homepage/why%20choose%20us";

const cards = [
  {
    icon: `${ICON_BASE}/why complete staffing solutions.svg`,
    title: "Why Complete Staffing Solutions",
    description:
      "For 25+ years, we've helped growing organizations find the right talent by focusing on fit, culture, and long-term success—earning our place as a leading staffing firm in Southern New England.",
    href: "/why-choose-us",
  },
  {
    icon: `${ICON_BASE}/our mission.svg`,
    title: "Our Mission",
    description:
      "Our mission is to deliver top talent through strategic staffing solutions that strengthen teams and drive long-term success. We specialize in permanent and consulting services with deep market expertise.",
    href: "/our-mission",
  },
  {
    icon: `${ICON_BASE}/what set us apart.svg`,
    title: "What Sets Us Apart",
    description:
      "Our passion for search and career placement sets us apart. Strong client relationships and a dedicated team have fueled industry-leading retention and steady growth through every economic cycle.",
    href: "/what-sets-us-apart",
  },
];

function CardIcon({ src }: { src: string }) {
  const encodedSrc = src.replace(/ /g, "%20");
  return (
    <div className={styles.cardIconWrapper}>
      <Image
        src={encodedSrc}
        alt=""
        width={56}
        height={56}
        className={styles.cardIcon}
      />
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-choose-us-title">
      <div className={styles.sectionInner}>
        <h2 id="why-choose-us-title" className={styles.sectionTitle}>
          Why choose Us ?
        </h2>
        <div className={styles.cardsRow}>
          {cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <CardIcon src={card.icon} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
              <Link href={card.href} className={styles.readMoreLink}>
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
