"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBriefcase, FaUsers, FaBuilding } from "react-icons/fa";

const HERO_IMAGES = [
  { src: "/firsthero.jpg", alt: "Professionals collaborating" },
  { src: "/valuation-multiples-for-a-property-management-firm-1-980x551.jpg", alt: "Team and workplace" },
  { src: "/financial_hero_section_image.jpg", alt: "Financial services" },
];

const stats = [
  {
    icon: FaBriefcase,
    value: "25+",
    label: "Years Experience",
  },
  {
    icon: FaUsers,
    value: "200,000+",
    label: "Placements",
  },
  {
    icon: FaBuilding,
    value: "35,000+",
    label: "Companies Served",
  },
];

export default function Hero() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setIsActive(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const n = HERO_IMAGES.length;
    if (n <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((i) => (i + 1) % n);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`hero-section relative z-0 w-full overflow-hidden bg-black text-left font-[var(--font-plus-jakarta)] flex flex-col justify-between ${isActive ? "active" : ""} ${isMobile ? "min-h-screen" : ""}`}
    >
      {/* Full-width background image with subtle shading and blend */}
      <div className="hero-bg-wrap absolute inset-0 z-[1] overflow-hidden">
        {HERO_IMAGES.map((img, index) => (
          <Image
            key={img.src}
            className="absolute inset-0 h-full object-contain object-right transition-all duration-1000 ease-out"
            style={{
              opacity: activeImageIndex === index ? 0.8 : 0,
              transform: activeImageIndex === index ? "translateX(0)" : "translateX(-15%)",
              zIndex: activeImageIndex === index ? 20 : 10,
            }}
            src={img.src}
            alt={img.alt}
            fill
            priority={index === 0}
          />
        ))}
        {/* Dark overlay for readability and smoother blend into content */}
        <div
          className="absolute inset-0 z-30"
          style={{
            background:
              "linear-gradient(to right, #000 0%, #000 35%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* Extra bottom shade to visually minimize the photo area */}
        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-40 z-[40] bg-gradient-to-t from-black/85 via-black/60 to-transparent" /> */}
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Hero content */}
        <div className="relative z-[4] col-span-2 flex flex-1 flex-col justify-center pt-[100px] md:pt-[120px] pb-6 md:pb-8">
          <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 2xl:px-8">
            <div className="revealLeft textContent max-w-[600px] flex flex-col items-start gap-5 md:gap-6">
              <h1 className="hero-title font-bold text-[clamp(28px,4vw,48px)] md:text-[clamp(36px,4.5vw,56px)] leading-[1.15] text-white text-left">
                Empowering Careers.
                <br />
                Strengthening Businesses.
              </h1>
              <p className="hero-description text-[clamp(14px,2vw,18px)] font-[var(--font-inter)] text-white/95 leading-relaxed max-w-[520px]">
                For over 25 years we&apos;ve helped exceptional talent connect with
                companies that are ready to grow.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
                <Link
                  href="/open-position"
                  className="hero-cta hero-cta-blue inline-flex items-center justify-center h-[50px] px-6 rounded-lg text-base font-semibold font-[var(--font-inter)] text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-lg min-w-[140px] sm:min-w-[140px]"
                >
                  Search Jobs
                </Link>
                <Link
                  href="/employment-form"
                  className="hero-cta hero-cta-green inline-flex items-center justify-center h-[50px] px-6 rounded-lg text-base font-semibold font-[var(--font-inter)] text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-lg min-w-[140px] sm:min-w-[140px]"
                >
                  Hire Talent
                </Link>
              </div>
            </div>
            <div className="relative z-[4] col-span-1 mt-4 pb-8 md:pb-10">
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {stats.map((stat, index) => (
                    <div key={`${stat.label}- ${index}`} className="items-center justify-center backdrop-blur-lg border border-white/10 bg-white/5 revealUp group relative flex gap-4 p-5 md:px-2 md:py-6 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1">
                      <span className="hero-stat-icon text-[#5ba3a8] text-xl md:text-2xl">
                        <stat.icon aria-hidden className="w-10 h-10" />
                      </span>
                      <div
                        key={stat.label}
                        className=""
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="hero-stat-value font-bold text-white text-2xl md:text-3xl leading-tight">
                            {stat.value}
                          </span>
                          <span className="hero-stat-label text-white/90 text-sm md:text-base font-[var(--font-inter)]">
                            {stat.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
