"use client";

import React, { useState } from "react";
import Image from "next/image";

const STEP_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80",
];

const ACCENT_BG = [
  "bg-[#19478e]/8 border-l-[#19478e]",
  "bg-[#6CA642]/8 border-l-[#6CA642]",
  "bg-[#225eb9]/8 border-l-[#225eb9]",
  "bg-emerald-500/10 border-l-emerald-600",
  "bg-sky-500/10 border-l-sky-600",
];

const ProcessSteps: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const steps = [
    {
      title: "How Our Process Works",
      subtitle: "We identify the best candidates using direct recruitment methods others don't access.",
      description: `Our data-based recruiting methodology will narrow our search to the ideal candidate for your opening. We actively try to get the best candidates through our extensive professional networks, advertising, cold calling, research, our extensive database, and employee recommendations. Through our complete candidate testing, screening, and interview process, we do a thorough initial, technical skills, and background reference examinations to ensure the pool of candidates you meet are top quality.`,
    },
    {
      title: "",
      subtitle: "Once we make recommendations, we help you shortlist candidates for interviews or assignments.",
      description: `Once we have recommended a few candidates for you, we give support in helping conduct the interview and extend the invitation to do so to this candidate, including how to create the position. We aim to continue following that person even after he/she has been hired, if necessary, to make the right on-going recommendations for us to be able to recognize they are able to enjoy a long term success at the company.`,
    },
    {
      title: "",
      subtitle: "Onsite Solutions",
      description: `If the ideal on site outsourced approach is actually required, the place is actually in your office, or perhaps in a variety of locations, we can help you set up that up the way you want it and run it as well-for a cost. You supply the resources we source, screen and supply the talent and management. We work with other organizations on planning and supply chains, in order to keep cost down while delivering quality.`,
    },
    {
      title: "",
      subtitle: "",
      smalltitle: "Referrals",
      description: `Should you be pleased with what we do for you, please tell other people. We believe that the satisfied client is definitely the greatest advertisement. We continue to strive for quality and value for our customers.`,
    },
    {
      title: "",
      subtitle: "",
      smalltitle: "Team Recruitment Approach",
      description:
        "Complete Staffing's recruiting approach allows all of our team members to participate in finding you the best possible match for your open position.",
    },
  ];

  const toggleOpen = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-sky-50/40 to-slate-50/60 py-14 sm:py-16 md:py-20">
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(22px,3vw,28px)] font-bold text-[#19478e] uppercase tracking-wide text-center mb-10">
          How Our Process Works
        </h2>

        <div className="flex flex-col gap-4 sm:gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-2xl border-l-4 overflow-hidden transition-all duration-300 ${ACCENT_BG[index % ACCENT_BG.length]} bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md`}
            >
              <div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 cursor-pointer"
                onClick={() => toggleOpen(index)}
              >
                <div className="relative w-full sm:w-44 shrink-0 h-36 sm:h-32 rounded-xl overflow-hidden bg-neutral-100">
                  <Image
                    src={STEP_IMAGES[index]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 176px"
                  />
                </div>
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  {step.title && (
                    <h3 className="font-[var(--font-plus-jakarta)] font-bold text-lg sm:text-xl text-neutral-900 mb-1">
                      {step.title}
                    </h3>
                  )}
                  {step.smalltitle && (
                    <h4 className="font-[var(--font-plus-jakarta)] font-semibold text-base text-[#19478e] mb-1">
                      {step.smalltitle}
                    </h4>
                  )}
                  {step.subtitle && (
                    <h3 className="font-[var(--font-inter)] font-semibold text-neutral-800 text-[15px] sm:text-base mb-2">
                      {step.subtitle}
                    </h3>
                  )}
                  <p
                    className={`font-[var(--font-inter)] text-neutral-600 text-sm sm:text-[15px] leading-relaxed transition-all duration-300 overflow-hidden ${
                      openIndexes.includes(index)
                        ? "max-h-[800px] opacity-100"
                        : "max-h-0 opacity-0 sm:max-h-[4.5em] sm:opacity-100"
                    }`}
                  >
                    {step.description}
                  </p>
                  <button
                    type="button"
                    className="mt-2 text-[#19478e] font-semibold text-sm hover:underline focus:outline-none sm:hidden"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOpen(index);
                    }}
                  >
                    {openIndexes.includes(index) ? "Show less" : "Read more"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
