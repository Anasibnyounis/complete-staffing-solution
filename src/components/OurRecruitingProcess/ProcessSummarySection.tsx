"use client";

import React, { useEffect, useRef, useState } from "react";

const CHECK_ICON = (
  <svg
    width="18"
    height="18"
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

const ProcessSummarySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#f9f9fb] py-8 sm:py-10 md:py-14 ${isVisible ? "active" : ""}`}
    >
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
        <h2
          className={`font-[var(--font-plus-jakarta)] text-[clamp(20px,3vw,32px)] font-bold text-[#19478e] uppercase tracking-wide text-center mb-6 sm:mb-8 reveal revealUp ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          How Our Process Works
        </h2>
        <div
          className={`rounded-xl bg-white shadow-md border border-neutral-200/60 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 reveal revealUp ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <h3 className="font-[var(--font-plus-jakarta)] font-bold text-[#19478e] text-base sm:text-lg md:text-2xl mb-3 sm:mb-4 text-center">
            Smart Recruitment. Real Results.
          </h3>
          <hr className="my-3 sm:my-4 border-neutral-200" />
          <ul className="flex flex-col items-center gap-3 list-none p-0 m-0 max-w-xl mx-auto">
            <li className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-3 w-full">
              <span className="flex items-center justify-center gap-2 text-black font-[var(--font-inter)] text-[14px] sm:text-base transition-transform duration-300 hover:translate-x-1">
                <span className="text-[#6ca642] shrink-0">{CHECK_ICON}</span>
                {stats[0]}
              </span>
              <span className="flex items-center justify-center gap-2 text-black font-[var(--font-inter)] text-[14px] sm:text-base transition-transform duration-300 hover:translate-x-1">
                <span className="text-[#6ca642] shrink-0">{CHECK_ICON}</span>
                {stats[1]}
              </span>
            </li>
            <li className="flex items-center justify-center gap-2 text-black font-[var(--font-inter)] text-[14px] sm:text-base w-full transition-transform duration-300 hover:translate-x-1">
              <span className="text-[#6ca642] shrink-0">{CHECK_ICON}</span>
              {stats[2]}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessSummarySection;
