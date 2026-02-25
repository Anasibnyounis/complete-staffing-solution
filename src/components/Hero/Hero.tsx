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
    description: 'Our solutions should break down into Retained, Executive search, Contract, Direct-Hire',
    image: '/about us/our service placeholder.jpg'

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
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  useEffect(() => { 
    setIsActive(true); 
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handlePrevMobile = () => {
    setCurrentMobileIndex((prev) => prev === 0 ? menuOptions.length - 1 : prev - 1);
  };

  const handleNextMobile = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % menuOptions.length);
  };

  const handleMobileOptionClick = (option: MenuOption) => {
    setHoveredOption(option);
  };

  const currentMobileOption = menuOptions[currentMobileIndex];

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextMobile();
    }
    if (isRightSwipe) {
      handlePrevMobile();
    }
  };

  return (
    <section className={`${styles.heroSection} ${isActive ? styles.active : ""} ${isMobile ? styles.mobileOnly : ""}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      {/* Background Images - Only show on desktop */}
      {!isMobile && (
        <>
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
        </>
      )}
      
      {/* Mobile Background - Show current option background */}
      {isMobile && (
        <Image
          className={`${styles.mobileBackground} ${styles.revealRight}`}
          src={currentMobileOption.image}
          alt="Mobile Background"
          fill
          priority
        />
      )}
      
      <div className={styles.gradientOverlay} />

      {/* Main Content - Static heading on all screens */}
      <div className={styles.contentContainer}>
        <div className={`${styles.textContent} ${styles.revealLeft}`}>
          <h1 className={styles.title}>
            Empowering Careers.<br />
            Strengthening<br />
            Businesses.
          </h1>
          
          {/* Hide description and buttons on mobile */}
          {!isMobile && (
            <>
              <p className={styles.description}>
                For over 25 years, we've matched exceptional candidates with leading employers — helping businesses grow and careers thrive.
              </p>
              <div className={styles.buttonsRow}>
                <Link href="/job-request" className={`${styles.ctaButton} ${styles.ctaButtonCandidate}`}>Find an Ideal Candidate</Link>
                <Link href="/open-position" className={`${styles.ctaButton} ${styles.ctaButtonPosition}`}>Find an Ideal Position</Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Menu Options with Details - Show on all screens */}
      <div className={`${styles.menuContainer} ${isMobile ? styles.mobileMenu : ''}`}>
        {isMobile ? (
          // Mobile Slider View - Swipe Only
          <div className={styles.mobileSlider}>
            <div 
              className={styles.mobileOption}
              onClick={() => handleMobileOptionClick(currentMobileOption)}
            >
              <div className={styles.menuContent}>
                <span className={styles.menuText}>
                  {currentMobileOption.title}
                </span>
                
                <div className={styles.optionDetails}>
                  <p className={styles.optionDescription}>{currentMobileOption.description}</p>
                  <Link href={getIndustryLink(currentMobileOption.id)} className={styles.learnMoreLink}>
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className={styles.mobileDots}>
              {menuOptions.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.mobileDot} ${index === currentMobileIndex ? styles.active : ''}`}
                  onClick={() => setCurrentMobileIndex(index)}
                  aria-label={`Go to option ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop View - All options visible, details only on hover
          menuOptions.map((option, index) => (
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
          ))
        )}
      </div>
    </section>
  );
}