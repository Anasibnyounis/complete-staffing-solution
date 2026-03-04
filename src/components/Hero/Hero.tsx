"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MenuOption {
  id: string;
  title: string;
  description: string;
  image: string;
}

const menuOptions: MenuOption[] = [
  { id: "our-solutions", title: "Our Solutions", description: "We focus on Retained, Executive, Contract and Direct-Hire Searches for a vast array of clients.", image: "/about us/our service placeholder.jpg" },
  { id: "healthcare", title: "Healthcare", description: "Connecting healthcare professionals with leading medical facilities to support quality patient care.", image: "/industries detail pages/healthcare-hero.jpg" },
  { id: "financial-services", title: "Financial Services", description: "Expert financial talent for banking, accounting, and fintech industries to drive your business forward.", image: "/industries detail pages/agriculture-hero.jpg" },
  { id: "real-estate", title: "Real Estate", description: "Skilled professionals for property management and real estate services to maximize your property investments.", image: "/industries detail pages/real-estate.jpg" },
];

export default function Hero() {
  const [isActive, setIsActive] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<MenuOption | null>(null);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    setIsActive(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getIndustryLink = (optionId: string): string => {
    switch (optionId) {
      case "our-solutions": return "/our-solutions";
      case "healthcare": return "/industries-we-serve/healthcare";
      case "financial-services": return "/industries-we-serve/financial-services";
      case "real-estate": return "/industries-we-serve/real-estate";
      default: return "/";
    }
  };

  const shouldShowOriginalBg = !hoveredOption;

  const handlePrevMobile = () => setCurrentMobileIndex((prev) => (prev === 0 ? menuOptions.length - 1 : prev - 1));
  const handleNextMobile = () => setCurrentMobileIndex((prev) => (prev + 1) % menuOptions.length);
  const handleMobileOptionClick = (option: MenuOption) => setHoveredOption(option);
  const currentMobileOption = menuOptions[currentMobileIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNextMobile();
    if (distance < -50) handlePrevMobile();
  };

  return (
    <section
      className={`relative z-0 w-full overflow-hidden bg-black text-left font-[var(--font-plus-jakarta)] flex flex-col justify-between min-h-[640px] md:min-h-[720px] lg:min-h-[760px] ${isActive ? "active" : ""} ${isMobile ? "min-h-screen" : ""}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Desktop background image — right edge mirrors navbar container right boundary */}
      {!isMobile && (
        <div className="absolute inset-0 z-[1]">
          {/*
            We place a full-width container identical to the navbar container.
            Inside it, the image div is positioned to fill from 45% of the container to its right edge.
            This means the image's right boundary = navbar container's right boundary.
          */}
          <div className="relative h-full w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto">
            <div className="absolute top-0 bottom-0 left-[45%] right-0">
              <Image
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${shouldShowOriginalBg ? "revealRight" : "opacity-0 translate-x-[50px]"}`}
                src="/firsthero.jpg"
                alt="Professionals collaborating"
                fill
                priority
              />
              {hoveredOption && (
                <Image
                  className="revealRight absolute inset-0 h-full w-full object-cover transition-all duration-500"
                  src={hoveredOption.image}
                  alt="Background"
                  fill
                  priority
                />
              )}
              {/* Fade edges into black for subtle blending */}
              <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-black via-black/60 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-[25%] bg-gradient-to-l from-black via-black/60 to-transparent" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile background image */}
      {isMobile && (
        <Image
          className="revealRight absolute inset-0 w-full h-full object-cover z-[1]"
          src={currentMobileOption.image}
          alt="Mobile Background"
          fill
          priority
        />
      )}

      {/* Black overlay for depth and text contrast (slightly lighter for readability) */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-r from-black/80 via-black/55 to-black/15" />

      {/* Hero text — container mirrors navbar exactly */}
      <div className="absolute top-[80px] left-0 right-0 z-[4] md:py-[60px] md:pb-[140px] lg:top-32 2xl:top-40">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 2xl:px-8">
          <div className="revealLeft textContent max-w-[560px] flex flex-col items-start justify-center gap-5">
            <h1 className="title self-stretch relative uppercase font-bold text-[clamp(28px,3.5vw,42px)] leading-tight text-white text-left md:mb-5">
              Empowering Careers.
              <br />
              Strengthening
              <br />
              Businesses.
            </h1>
            {!isMobile && (
              <>
                <p className="description self-stretch relative text-[clamp(14px,2vw,16px)] font-[var(--font-inter)] text-white leading-normal max-w-[480px]">
                  For over 25 years, we've matched exceptional candidates with leading employers — helping businesses grow and careers thrive.
                </p>
                <div className="buttonsRow flex items-center gap-5 flex-wrap md:hidden">
                  <Link href="/job-request" className="ctaButton inline-flex items-center justify-center h-[50px] px-5 rounded text-lg font-semibold font-[var(--font-inter)] text-white no-underline transition-opacity hover:opacity-90 bg-[#19478e] min-w-[245px] lg:min-w-[180px]">
                    Find an Ideal Candidate
                  </Link>
                  <Link href="/open-position" className="ctaButton inline-flex items-center justify-center h-[50px] px-5 rounded text-lg font-semibold font-[var(--font-inter)] text-white no-underline transition-opacity hover:opacity-90 bg-[#6ca642] min-w-[225px] lg:min-w-[180px]">
                    Find an Ideal Position
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom menu */}
      <div className="absolute bottom-0 left-0 right-0 z-[4]">
        {isMobile ? (
          <div
            className="mobileSlider flex flex-col items-center justify-center w-full px-4 pb-6 pt-4 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="mobileOption w-full text-center cursor-pointer py-4 px-5 bg-white/10 rounded-lg mb-4 transition-all duration-300 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-[1.02]"
              onClick={() => handleMobileOptionClick(currentMobileOption)}
            >
              <div className="menuContent flex flex-col items-center text-center w-full gap-3">
                <span className="menuText text-[clamp(18px,4vw,22px)] font-bold leading-snug text-white text-center block">
                  {currentMobileOption.title}
                </span>
                <div className="optionDetails flex flex-col items-center gap-3 max-w-[260px] mx-auto">
                  <p className="optionDescription text-[clamp(13px,3.5vw,15px)] leading-normal text-center text-white m-0">
                    {currentMobileOption.description}
                  </p>
                  <Link
                    href={getIndustryLink(currentMobileOption.id)}
                    className="learnMoreLink inline-flex items-center font-semibold text-[clamp(13px,3.5vw,15px)] py-2 px-4 text-white text-center border-2 border-white rounded transition-all duration-300 hover:bg-white hover:text-[#19478e]"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
            <div className="mobileDots flex gap-3">
              {menuOptions.map((_, index) => (
                <button
                  key={index}
                  className={`mobileDot w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${index === currentMobileIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"}`}
                  onClick={() => setCurrentMobileIndex(index)}
                  aria-label={`Go to option ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop grid — container mirrors navbar exactly */
          <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 2xl:px-8">
            <div className="grid grid-cols-4 gap-0 min-h-[100px] sm:min-h-[110px] md:min-h-[120px]">
              {menuOptions.map((option, index) => (
                <div
                  key={option.id}
                  className={`revealUp menuOption relative flex flex-col items-center justify-center cursor-pointer transition-all duration-500 border-none py-3 px-2 sm:py-4 sm:px-3 md:py-5 md:px-4 min-h-[88px] sm:min-h-[96px] md:min-h-[104px]
                    ${hoveredOption?.id === option.id ? "bg-white text-neutral-900 shadow-md" : "bg-white/90 text-neutral-800 hover:bg-white"}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredOption(option)}
                  onMouseLeave={() => setHoveredOption(null)}
                >
                  <div className="menuContent flex flex-col items-center text-center w-full min-w-0">
                    <span className={`menuText font-bold text-[clamp(12px,1.4vw,18px)] text-center px-1 sm:px-2 transition-all duration-300 ${hoveredOption?.id === option.id ? "-translate-y-1 sm:-translate-y-2.5 mb-2 sm:mb-4" : ""} text-neutral-900`}>
                      {option.title}
                    </span>
                    {hoveredOption?.id === option.id && (
                      <div className="optionDetails revealDown flex flex-col items-center gap-1.5 sm:gap-3 max-w-[180px] sm:max-w-[260px]">
                        <p className="optionDescription text-neutral-800 text-[clamp(10px,1.1vw,13px)] leading-snug text-center font-[var(--font-inter)] m-0 line-clamp-3">
                          {option.description}
                        </p>
                        <Link
                          href={getIndustryLink(option.id)}
                          className="learnMoreLink inline-flex items-center font-semibold text-[clamp(10px,1.1vw,13px)] py-1.5 px-3 sm:py-2 sm:px-4 text-neutral-900 no-underline border-2 border-neutral-900 rounded transition-all duration-300 hover:bg-neutral-900 hover:text-white"
                        >
                          Learn More →
                        </Link>
                      </div>
                    )}
                  </div>
                  {index < menuOptions.length - 1 && (
                    <div className="divider absolute right-0 top-[20%] h-[60%] w-px bg-neutral-300/60 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}