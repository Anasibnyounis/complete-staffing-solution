"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const STEP_IMAGES = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=400&q=80",
];

const steps = [
  {
    number: 1,
    title: "Discover Talent",
    description:
      "We source candidates through targeted recruitment strategies.",
  },
  {
    number: 2,
    title: "Screen & Evaluate",
    description:
      "Every candidate is thoroughly vetted by our expert recruiters.",
  },
  {
    number: 3,
    title: "Present Top Candidates",
    description:
      "We shortlist the best matches and send them to you for review.",
  },
  {
    number: 4,
    title: "Support Interviews & Hiring",
    description:
      "We coordinate interviews and assist with the hiring process.",
  },
  {
    number: 5,
    title: "Successful Placement",
    description:
      "Once selected, we ensure a smooth onboarding experience.",
  },
];

const ProcessSteps: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#f9f9fb] py-10 sm:py-14 md:py-16 ${isVisible ? "active" : ""}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2
          className={`font-[var(--font-plus-jakarta)] text-[clamp(20px,3vw,32px)] font-bold text-[#19478e] uppercase tracking-wide text-center mb-8 sm:mb-10 md:mb-14 reveal revealUp ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          How Our Process Works
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div
                className={`group flex-1 min-w-0 rounded-xl bg-white border border-neutral-200/60 overflow-hidden flex flex-col shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal revealUp ${isVisible ? "active" : ""}`}
                style={{ transitionDelay: `${0.15 + index * 0.08}s` }}
              >
                <div className="p-4 sm:p-5">
                  <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4 min-h-[3.5rem] sm:min-h-16">
                    <div className="w-9 md:w-12 h-9 md:h-12 rounded-full bg-[#19478e] text-white flex items-center justify-center font-[var(--font-plus-jakarta)] font-bold text-sm sm:text-base md:text-lg shrink-0 transition-transform duration-300 group-hover:scale-105">
                      {step.number}
                    </div>
                    <h3 className="font-[var(--font-plus-jakarta)] font-bold text-[#19478e] text-[13px] sm:text-base uppercase tracking-wide leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 mb-3 sm:mb-4 group">
                    <Image
                      src={STEP_IMAGES[index]}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 220px"
                    />
                  </div>
                  <p className="font-[var(--font-inter)] text-neutral-600 text-[13px] sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex justify-center shrink-0 w-6 xl:w-8 self-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#19478e]"
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Progress line + numbered circles: hidden on small screens, aligned under cards */}
        <div className="hidden lg:flex w-full max-w-7xl mx-auto items-center -m-5">
          {[
            { circleColor: "#6ca642", segmentColor: "#6ca642" },
            { circleColor: "#19478e", segmentColor: "#3877b6" },
            { circleColor: "#19478e", segmentColor: "#19478e" },
            { circleColor: "#19478e", segmentColor: "#19478e" },
            { circleColor: "#6ca642", segmentColor: "#6ca642" },
          ].map(({ circleColor, segmentColor }, i) => (
            <div key={i} className="flex-1 flex items-center">

              {/* Step */}
              <div className="flex flex-col items-center w-full relative">

                {/* Circle */}
                <div
                  className="w-7 md:w-10 h-7 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"
                  style={{
                    backgroundColor: circleColor,
                    boxShadow:
                      circleColor === "#19478e"
                        ? "0 2px 4px rgba(25,71,142,0.35)"
                        : undefined,
                  }}
                >
                  {i + 1}
                </div>

                {/* Line */}
                {i < 4 && (
                  <div
                    className="absolute top-1/2 left-1/2 w-full h-1.5 -translate-y-1/2"
                    style={{ backgroundColor: segmentColor }}
                  />
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
