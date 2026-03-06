"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export interface RoleItem {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: "blue" | "green";
  image: string;
}

interface Props {
  roles: RoleItem[];
}

export default function IndustryRoles({ roles }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // Optional: auto-advance every 6 seconds (user can still scroll)
  useEffect(() => {
    if (!emblaApi || roles.length <= 1) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi, roles.length]);

  return (
    <section className="w-full bg-[#f8f9fa] py-12 sm:py-14 md:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between gap-4 mb-12">
            <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(28px,4vw,36px)] font-bold text-[#1a1a1a] m-0 leading-tight">
              Roles We Fill
            </h2>
            {roles.length > 1 && (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous roles"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 hover:bg-[#4A7BAD] hover:text-white hover:shadow-[0_4px_12px_rgba(74,123,173,0.3)] disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <path
                      d="M15 8H1M1 8L8 15M1 8L8 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next roles"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 hover:bg-[#4A7BAD] hover:text-white hover:shadow-[0_4px_12px_rgba(74,123,173,0.3)] disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <path
                      d="M1 8H15M15 8L8 1M15 8L8 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="overflow-x-hidden p-5" ref={emblaRef}>
            <div className="flex touch-pan-y gap-6 -mr-6">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] xl:flex-[0_0_calc(25%-18px)] min-w-0 pr-6"
                >
                  <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] h-full">
                    <div className="relative w-full aspect-[1.8/1] overflow-hidden">
                      <Image
                        src={role.image}
                        alt={role.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                      />
                    </div>

                    <div className="flex flex-col gap-3 p-4 flex-1">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[20px] ${
                            role.buttonColor === "blue"
                              ? "bg-[#4A7BAD]"
                              : "bg-[#6CA642]"
                          }`}
                        >
                          <span>{role.icon}</span>
                        </div>
                        <h3 className="m-0 font-[var(--font-plus-jakarta)] text-[18px] font-bold text-[#1a1a1a] leading-snug">
                          {role.title}
                        </h3>
                      </div>

                      <p className="m-0 flex-1 text-[14px] leading-relaxed text-[#666]">
                        {role.description}
                      </p>

                      <Link
                        href={`/open-position?search=${encodeURIComponent(role.title)}`}
                        className={`mt-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[15px] font-semibold text-white no-underline transition-all duration-300 ${
                          role.buttonColor === "blue"
                            ? "bg-[#4A7BAD] hover:bg-[#3d6a9a] hover:shadow-[0_4px_12px_rgba(74,123,173,0.3)]"
                            : "bg-[#6CA642] hover:bg-[#5d9338] hover:shadow-[0_4px_12px_rgba(108,166,66,0.3)]"
                        }`}
                      >
                        {role.buttonText}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M1 8H15M15 8L8 1M15 8L8 15"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
