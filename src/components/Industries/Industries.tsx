"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: "35K",
    description: "We have served over 14,000 businesses",
  },
  {
    number: "200K",
    description: "We have placed over 83,000 candidates in rewarding positions",
  },
  {
    number: "1M",
    description: "We have built relationships with over 30,000 talented professionals",
  },
];

export default function Industries() {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsStatsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full relative bg-[#b9c6dc]/30 overflow-hidden flex flex-col items-center py-2 px-4 sm:py-2 sm:px-6 md:py-2 md:px-8 2xl:py-2 2xl:px-8">
      <div
        ref={statsRef}
        className={`w-full rounded-2xl 2xl:rounded-none bg-[#19478e] overflow-hidden py-10 px-6 sm:py-12 sm:px-8 md:py-14 md:px-10 lg:py-16 lg:px-12 2xl:py-20 2xl:px-16
          transition-all duration-700 ease-out
          ${isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 2xl:gap-16 font-[var(--font-plus-jakarta)] text-white">
        {stats.map((stat, index) => (
          <div
            key={stat.number}
            className={`flex flex-col items-center justify-start gap-4 sm:gap-5 md:gap-6 text-center transition-all duration-500 ease-out ${
              isStatsVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: isStatsVisible ? `${0.2 + index * 0.2}s` : "0s" }}
          >
            <div className="font-bold uppercase text-[clamp(28px,5vw,52px)] leading-none text-white transition-transform duration-300 hover:scale-105">
              {stat.number}
            </div>
            <div className="font-[var(--font-inter)] text-base sm:text-lg text-white text-center leading-snug max-w-[314px]">
              {stat.description}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
