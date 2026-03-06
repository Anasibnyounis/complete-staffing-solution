"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets/assets";

const RecruitingProcessCTA: React.FC = () => {
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
      className={`relative w-full min-h-[36vh] sm:min-h-[40vh] md:min-h-[50vh] flex justify-center overflow-hidden ${isVisible ? "active" : ""}`}
    >
      <div className="absolute inset-0">
        <Image
          src={assets.process_bottom}
          alt="Office team"
          fill
          className="object-cover blur-[3px] transition-transform duration-700 ease-out hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-[#19478e]/50" />
      </div>
      <div className="relative z-10 w-full max-w-[800px] mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center flex flex-col items-center justify-center">
        <h2
          className={`font-[var(--font-plus-jakarta)] font-bold text-[clamp(22px,4vw,36px)] text-[#19478e] mb-5 sm:mb-6 reveal revealUp ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          Ready to Find the Right Talent?
        </h2>
        <Link
          href="/job-request"
          className={`inline-flex items-center justify-center h-[52px] sm:h-[60px] px-8 sm:px-10 rounded-lg text-base sm:text-lg font-bold font-[var(--font-inter)] text-white no-underline bg-gradient-to-r from-[#6ca642] to-[#2d7a6e] shadow-md transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:scale-105 reveal revealUp ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "0.25s" }}
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default RecruitingProcessCTA;
