"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80";

const CHECK_ICON = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const stats = [
  "10,000+ candidates screened",
  "95% client satisfaction rate",
  "Average placement time: 14 days",
];

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-[380px] xs:min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden ${isVisible ? "active" : ""}`}
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Recruiting and talent screening"
          fill
          className="object-cover blur-[2px] scale-105 transition-transform duration-[1.2s] ease-out hover:scale-110"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#19478e]/85" />
      </div>
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-center">
        <h1
          className={`font-[var(--font-plus-jakarta)] font-bold text-white text-[clamp(26px,5vw,42px)] uppercase tracking-wide mb-3 drop-shadow-sm reveal revealUp ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          Our Recruiting Process
        </h1>
        <p
          className={`font-[var(--font-plus-jakarta)] font-semibold text-white text-[clamp(16px,2.5vw,24px)] mb-6 sm:mb-8 reveal revealUp ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          Smart Recruitment. Real Results.
        </p>
        <ul className="flex flex-col items-center gap-3 list-none p-0 m-0 max-w-xl mx-auto">
          <li className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-3 w-full">
            <span
              className={`flex items-center justify-center gap-2 text-white font-[var(--font-inter)] text-[14px] sm:text-base reveal revealUp transition-transform duration-300 hover:scale-105 ${isVisible ? "active" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <span className="text-[#6ca642] shrink-0">{CHECK_ICON}</span>
              {stats[0]}
            </span>
            <span
              className={`flex items-center justify-center gap-2 text-white font-[var(--font-inter)] text-[14px] sm:text-base reveal revealUp transition-transform duration-300 hover:scale-105 ${isVisible ? "active" : ""}`}
              style={{ transitionDelay: "0.35s" }}
            >
              <span className="text-[#6ca642] shrink-0">{CHECK_ICON}</span>
              {stats[1]}
            </span>
          </li>
          <li
            className={`flex items-center justify-center gap-2 text-white font-[var(--font-inter)] text-[14px] sm:text-base w-full reveal revealUp transition-transform duration-300 hover:scale-105 ${isVisible ? "active" : ""}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <span className="text-[#6ca642] shrink-0">{CHECK_ICON}</span>
            {stats[2]}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
