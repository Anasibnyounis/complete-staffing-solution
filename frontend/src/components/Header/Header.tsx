"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MailIcon, PhoneIcon, ChevronDownIcon } from "./icons";
import styles from "./Header.module.css";

/* Hamburger icon - three horizontal lines */
function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

/* Close (X) icon for when menu is open */
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`${styles.header} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
    >
      {/* Top bar wrapper: on mobile contains blue bar + contact + email + fraud button */}
      <div className={styles.topBarWrapper}>
        <div className={styles.topHeader}>
          <div className={styles.topHeader2} />
        </div>
        <a
          href="#recruitment-fraud-notice"
          className={styles.rectangleParent}
          aria-label="Recruitment Fraud Notice"
        >
          <div className={styles.groupChild} />
          <span className={styles.recruitmentFraudNotice}>
            Recruitment Fraud Notice
          </span>
        </a>
        <div className={styles.contact}>
          <PhoneIcon className={styles.contactIcon} />
          <span className={styles.text}>+977-9809758493</span>
        </div>
        <a href="mailto:info@sparklewpthemes.com" className={styles.email}>
          <MailIcon className={styles.mailIcon} />
          <span className={styles.text}>info@sparklewpthemes.com</span>
        </a>
      </div>

      {/* Logo + Hamburger row (hamburger visible only on mobile) */}
      <div className={styles.logoRow}>
        <Link
          href="/"
          className={styles.logoWrapper}
          aria-label="Complete Staffing Solutions - Home"
          onClick={closeMobileMenu}
        >
          <Image
            src="/logo.svg"
            alt="Complete Staffing Solutions"
            width={175}
            height={72}
            className={styles.logoImage}
            priority
          />
        </Link>
        <button
          type="button"
          className={styles.hamburgerButton}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <CloseIcon className={styles.hamburgerIcon} />
          ) : (
            <HamburgerIcon className={styles.hamburgerIcon} />
          )}
        </button>
      </div>

      {/* Main navigation - becomes dropdown on mobile when hamburger is open */}
      <nav className={styles.mainHeader} aria-label="Main navigation">
        <div className={styles.navLinks}>
          <Link
            href="/"
            className={`${styles.navItem} ${isActive("/") ? styles.navItemActive : ""}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`${styles.navItemWithDropdown} ${isActive("/about-us") ? styles.navItemWithDropdownActive : ""}`}
            onClick={closeMobileMenu}
          >
            About
            <ChevronDownIcon className={styles.dropdownIcon} />
          </Link>
          <div
            className={`${styles.navDropdownWrapper} ${isActive("/job-request") || isActive("/industries-we-serve") ? styles.navDropdownActive : ""}`}
          >
            <span className={styles.navDropdownTrigger}>
              For Employers
              <ChevronDownIcon className={styles.dropdownIcon} />
            </span>
            <div className={styles.navDropdownPanel}>
              <Link href="/industries-we-serve" onClick={closeMobileMenu}>
                Industries We Serve
              </Link>
              <Link href="/job-request" onClick={closeMobileMenu}>
                Place a Job Request
              </Link>
            </div>
          </div>
          <Link
            href="/our-recruiting-process"
            className={`${styles.navItem} ${isActive("/our-recruiting-process") ? styles.navItemActive : ""}`}
            onClick={closeMobileMenu}
          >
            Our Recruiting Process
          </Link>
          <Link
            href="/why-choose-us"
            className={`${styles.navItem} ${isActive("/why-choose-us") ? styles.navItemActive : ""}`}
            onClick={closeMobileMenu}
          >
            Why Choose Us?
          </Link>
          <span className={styles.navItemWithDropdown} role="button" tabIndex={0}>
            For Job Seekers
            <ChevronDownIcon className={styles.dropdownIcon} />
          </span>
          <Link
            href="/contact"
            className={`${styles.navItem} ${isActive("/contact") ? styles.navItemActive : ""}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
