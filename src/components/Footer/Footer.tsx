"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const FOOTER_ICONS = "/footer%20icons";
const socialLinks = [
  { icon: "fb", url: "https://www.facebook.com/completestaffinginc/#" },
  { icon: "insta", url: "https://www.instagram.com/completestaffingsolutions/" },
  { icon: "X_logo", url: "https://x.com/CSS_JobPosts" },
  { icon: "linkedin", url: "https://www.linkedin.com/company/complete-staffing-solutions/" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = footerRef.current?.querySelectorAll(`.${styles.reveal}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className={styles.footerContainer} ref={footerRef}>
      {/* Top: Reveal Up Animation */}
      <div className={`${styles.contactAndSocialContainer} ${styles.reveal} ${styles.revealUp}`}>
        <Link href="/" className={styles.logoLink} aria-label="Home">
          <Image src="/logo.svg" alt="Logo" width={320} height={132} className={styles.logoIcon} />
        </Link>
        <div className={styles.contactInfoContainerParent}>
          <div className={styles.contactInfoContainer}>
            <div className={styles.contactIconContainer}>
              <Image src={`${FOOTER_ICONS}/EnvelopeSimple.svg`} alt="" width={24} height={24} />
            </div>
            <a href="mailto:example@gmail.com" className={styles.contactEmail}>
              Contactus@completestaffingsolutions.com           </a>
          </div>
         
<div className={styles.socialIconsContainer}>
  {socialLinks.map(({ icon, url }) => (
    <a
      key={icon}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialIconLink}
    >
      <Image
        src={`${FOOTER_ICONS}/${icon}.svg`}
        alt={icon}
        width={24}
        height={24}
        className={styles.socialIcon}
      />
    </a>
  ))}
</div>
        </div>
      </div>

      {/* Middle: Left and Right Animations */}
      <div className={styles.linksContainer}>
        <div className={styles.linksRow}>
          {/* Employers: Reveal Left */}
          <div className={`${styles.column} ${styles.reveal} ${styles.revealLeft} ${styles.delay1}`}>
            <b className={styles.columnTitle}>Employers</b>
            <div className={styles.linksList}>
              <Link href="/industries-we-serve" className={styles.footerLink}>Industries We Serve</Link>
              <Link href="/job-request" className={styles.footerLink}>Place a Job Request</Link>
            </div>
          </div>

          {/* Job Seekers: Reveal Left (Slightly slower) */}
          <div className={`${styles.column} ${styles.reveal} ${styles.revealLeft} ${styles.delay2}`}>
            <b className={styles.columnTitle}>Job Seekers</b>
            <div className={styles.linksList}>
              <Link href="/Departments" className={styles.footerLink}>Primary Positions</Link>
              <Link href="/policies" className={styles.footerLink}>Privacy Policy</Link>
              <Link href="/terms-and-conditions" className={styles.footerLink}>Terms & Conditions</Link>
            </div>
          </div>

          {/* Complete Staffing: Reveal Right */}
          <div className={`${styles.completeStaffingColumn} ${styles.reveal} ${styles.revealRight} ${styles.delay1}`}>
            <div className={styles.completeStaffingGroup}>
              <div className={styles.column}>
                <b className={styles.columnTitle}>Complete Staffing</b>
                <div className={styles.linksList}>
                  <Link href="/about-us" className={styles.footerLink}>About us</Link>
                  <Link href="/why-choose-us-page" className={styles.footerLink}>Why Choose Us?</Link>
                  <Link href="/our-recruiting-process" className={styles.footerLink}>Our Process</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info: Reveal Right (Slightly slower) */}
          <div className={`${styles.column} ${styles.reveal} ${styles.revealRight} ${styles.delay2}`}>
            <b className={styles.columnTitle}>Contact Info</b>
            <div className={styles.contactInfoLinksContainer}>
              <div className={styles.addressRow}>
                <Image src={`${FOOTER_ICONS}/MapPinLine.svg`} alt="" width={24} height={24} className={styles.addressRowIcon} />
                <span>United States America</span>
              </div>
              <div className={styles.addressRow}>
                <Image src={`${FOOTER_ICONS}/Phone.svg`} alt="" width={24} height={24} className={styles.addressRowIcon} />
                <a href="tel:+12025550153" className={styles.footerLink}>(401) 475-8800</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Fade Up */}
      <div className={`${styles.copyrightContainer} ${styles.reveal} ${styles.revealUp} ${styles.delay3}`}>
        <p className={styles.copyrightText}>© 2026 Complete Staffing Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}