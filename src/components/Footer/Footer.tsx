"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const FOOTER_ICONS = "/footer%20icons";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      {/* Top: Logo, email, social */}
      <div className={styles.contactAndSocialContainer}>
        <Link href="/" className={styles.logoLink} aria-label="Complete Staffing Solutions - Home">
          <Image
            src="/logo.svg"
            alt="Complete Staffing Solutions"
            width={320}
            height={132}
            className={styles.logoIcon}
          />
        </Link>
        <div className={styles.contactInfoContainerParent}>
          <div className={styles.contactInfoContainer}>
            <div className={styles.contactIconContainer}>
              <Image
                src={`${FOOTER_ICONS}/EnvelopeSimple.svg`}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <a
              href="mailto:23-cs-63@students.uettaxila.edu.pk"
              className={styles.contactEmail}
            >
              23-cs-63@students.uettaxila.edu.pk
            </a>
          </div>
          <div className={styles.socialIconsContainer}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              aria-label="Facebook"
            >
              <Image
                src={`${FOOTER_ICONS}/fb.svg`}
                alt=""
                width={24}
                height={24}
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              aria-label="Instagram"
            >
              <Image
                src={`${FOOTER_ICONS}/insta.svg`}
                alt=""
                width={24}
                height={24}
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              aria-label="X (Twitter)"
            >
              <Image
                src={`${FOOTER_ICONS}/X_logo.svg`}
                alt=""
                width={24}
                height={24}
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              aria-label="LinkedIn"
            >
              <Image
                src={`${FOOTER_ICONS}/linkedin.svg`}
                alt=""
                width={24}
                height={24}
                className={styles.socialIcon}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Middle: Link columns */}
      <div className={styles.linksContainer}>
        <div className={styles.linksRow}>
          <div className={styles.column}>
            <b className={styles.columnTitle}>Employers</b>
            <div className={styles.linksList}>
              <Link href="/industries-we-serve" className={styles.footerLink}>
                Industries We Serve
              </Link>
              <Link href="/job-request" className={styles.footerLink}>
                Place a Job Request
              </Link>
            </div>
          </div>
          <div className={styles.column}>
            <b className={styles.columnTitle}>Job Seekers</b>
            <div className={styles.linksList}>
              <Link href="/primary-positions" className={styles.footerLink}>
                Primary Positions We Place
              </Link>
              <Link href="/privacy-policy" className={styles.footerLink}>
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className={styles.footerLink}>
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className={styles.completeStaffingColumn}>
            <div className={styles.completeStaffingGroup}>
              <div className={styles.column}>
                <b className={styles.columnTitle}>Complete Staffing</b>
                <div className={styles.linksList}>
                  <Link href="/about-us" className={styles.footerLink}>
                    About us
                  </Link>
                  <Link href="/why-choose-us" className={styles.footerLink}>
                    Why Choose Us?
                  </Link>
                  <Link href="/our-process" className={styles.footerLink}>
                    Our Process
                  </Link>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.supportLinksContainer}>
                  <Link href="/privacy-policy" className={styles.footerLink}>
                    Privacy Policy
                  </Link>
                  <Link href="/terms-and-conditions" className={styles.footerLink}>
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <b className={styles.columnTitle}>Contact Info</b>
            <div className={styles.contactInfoLinksContainer}>
              <div className={styles.addressRow}>
                <Image
                  src={`${FOOTER_ICONS}/MapPinLine.svg`}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.addressRowIcon}
                />
                <span>843, Apple Lane Peoria</span>
              </div>
              <div className={styles.addressRow}>
                <Image
                  src={`${FOOTER_ICONS}/Phone.svg`}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.addressRowIcon}
                />
                <a href="tel:+12025550153" className={styles.footerLink}>
                  +1 - 202 - 555 - 0153
                </a>
              </div>
              <div className={styles.addressRow}>
                <Image
                  src={`${FOOTER_ICONS}/EnvelopeSimple.svg`}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.addressRowIcon}
                />
                <a href="mailto:tripnavigator@gmail.com" className={styles.footerLink}>
                  tripnavigator@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className={styles.copyrightContainer}>
        <p className={styles.copyrightText}>
          © 2026 Complete Staffing Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
