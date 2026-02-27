"use client";

import React, { useState } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    icon: "/why choose us/1.png",
    title: "Why Complete Staffing Solutions",
    shortDescription: "For 25+ years, we've helped growing organizations find the right talent by focusing o...",
    fullDescription:
      "For 25+ years, we've helped growing organizations find the right talent by focusing on personalized service and industry expertise. Our commitment to excellence has made us a trusted partner for businesses across various sectors. We understand that finding the right talent is crucial for organizational success, and our experienced team works diligently to match qualified candidates with the perfect opportunities.",
  },
  {
    id: 2,
    icon: "/why choose us/2.png",
    title: "Our Mission",
    shortDescription:
      "Our mission is to deliver top talent through strategic staffing solutions that strengthen tea...",
    fullDescription:
      "Our mission is to deliver top talent through strategic staffing solutions that strengthen teams and drive business success. We are dedicated to building lasting relationships with both clients and candidates, ensuring mutual growth and satisfaction. By leveraging our extensive network and industry knowledge, we connect exceptional talent with outstanding opportunities, creating value for all stakeholders.",
  },
  {
    id: 3,
    icon: "/why choose us/3.png",
    title: "What Sets Us Apart",
    shortDescription:
      "Our passion for search and career placement sets us apart. Strong client relationships and a d...",
    fullDescription:
      "Our passion for search and career placement sets us apart. Strong client relationships and a dedicated team make the difference. We go beyond traditional staffing by understanding the unique culture and needs of each organization. Our personalized approach, combined with cutting-edge recruitment strategies, ensures we deliver candidates who not only meet technical requirements but also align with company values and long-term goals.",
  },
];

export default function WhyChooseUs() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:py-14 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 xl:py-20 xl:px-12 2xl:py-24 2xl:px-16">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1440px] mx-auto">
        <h2 className="font-[var(--font-plus-jakarta)] font-bold text-black text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 2xl:mb-20 text-2xl sm:text-3xl md:text-[34px] lg:text-4xl xl:text-[40px] 2xl:text-[42px]">
          WHY CHOOSE US ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 2xl:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-6 sm:p-8 md:p-8 lg:p-10 xl:p-12 2xl:p-14 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] rounded-full bg-[#6ca642] flex items-center justify-center mb-5 sm:mb-6 md:mb-7 transition-transform duration-300 hover:scale-105">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={45}
                  height={45}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain brightness-0 invert"
                />
              </div>

              <h3 className="font-[var(--font-plus-jakarta)] font-bold text-black text-lg sm:text-xl md:text-[22px] leading-snug min-h-[3rem] flex items-center justify-center">
                {card.title}
              </h3>

              <p className="font-[var(--font-inter)] text-[15px] sm:text-[15px] text-neutral-700 leading-relaxed mt-4 mb-6 flex-1 text-center">
                {expandedCard === card.id ? card.fullDescription : card.shortDescription}
              </p>

              <button
                type="button"
                onClick={() => toggleExpand(card.id)}
                className="font-[var(--font-inter)] font-semibold text-sm text-black bg-transparent border-none cursor-pointer underline transition-colors hover:text-[#6ca642]"
              >
                {expandedCard === card.id ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
