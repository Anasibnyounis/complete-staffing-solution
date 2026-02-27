"use client";

import Link from "next/link";

export default function IndustryDetailPageHero() {
  return (
    <section className="relative w-full min-h-[350px] sm:min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
      {/* Background image full width */}
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/industries detail pages/healthcare-hero.jpg')",
        }}
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex items-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-16">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col">
          <h1 className="font-[var(--font-plus-jakarta)] text-white font-bold m-0 mb-5 text-[clamp(32px,4.4vw,50px)] leading-tight max-w-[600px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            Healthcare Staffing Solutions
          </h1>
          <p className="text-white text-[clamp(16px,2vw,20px)] leading-relaxed m-0 mb-8 max-w-[550px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            Enhancing patient care with compassionate and skilled healthcare
            professionals.
          </p>
          <Link
            href="/job-request"
            className="inline-block rounded bg-[#6CA642] px-5 py-3 text-[20px] font-semibold text-white no-underline transition-all duration-300 hover:bg-[#5d9338] hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto max-w-[280px] sm:max-w-none text-center"
          >
            place job request
          </Link>
        </div>
      </div>
    </section>
  );
}