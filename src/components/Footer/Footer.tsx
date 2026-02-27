"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="w-full bg-[#b9c6dc] overflow-hidden">
      <div
        ref={footerRef}
        className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto relative flex flex-col items-center justify-center gap-[50px] pt-6 pb-0 text-left text-[28px] text-neutral-900 font-[var(--font-inter)] box-border px-4 lg:px-[74px] lg:gap-10 xl:px-[120px] xl:gap-10 2xl:px-16 2xl:gap-12"
      >
      <div className="reveal revealUp self-stretch flex items-center justify-between py-0 font-[var(--font-plus-jakarta)]" />

      <div className="linksContainer self-stretch flex items-start text-lg">
        <div className="linksRow flex-1 flex flex-wrap items-start justify-between gap-2 lg:flex-nowrap xl:max-w-[1200px] xl:mx-auto 2xl:max-w-[1320px] w-full">
          <div className="reveal revealLeft delay-1 column flex flex-col items-start gap-4 lg:items-center">
            <b className="columnTitle font-bold text-neutral-900">Employers</b>
            <div className="linksList flex flex-col items-start gap-2.5 text-[15px] text-neutral-600 lg:items-center">
              <Link href="/industries-we-serve" className="footerLink text-neutral-600 no-underline transition-colors hover:text-neutral-900">Industries We Serve</Link>
              <Link href="/job-request" className="footerLink text-neutral-600 no-underline transition-colors hover:text-neutral-900">Place a Job Request</Link>
            </div>
          </div>

          <div className="reveal revealLeft delay-2 column flex flex-col items-start gap-4 lg:items-center">
            <b className="columnTitle font-bold text-neutral-900">Job Seekers</b>
            <div className="linksList flex flex-col items-start gap-2.5 text-[15px] text-neutral-600 lg:items-center">
              <Link href="/Departments" className="footerLink text-neutral-600 no-underline transition-colors hover:text-neutral-900">Primary Positions</Link>
              <Link href="/policies" className="footerLink text-neutral-600 no-underline transition-colors hover:text-neutral-900">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="footerLink text-neutral-600 no-underline transition-colors hover:text-neutral-900">Terms & Conditions</Link>
            </div>
          </div>

          <div className="reveal revealRight delay-1 completeStaffingColumn flex flex-col items-start gap-4 lg:items-center">
            <div className="completeStaffingGroup flex gap-5 items-start lg:flex-col lg:gap-0">
              <div className="column flex flex-col items-start gap-4 lg:items-center">
                <b className="columnTitle font-bold text-neutral-900">Complete Staffing</b>
                <div className="linksList flex flex-col items-start gap-2.5 text-[15px] text-neutral-600 lg:items-center">
                  <Link href="/about-us" className="footerLink text-neutral-600 no-underline transition-colors hover:text-neutral-900">About us</Link>
                  <Link href="/why-choose-us-page" className="footerLink text-neutral-600 no-underline transition-colors hover:text-neutral-900">Why Choose Us?</Link>
                  <Link href="/our-recruiting-process" className="footerLink text-neutral-600 no-underline transition-colors hover:text-neutral-900">Our Process</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal revealRight delay-2 column flex flex-col items-start gap-4 lg:items-center">
            <b className="columnTitle font-bold text-neutral-900">Contact Info</b>
            <div className="contactInfoLinksContainer flex flex-col items-start justify-center gap-2.5 text-[15px] text-neutral-600 lg:items-center sm:text-xs">
              <div className="addressRow flex items-center gap-2.5 sm:justify-center sm:text-xs">
                <Image src={`${FOOTER_ICONS}/MapPinLine.svg`} alt="" width={24} height={24} className="addressRowIcon h-5 w-5 shrink-0 object-contain sm:h-4 sm:w-4" />
                <span>United States America</span>
              </div>
              <div className="addressRow flex items-center gap-2.5 sm:justify-center sm:text-xs">
                <Image src={`${FOOTER_ICONS}/Phone.svg`} alt="" width={24} height={24} className="addressRowIcon h-5 w-5 shrink-0 object-contain sm:h-4 sm:w-4" />
                <a href="tel:+12025550153" className="footerLink text-neutral-600 no-underline hover:text-neutral-900 sm:text-xs">(401) 475-8800</a>
              </div>
              <div className="addressRow flex items-center gap-2.5 sm:justify-center sm:text-xs">
                <div className="contactIconContainer h-[27px] w-[27px] min-w-[27px] rounded-full shrink-0 bg-white border border-neutral-900 flex items-center justify-center box-border sm:h-5 sm:w-5 sm:min-w-5">
                  <Image src={`${FOOTER_ICONS}/EnvelopeSimple.svg`} alt="" width={20} height={20} />
                </div>
                <a href="mailto:Contactus@completestaffingsolutions.com" className="footerLink text-neutral-600 no-underline hover:text-neutral-900 sm:text-xs">Contactus@completestaffingsolutions.com</a>
              </div>
              <div className="socialIconsContainerColumn flex items-center gap-2.5 mt-1.5">
                {socialLinks.map(({ icon, url }) => (
                  <a key={icon} href={url} target="_blank" rel="noopener noreferrer" className="socialIconLink flex items-center justify-center w-[27px] h-[27px] min-w-[27px] min-h-[27px] rounded-full bg-white border border-neutral-900 box-border transition-opacity hover:opacity-90 sm:w-[22px] sm:h-[22px] sm:min-w-[22px] sm:min-h-[22px]">
                    <Image src={`${FOOTER_ICONS}/${icon}.svg`} alt={icon} width={20} height={20} className="socialIcon w-5 h-5 object-contain sm:w-3.5 sm:h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal revealUp delay-3 copyrightContainer self-stretch flex items-center justify-center py-5 pt-0 text-[15px] text-neutral-600 sm:text-base">
        <p className="copyrightText text-center">© 2026 Complete Staffing Solutions. All Rights Reserved.</p>
      </div>
      </div>
    </footer>
  );
}
