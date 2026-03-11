"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CardData {
  title: string;
  text: string;
  icon: string;
}

interface FlexibleSectionProps {
  title?: string;
  image?: string;
  cards?: CardData[];
  backgroundColor?: string;
}

const defaultCards: CardData[] = [
  {
    title: "Direct/Permanent Placement",
    text: "Gain access to our extensive network of candidates for permanent full or part-time openings.",
    icon: "/why%20choose%20us/svg1.png",
  },
  {
    title: "Temporary Placement",
    text: "Hire skilled professionals on an interim basis to support your team when you need it most.",
    icon: "/why%20choose%20us/svg2.png",
  },
  {
    title: "Temporary to Hire",
    text: "Evaluate a candidate’s fit before making a full-time commitment.",
    icon: "/why%20choose%20us/svg3.png",
  },
];

export default function FlexibleSection({
  title = "FLEXIBLE SOLUTIONS",
  image = "/why%20choose%20us/flexiblesolutions.jpg",
  cards = defaultCards,
  backgroundColor = "#0f3b7a",
}: FlexibleSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const iconBg = ["#0f3b7a", "#6ca642", "#0b2f63"];

  return (
    <section ref={sectionRef} className="w-full bg-[#FAFAFC]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-[60px] pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-16">
        <div
          className={`opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <h2 className="font-(family-name:--font-plus-jakarta) font-extrabold text-neutral-900 text-[26px] sm:text-[30px] lg:text-[36px] tracking-tight">
            {title}
          </h2>
          <div className="mt-3 h-[3px] w-[46px] rounded-full bg-[#6ca642]" />
        </div>

        <div
          className={`mt-8 rounded-[28px] overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative z-0">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                unoptimized
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div className="px-6 py-4 sm:px-8 lg:px-8 relative z-10">
              <div className="flex flex-col gap-4 lg:gap-3">
                {cards.map((card, i) => (
                  <div
                    key={card.title}
                    className={`rounded-2xl bg-white px-5 sm:px-6 py-4 sm:py-5 flex gap-4 items-start opacity-0 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] lg:-ml-20 xl:-ml-24 ${
                      isVisible ? "opacity-100 translate-y-0" : ""
                    }`}
                    style={{ transitionDelay: `${320 + i * 120}ms` }}
                  >
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: iconBg[i] ?? backgroundColor }}
                    >
                      <Image
                        src={card.icon}
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-(family-name:--font-plus-jakarta) font-bold text-[16px] sm:text-[18px] text-neutral-900 leading-snug">
                        {card.title}
                      </h3>
                      <p className="mt-1 font-(family-name:--font-inter) text-[14px] sm:text-[15px] leading-[1.55] text-neutral-700">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}