"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SolutionDetailContent } from "../solutionDetailContent";

interface SolutionDetailViewProps {
  content: SolutionDetailContent;
}

export default function SolutionDetailView({ content }: SolutionDetailViewProps) {
  const heroRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [bodyVisible, setBodyVisible] = useState(false);

  useEffect(() => {
    const heroObs = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setHeroVisible(true),
      { threshold: 0.1 }
    );
    if (heroRef.current) heroObs.observe(heroRef.current);

    const bodyObs = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setBodyVisible(true),
      { threshold: 0.05 }
    );
    if (bodyRef.current) bodyObs.observe(bodyRef.current);

    return () => {
      heroObs.disconnect();
      bodyObs.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f6f8] scroll-smooth">
      {/* Hero header: same image as card, title + subtitle */}
      <section
        ref={heroRef}
        className={`relative w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] flex items-end overflow-hidden transition-all duration-1000 ${heroVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute inset-0">
          <Image
            src={content.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[rgba(25,71,142,0.92)] via-[rgba(25,71,142,0.6)] to-[rgba(25,71,142,0.4)]"
            aria-hidden
          />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 pb-10 sm:pb-12 pt-16">
          <div className="w-full max-w-[1200px] mx-auto">
            <Link
              href="/our-solutions"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-medium mb-4 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Our Solutions
            </Link>
            <h1
              className={`font-[var(--font-plus-jakarta)] font-bold text-white text-3xl sm:text-4xl md:text-[42px] leading-tight m-0 mb-2 reveal revealUp ${heroVisible ? "active" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              {content.title}
            </h1>
            <p
              className={`font-[var(--font-plus-jakarta)] text-[#E5ECF6] text-lg sm:text-xl m-0 reveal revealUp ${heroVisible ? "active" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main card: body details with smooth reveal */}
      <div
        ref={bodyRef}
        className="w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 -mt-6 sm:-mt-8 pb-16"
      >
        <div className="w-full max-w-[900px] mx-auto">
          <article
            className={`rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-neutral-200/60 overflow-hidden transition-all duration-700 ${bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="font-[var(--font-plus-jakarta)] font-bold text-[#1f2933] text-xl sm:text-2xl mb-4">
                Our Focus
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-8 sm:mb-10">
                {content.ourFocus}
              </p>

              {content.sections.map((section, index) => (
                <div
                  key={section.title}
                  className="mb-8 sm:mb-10 last:mb-0"
                  style={{ transitionDelay: `${0.15 * (index + 1)}s` }}
                >
                  <h3 className="font-[var(--font-plus-jakarta)] font-bold text-[#1f2933] text-lg sm:text-xl mb-3">
                    {section.title}
                  </h3>
                  <p className="text-[#4b5563] leading-relaxed m-0">
                    {section.body}
                  </p>
                </div>
              ))}

              <div className="pt-6 border-t border-neutral-200">
                <h3 className="font-[var(--font-plus-jakarta)] font-bold text-[#1f2933] text-lg sm:text-xl mb-3">
                  Our Edge
                </h3>
                <p className="text-[#4b5563] leading-relaxed m-0">
                  {content.ourEdge}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/our-solutions"
                  className="inline-flex items-center gap-2 py-3 px-5 bg-[#19478e] text-white text-sm font-medium rounded-lg no-underline transition-all hover:bg-[#153a6e] hover:shadow-md"
                >
                  View All Solutions
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 py-3 px-5 bg-[#6ca642] text-white text-sm font-medium rounded-lg no-underline transition-all hover:bg-[#5d9338] hover:shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
