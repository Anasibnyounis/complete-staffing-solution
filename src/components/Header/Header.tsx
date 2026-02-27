"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MailIcon, PhoneIcon, ChevronDownIcon } from "./icons";

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
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  }, []);

  const toggleMobileDropdown = (key: string) => {
    setMobileOpenDropdown((prev) => (prev === key ? null : key));
  };

  const isActive = (href: string) => {
    if (!mounted) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navItemClass = (href: string) =>
    `nav-link-underline ${isActive(href) ? "active" : ""}`;

  return (
    <header className="relative z-50 w-full bg-white text-sm text-neutral-900 font-[var(--font-inter)] shadow-sm">
      {/* Top bar */}
      <div className="w-full bg-[#19478e] text-white">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-2 2xl:px-8 font-[var(--font-dm-sans)]">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:Contactus@completestaffingsolutions.com"
              className="flex items-center gap-2 no-underline text-white hover:opacity-90"
            >
              <MailIcon className="w-[19px] h-[19px] text-[#6ca642]" />
              <span className="truncate">Contactus@completestaffingsolutions.com</span>
            </a>
            <div className="flex items-center gap-2 text-white">
              <PhoneIcon className="w-5 h-5 text-[#6ca642]" />
              <span>(401) 475-8800</span>
            </div>
          </div>

          <a
            href="/FraudNotice"
            className="hidden md:inline-flex items-center justify-center h-11 px-5 rounded bg-[#6ca642] text-sm font-semibold no-underline shadow-sm hover:bg-[#5a8e37] hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Recruitment Fraud Notice
          </a>
        </div>
      </div>

      {/* Logo row - solid background so it never blends with hero */}
      <div className="w-full bg-white border-b border-neutral-200">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto flex items-center justify-between px-4 py-3 lg:py-4 2xl:px-8">
          <Link
            href="/"
            aria-label="Complete Staffing Solutions - Home"
            className="flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.svg"
              alt="Complete Staffing Solutions"
              width={175}
              height={72}
              className="h-12 w-auto lg:h-[72px] object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[15px]" aria-label="Main navigation">
            <Link href="/" className={navItemClass("/")} onClick={closeMobileMenu}>
              Home
            </Link>
            <Link
              href="/about-us"
              className={navItemClass("/about-us")}
              onClick={closeMobileMenu}
            >
              About
            </Link>

            {/* For Employers */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1 font-semibold pb-1 border-b-2 border-transparent -mb-1.5 hover:text-[#6ca642] transition-colors"
              >
                For Employers
                <ChevronDownIcon className="w-5 h-5" />
              </button>
              <div className="hidden group-hover:block absolute left-0 top-full mt-3 w-56 rounded-md bg-white shadow-lg py-2 z-20">
                <Link
                  href="/industries-we-serve"
                  className="block px-5 py-2.5 text-[15px] font-semibold text-neutral-900 no-underline hover:bg-[#6ca642]/10 hover:text-[#6ca642]"
                  onClick={closeMobileMenu}
                >
                  Industries
                </Link>
                <Link
                  href="/Departments"
                  className="block px-5 py-2.5 text-[15px] font-semibold text-neutral-900 no-underline hover:bg-[#6ca642]/10 hover:text-[#6ca642]"
                  onClick={closeMobileMenu}
                >
                  Departments
                </Link>
              </div>
            </div>

            <Link
              href="/our-recruiting-process"
              className={navItemClass("/our-recruiting-process")}
              onClick={closeMobileMenu}
            >
              Our Recruiting Process
            </Link>

            {/* For Job Seekers */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1 font-semibold pb-1 border-b-2 border-transparent -mb-1.5 hover:text-[#6ca642] transition-colors"
              >
                For Job Seekers
                <ChevronDownIcon className="w-5 h-5" />
              </button>
              <div className="hidden group-hover:block absolute left-0 top-full mt-3 w-56 rounded-md bg-white shadow-lg py-2 z-20">
                <Link
                  href="/open-position"
                  className="block px-5 py-2.5 text-[15px] font-semibold text-neutral-900 no-underline hover:bg-[#6ca642]/10 hover:text-[#6ca642]"
                  onClick={closeMobileMenu}
                >
                  Open Positions
                </Link>
                <Link
                  href="/employment-form"
                  className="block px-5 py-2.5 text-[15px] font-semibold text-neutral-900 no-underline hover:bg-[#6ca642]/10 hover:text-[#6ca642]"
                  onClick={closeMobileMenu}
                >
                  Employment Position
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1 font-semibold pb-1 border-b-2 border-transparent -mb-1.5 hover:text-[#6ca642] transition-colors"
              >
                Contact
                <ChevronDownIcon className="w-5 h-5" />
              </button>
              <div className="hidden group-hover:block absolute right-0 top-full mt-3 w-64 rounded-md bg-white shadow-lg py-2 z-20">
                <Link
                  href="/contact"
                  className="block px-5 py-2.5 text-[15px] font-semibold text-neutral-900 no-underline hover:bg-[#6ca642]/10 hover:text-[#6ca642]"
                  onClick={closeMobileMenu}
                >
                  Our Locations
                </Link>
                <Link
                  href="/policies"
                  className="block px-5 py-2.5 text-[15px] font-semibold text-neutral-900 no-underline hover:bg-[#6ca642]/10 hover:text-[#6ca642]"
                  onClick={closeMobileMenu}
                >
                  Policies and Disclosures
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex lg:hidden items-center justify-center w-11 h-11 rounded hover:bg-black/5 text-neutral-900 transition-colors"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <HamburgerIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden w-full bg-white border-b border-neutral-200" aria-label="Mobile navigation">
          <div className="max-w-[1280px] mx-auto px-4 py-3 space-y-2 text-[15px]">
            <Link
              href="/"
              className="block py-2 border-b border-neutral-100 font-semibold"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block py-2 border-b border-neutral-100 font-semibold"
              onClick={closeMobileMenu}
            >
              About
            </Link>

            {/* For Employers mobile */}
            <div className="border-b border-neutral-100">
              <button
                type="button"
                className="w-full flex items-center justify-between py-2 font-semibold"
                onClick={() => toggleMobileDropdown("employers")}
              >
                <span>For Employers</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    mobileOpenDropdown === "employers" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenDropdown === "employers" && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link
                    href="/industries-we-serve"
                    className="block py-1.5 text-neutral-700"
                    onClick={closeMobileMenu}
                  >
                    Industries
                  </Link>
                  <Link
                    href="/Departments"
                    className="block py-1.5 text-neutral-700"
                    onClick={closeMobileMenu}
                  >
                    Departments
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/our-recruiting-process"
              className="block py-2 border-b border-neutral-100 font-semibold"
              onClick={closeMobileMenu}
            >
              Our Recruiting Process
            </Link>

            {/* For Job Seekers mobile */}
            <div className="border-b border-neutral-100">
              <button
                type="button"
                className="w-full flex items-center justify-between py-2 font-semibold"
                onClick={() => toggleMobileDropdown("jobseekers")}
              >
                <span>For Job Seekers</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    mobileOpenDropdown === "jobseekers" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenDropdown === "jobseekers" && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link
                    href="/open-position"
                    className="block py-1.5 text-neutral-700"
                    onClick={closeMobileMenu}
                  >
                    Open Positions
                  </Link>
                  <Link
                    href="/employment-form"
                    className="block py-1.5 text-neutral-700"
                    onClick={closeMobileMenu}
                  >
                    Employment Position
                  </Link>
                </div>
              )}
            </div>

            {/* Contact mobile */}
            <div className="border-b border-neutral-100">
              <button
                type="button"
                className="w-full flex items-center justify-between py-2 font-semibold"
                onClick={() => toggleMobileDropdown("contact")}
              >
                <span>Contact</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    mobileOpenDropdown === "contact" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenDropdown === "contact" && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link
                    href="/contact"
                    className="block py-1.5 text-neutral-700"
                    onClick={closeMobileMenu}
                  >
                    Our Locations
                  </Link>
                  <Link
                    href="/policies"
                    className="block py-1.5 text-neutral-700"
                    onClick={closeMobileMenu}
                  >
                    Policies and Disclosures
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

