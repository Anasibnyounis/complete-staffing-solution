"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MailIcon, PhoneIcon, ChevronDownIcon } from "./icons";
import styles from "./Header.module.css";


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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false); // For client-only checks

  const pathname = usePathname();

  // Set mounted to true on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  }, []);

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileOpenDropdown(prev => (prev === dropdown ? null : dropdown));
  };

  const isActive = (href: string) => {
    if (!mounted) return false; // server: always false
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`${styles.header} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
    >
      {/* Top bar */}
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

      {/* Logo + Hamburger */}
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

      {/* Main navigation */}
      <nav className={styles.mainHeader} aria-label="Main navigation">
        <div className={styles.navLinks}>
          <Link
            href="/"
            className={`${styles.navItem} ${isActive("/") ? styles.navItemActive : ""}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          {/* About dropdown */}
          <Link
            href="/about-us"
            className={`${styles.navItem} ${isActive("/about-us") ? styles.navItemActive : ""}`}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          {/* For Employers dropdown */}
          <div
            className={`${styles.navDropdownWrapper} ${mobileOpenDropdown === "employers" ? styles.navDropdownOpen : ""
              } ${isActive("/job-request") || isActive("/IndustryPage") ? styles.navDropdownActive : ""}`}
            onMouseEnter={() => setOpenDropdown("employers")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {/* <span
              className={styles.navDropdownTrigger}
              onClick={() => toggleMobileDropdown("")}
            >
              For Employers <ChevronDownIcon className={styles.dropdownIcon} />
            </span> */}
<Link
  href="/job-request"
  className={styles.navDropdownTrigger}
  onClick={() => toggleMobileDropdown("employers")}
>
  For Employees <ChevronDownIcon className={styles.dropdownIcon} />
</Link>



            <div className={styles.navDropdownPanel}>
              <Link href="/IndustryPage" onClick={closeMobileMenu}>Industries</Link>
              <Link href="/Departments" onClick={closeMobileMenu}>Departments</Link>
            </div>
          </div>

          {/* Our Recruiting Process */}
          <Link
            href="/our-recruiting-process"
            className={`${styles.navItem} ${isActive("/our-recruiting-process") ? styles.navItemActive : ""}`}
            onClick={closeMobileMenu}
          >
            Our Recruiting Process
          </Link>

          {/* For Job Seekers dropdown */}
          <div
            className={`${styles.navDropdownWrapper} ${mobileOpenDropdown === "jobseekers" ? styles.navDropdownOpen : ""
              } ${isActive("/open-position") || isActive("/job-request") ? styles.navDropdownActive : ""}`}
            onMouseEnter={() => setOpenDropdown("jobseekers")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
           <span
  className={styles.navDropdownTrigger}
  onClick={() => {
    toggleMobileDropdown("jobseekers");
  }}
>


              For Job Seekers <ChevronDownIcon className={styles.dropdownIcon} />
            </span>
            <div className={styles.navDropdownPanel} >
              {/* <Link href="/job-seeker-overview" onClick={closeMobileMenu}>Job Seeker Overview</Link> */}
              <Link href="/open-position" onClick={closeMobileMenu}>Open Positions</Link>
              <Link href="/employment-form" onClick={closeMobileMenu}>Employment Position</Link>
            </div>
          </div>

          {/* Contact dropdown */}
          <div
            className={`${styles.navDropdownWrapper} ${mobileOpenDropdown === "contact" ? styles.navDropdownOpen : ""
              } ${isActive("/contact-us") || isActive("/policies") ? styles.navDropdownActive : ""}`}
            onMouseEnter={() => setOpenDropdown("contact")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span
              className={styles.navDropdownTrigger}
              onClick={() => toggleMobileDropdown("contact")}
            >
              Contact <ChevronDownIcon className={styles.dropdownIcon} />
            </span>
            <div className={styles.navDropdownPanel}>
              <Link href="/contact" onClick={closeMobileMenu}>Our Locations</Link>
              <Link href="/policies" onClick={closeMobileMenu}>Policies and Disclosures</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
