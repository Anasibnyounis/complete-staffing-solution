"use client";

import React from "react";
import Image from "next/image";
import assets from "@/assets/assets";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden min-h-[380px] xs:min-h-[420px] sm:min-h-[480px] md:min-h-[520px]"
    >
      <div className="absolute inset-0">
        <Image
          src={assets.process_bottom}
          alt="Office meeting"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(25,71,142,0.75), rgba(25,71,142,0.75))",
          }}
        />
      </div>
      <div
        className="relative z-10 w-full text-center"
        style={{
          paddingTop: "70px",
          paddingBottom: "70px",
        }}
      >
        <h1
          className="font-[var(--font-plus-jakarta)] font-bold text-white"
          style={{
            fontSize: "48px",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Our <span className="text-[var(--accent)]">Recruiting Process</span>
        </h1>
        <p
          className="font-[var(--font-plus-jakarta)] text-[#E5ECF6]"
          style={{
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          A Clear, Proven Approach to Hiring
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
