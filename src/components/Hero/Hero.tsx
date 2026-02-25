"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

interface MenuOption {
  id: string;
  title: string;
  description: string;
  image: string;
}

const menuOptions: MenuOption[] = [
  {
    id: 'our-solutions',
    title: 'Our Solutions',
    description: 'Comprehensive staffing solutions tailored to your industry needs, connecting top talent with leading organizations.',
    image: '/homepage/healthcare.jpg'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Connecting healthcare professionals with leading medical facilities to support quality patient care.',
    image: '/industries detail pages/healthcare-hero.jpg'
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'Expert financial talent for banking, accounting, and fintech industries to drive your business forward.',
    image: '/industries detail pages/agriculture-hero.jpg'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Skilled professionals for property management and real estate services to maximize your property investments.',
    image: '/industries detail pages/real-estate.jpg'
  }
];

const defaultContent: MenuOption = {
  id: 'default',
  title: 'Extraordinary results only\nhappen when you\'ve got\nextraordinary people.',
  description: '',
  image: '/homepage/hero%20image.png'
};

export default function Hero() {
  const [isActive, setIsActive] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<MenuOption | null>(null);
  
  useEffect(() => { setIsActive(true); }, []);

  const getIndustryLink = (optionId: string): string => {
    switch (optionId) {
      case 'our-solutions':
        return '/our-solutions';
      case 'healthcare':
        return '/industries-we-serve/healthcare';
      case 'financial-services':
        return '/industries-we-serve/financial-services';
      case 'real-estate':
        return '/industries-we-serve/real-estate';
      default:
        return '/';
    }
  };

  const currentContent = hoveredOption || defaultContent;
  const shouldShowOriginalBg = !hoveredOption;

  return (
    <section className={`${styles.heroSection} ${isActive ? styles.active : ""}`}>
      {/* Background Images */}
      <Image
        className={`${styles.heroImage} ${shouldShowOriginalBg ? styles.revealRight : styles.fadeOut}`}
        src="/homepage/hero%20image.png"
        alt="Professionals collaborating"
        fill
        priority
      />
      
      {hoveredOption && (
        <Image
          className={`${styles.optionBackground} ${styles.revealRight}`}
          src={hoveredOption.image}
          alt="Background"
          fill
          priority
        />
      )}
      
      <div className={styles.gradientOverlay} />

      {/* Main Content - Static */}
      <div className={styles.contentContainer}>
        <div className={`${styles.textContent} ${styles.revealLeft}`}>
          <h1 className={styles.title}>
            Empowering Careers.<br />
            Strengthening<br />
            Businesses.
          </h1>
          <p className={styles.description}>
            For over 25 years, we've matched exceptional candidates with leading employers — helping businesses grow and careers thrive.
          </p>
          <div className={styles.buttonsRow}>
            <Link href="/job-request" className={`${styles.ctaButton} ${styles.ctaButtonCandidate}`}>Find an Ideal Candidate</Link>
            <Link href="/open-position" className={`${styles.ctaButton} ${styles.ctaButtonPosition}`}>Find an Ideal Position</Link>
          </div>
        </div>
      </div>

      {/* Menu Options with Hover Details */}
      <div className={styles.menuContainer}>
        {menuOptions.map((option, index) => (
          <div
            key={option.id}
            className={`${styles.menuOption} ${hoveredOption?.id === option.id ? styles.active : ''} ${styles.revealUp}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredOption(option)}
            onMouseLeave={() => setHoveredOption(null)}
          >
            <div className={styles.menuContent}>
              <span className={`${styles.menuText} ${hoveredOption?.id === option.id ? styles.moveUp : ''}`}>
                {option.title}
              </span>
              
              {hoveredOption?.id === option.id && (
                <div className={`${styles.optionDetails} ${styles.revealDown}`}>
                  <p className={styles.optionDescription}>{option.description}</p>
                  <Link href={getIndustryLink(option.id)} className={styles.learnMoreLink}>
                    Learn More →
                  </Link>
                </div>
              )}
            </div>
            {index < menuOptions.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </section>
  );
}