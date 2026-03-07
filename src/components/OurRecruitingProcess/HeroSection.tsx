"use client";

import React from "react";
import Image from "next/image";
import assets from "@/assets/assets";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: "260px" }}
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
            background: "linear-gradient(rgba(39,84,150,0.75), rgba(39,84,150,0.75))",
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
          className="font-[var(--font-plus-jakarta)] font-bold text-white uppercase tracking-[2px]"
          style={{
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          Our Recruiting Process
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
