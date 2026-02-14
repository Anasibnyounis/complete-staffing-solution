"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './WhyChooseUsSection.module.css';
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

const WhyChooseUs: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      icon: '/why choose us/1.png',
      title: 'Why Complete Staffing Solutions',
      shortDescription: 'For 25+ years, we\'ve helped growing organizations find the right talent by focusing o...',
      fullDescription: 'For 25+ years, we\'ve helped growing organizations find the right talent by focusing on personalized service and industry expertise. Our commitment to excellence has made us a trusted partner for businesses across various sectors. We understand that finding the right talent is crucial for organizational success, and our experienced team works diligently to match qualified candidates with the perfect opportunities.',
    },
    {
      id: 2,
      icon: '/why choose us/2.png',
      title: 'Our Mission',
      shortDescription: 'Our mission is to deliver top talent through strategic staffing solutions that strengthen tea...',
      fullDescription: 'Our mission is to deliver top talent through strategic staffing solutions that strengthen teams and drive business success. We are dedicated to building lasting relationships with both clients and candidates, ensuring mutual growth and satisfaction. By leveraging our extensive network and industry knowledge, we connect exceptional talent with outstanding opportunities, creating value for all stakeholders.',
    },
    {
      id: 3,
      icon: '/why choose us/3.png',
      title: 'What Sets Us Apart',
      shortDescription: 'Our passion for search and career placement sets us apart. Strong client relationships and a d...',
      fullDescription: 'Our passion for search and career placement sets us apart. Strong client relationships and a dedicated team make the difference. We go beyond traditional staffing by understanding the unique culture and needs of each organization. Our personalized approach, combined with cutting-edge recruitment strategies, ensures we deliver candidates who not only meet technical requirements but also align with company values and long-term goals.',
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>WHY CHOOSE US ?</h2>
        
        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
                  className={styles.icon}
                />
              </div>
              
              <h3 className={styles.cardTitle}>{card.title}</h3>
              
              <p className={styles.cardDescription}>
                {expandedCard === card.id ? card.fullDescription : card.shortDescription}
              </p>
              
              <button 
                className={styles.readMoreBtn}
                onClick={() => toggleExpand(card.id)}
              >
                {expandedCard === card.id ? 'Read Less' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;