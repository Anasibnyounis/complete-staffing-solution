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
  { id: "our-solutions", title: "Our Solutions", description: "Our solutions should break down into Retained, Executive search, Contract, Direct-Hire", image: "/about us/our service placeholder.jpg" },
  { id: "healthcare", title: "Healthcare", description: "Connecting healthcare professionals with leading medical facilities to support quality patient care.", image: "/industries detail pages/healthcare-hero.jpg" },
  { id: "financial-services", title: "Financial Services", description: "Expert financial talent for banking, accounting, and fintech industries to drive your business forward.", image: "/industries detail pages/agriculture-hero.jpg" },
  { id: "real-estate", title: "Real Estate", description: "Skilled professionals for property management and real estate services to maximize your property investments.", image: "/industries detail pages/real-estate.jpg" },
];

const defaultContent: MenuOption = {
  id: "default",
  title: "Extraordinary results only\nhappen when you've got\nextraordinary people.",
  description: "",
  image: "/homepage/hero%20image.png",
};

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
      className={`relative z-0 w-full overflow-hidden text-left font-[var(--font-plus-jakarta)] flex flex-col justify-between min-h-[640px] md:min-h-[720px] lg:min-h-[760px] ${isActive ? "active" : ""} ${isMobile ? "min-h-screen" : ""}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {!isMobile && (
        <div className="absolute inset-0 z-[1] flex justify-end">
          <div className="relative h-full w-full md:w-1/2 lg:w-[55%]">
            <Image
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${shouldShowOriginalBg ? "revealRight" : "opacity-0 translate-x-[50px]"}`}
              src="/homepage/hero%20image.png"
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
          </div>
        </div>
      )}

      {isMobile && (
        <Image
          className="revealRight absolute inset-0 w-full h-full object-cover z-[1]"
          src={currentMobileOption.image}
          alt="Mobile Background"
          fill
          priority
        />
      )}

      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/40 via-black/10 to-black/70 md:bg-gradient-to-r md:from-white md:via-white md:to-white/0" />

      <div className="absolute top-[80px] left-[74px] z-[4] flex flex-col items-start gap-[20px] shrink-0 md:py-[60px] md:px-5 md:pb-[140px] md:items-start md:text-left md:pr-4 lg:left-8 lg:top-32 2xl:left-20 2xl:top-40 -translate-x-[40px]">
        <div className="revealLeft textContent max-w-[717px] flex flex-col items-start justify-center gap-5">
          <h1 className="title self-stretch relative uppercase font-bold text-[clamp(28px,3.5vw,42px)] leading-tight text-white md:text-neutral-900 md:text-left md:text-[clamp(28px,3.5vw,42px)] md:mb-5">
            Empowering Careers.
            <br />
            Strengthening
            <br />
            Businesses.
          </h1>
          {!isMobile && (
            <>
              <p className="description self-stretch relative text-[clamp(14px,2vw,16px)] font-[var(--font-inter)] text-white md:text-neutral-700 leading-normal pr-5 max-w-[600px]">
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

      {/* Desktop/tablet: single row of 4 options; responsive padding and text */}
      <div className="absolute bottom-0 left-0 right-0 z-[4] grid grid-cols-4 gap-0 bg-transparent min-h-[100px] py-5 px-2 sm:min-h-[110px] sm:py-6 sm:px-4 md:min-h-[120px] lg:min-h-[120px]">
        {isMobile ? (
          <div className="mobileSlider flex flex-col items-center justify-center w-full max-w-[300px] mx-auto relative py-5 touch-pan-y md:block">
            <div
              className="mobileOption w-full text-center cursor-pointer py-4 px-5 bg-white/10 rounded-lg mb-5 transition-all duration-300 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-[1.02]"
              onClick={() => handleMobileOptionClick(currentMobileOption)}
            >
              <div className="menuContent flex flex-col items-center text-center w-full">
                <span className="menuText text-[clamp(18px,4vw,22px)] font-bold leading-snug text-white text-center block">
                  {currentMobileOption.title}
                </span>
                <div className="optionDetails flex flex-col items-center gap-3 max-w-[250px] mx-auto">
                  <p className="optionDescription text-[clamp(14px,3.5vw,16px)] leading-normal text-center text-white m-0">
                    {currentMobileOption.description}
                  </p>
                  <Link
                    href={getIndustryLink(currentMobileOption.id)}
                    className="learnMoreLink inline-flex items-center font-semibold text-[clamp(14px,3.5vw,16px)] py-2 px-4 text-white text-center border-2 border-white rounded transition-all duration-300 hover:bg-white hover:text-[#19478e] hover:translate-x-1"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
            <div className="mobileDots flex gap-3 mt-2.5">
              {menuOptions.map((_, index) => (
                <button
                  key={index}
                  className={`mobileDot w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${index === currentMobileIndex ? "bg-neutral-900 scale-125" : "bg-white/30 hover:bg-white/50"}`}
                  onClick={() => setCurrentMobileIndex(index)}
                  aria-label={`Go to option ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          menuOptions.map((option, index) => (
            <div
              key={option.id}
              className={`revealUp menuOption relative flex flex-col items-center justify-center cursor-pointer transition-all duration-500 border-none min-w-0 py-3 px-1 sm:py-4 sm:px-2 md:py-5 md:px-3 min-h-[88px] sm:min-h-[96px] md:min-h-[104px]
                ${hoveredOption?.id === option.id ? "bg-white text-neutral-900 shadow-md" : "bg-white/90 text-neutral-800 hover:bg-white"}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredOption(option)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <div className="menuContent flex flex-col items-center text-center w-full min-w-0">
                <span className={`menuText font-bold text-[clamp(12px,1.5vw,20px)] sm:text-[clamp(14px,2vw,18px)] text-center py-0 px-1 sm:px-2 transition-all duration-300 ${hoveredOption?.id === option.id ? "-translate-y-1 sm:-translate-y-2.5 mb-2 sm:mb-4" : ""} text-neutral-900`}>
                  {option.title}
                </span>
                {hoveredOption?.id === option.id && (
                  <div className="optionDetails revealDown flex flex-col items-center gap-1.5 sm:gap-3 max-w-[200px] sm:max-w-[280px]">
                    <p className="optionDescription text-neutral-800 text-[clamp(10px,1.2vw,14px)] leading-snug text-center font-[var(--font-inter)] m-0 line-clamp-3">
                      {option.description}
                    </p>
                    <Link
                      href={getIndustryLink(option.id)}
                      className="learnMoreLink inline-flex items-center font-semibold text-[clamp(10px,1.2vw,14px)] py-1.5 px-2 sm:py-2 sm:px-4 text-neutral-900 no-underline border-2 border-neutral-900 rounded transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:translate-x-0.5"
                    >
                      Learn More →
                    </Link>
                  </div>
                )}
              </div>
              {index < menuOptions.length - 1 && (
                <div className="divider absolute right-0 top-[20%] h-[60%] w-px bg-white/40 flex-shrink-0" />
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
