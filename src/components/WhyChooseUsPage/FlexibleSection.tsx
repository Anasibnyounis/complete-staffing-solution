"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

interface CardData {
  title: string;
  text: string;
  icon: string;
}

interface FlexibleSectionProps {
  title?: string;
  image?: string;
  cards?: CardData[];
  backgroundColor?: string;
}

const defaultCards: CardData[] = [
  {
    title: "Direct/Permanent Placement",
    text: "Gain access to our extensive network of candidates for permanent full or part-time openings.",
    icon: "/why%20choose%20us/svg1.png",
  },
  {
    title: "Temporary Placement",
    text: "Use our talented professionals on an interim basis to supplement your core staff. Common uses for this type of placement include peak or unexpected workload increase, scheduling conflicts, special projects, or month, quarter and year end support.",
    icon: "/why%20choose%20us/svg2.png",
  },
  {
    title: "Temporary to Hire",
    text: "Accomplish short-term objectives and evaluate if the candidate is a long-term match for your organization.",
    icon: "/why%20choose%20us/svg3.png",
  },
];

export default function FlexibleSection({
  title = "FLEXIBLE SOLUTIONS",
  image = "/why%20choose%20us/flexiblesolutions.jpg",
  cards = defaultCards,
  backgroundColor = "#0f3b7a"
}: FlexibleSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add(styles.active);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.flexSection} ${styles.reveal}`}>
      <div className={styles.flexWrapper}>

        <div className={`${styles.flexImage} ${styles.reveal} ${styles.revealLeft}`}>
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
            unoptimized
          />
          <div className={styles.flexOverlay}>{title}</div>
        </div>

        <div className={`${styles.flexRight} ${styles.reveal} ${styles.revealRight}`} style={{ backgroundColor }}>
          {cards.map((card, i) => (
            <div 
              key={i} 
              className={`${styles.flexCard} ${styles.reveal} ${styles.revealUp}`}
              style={{ transitionDelay: `${0.2 + (i * 0.15)}s` }}
            >
              <div className={styles.flexIcon}>
                <Image src={card.icon} alt="icon" width={20} height={20} unoptimized />
              </div>
              <div className={styles.flexContent}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}