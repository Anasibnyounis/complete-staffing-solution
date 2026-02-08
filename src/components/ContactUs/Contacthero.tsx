"use client";
import React, { useEffect, useRef } from 'react';
import styles from './Contacthero.module.css';
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700"], variable: "--font-jakarta" });

const ContactHero: React.FC = () => {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
        }
      });
    }, { threshold: 0.1 });

    const elements = revealRef.current?.querySelectorAll(`.${styles.reveal}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} ref={revealRef}>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${styles.reveal}`}>CONTACT</h1>
        <p className={`${styles.description} ${styles.reveal} ${styles.delay1}`}>
          We appreciate your interest and are here to assist you. We are excited to connect with you. Our dedicated team is ready to respond promptly or you can schedule a time for us to reach out. Please select what you are reaching out about so we can ensure your message gets to the right person.
        </p>
        <p className={`${styles.subdescription} ${styles.reveal} ${styles.delay2}`}>
          Please select what you are reaching out about so we can ensure your message gets to the right person.
        </p>
      </div>
      <div className={`${styles.wrapper} ${styles.reveal} ${styles.delay3}`}>
        <input type="text" className={styles.input} placeholder="Please select a range" readOnly />
        <span className={styles.icon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default ContactHero;