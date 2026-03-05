"use client";

import Image from "next/image";

export default function OurSolutionsWelcome() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#eef3ff] via-[#f9fbff] to-[#e7f0ff] py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-[#c2d4ff] opacity-30 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#b9e6ff] opacity-30 blur-3xl" />
      </div>
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <span className="inline-flex items-center rounded-full bg-white/80 border border-[#d6e2f5] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#4A7BAD] w-max">
              Tailored hiring solutions
            </span>
            <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(28px,4vw,36px)] font-bold text-[#022d6d] m-0 leading-tight">
              Welcome to Our Solutions
            </h2>
            <p className="text-base leading-relaxed text-[#4b5563] m-0">
              Our solutions are structured into four key service areas designed
              to meet diverse hiring and talent acquisition needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {["Retained", "Executive Search", "Contract", "Direct-Hire"].map(
                (label) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 rounded-xl bg-white/90 border border-[#d6e2f5] shadow-sm px-4 py-3 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#19478e] text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7496c7]">
                        Service Area
                      </span>
                      <span className="text-base text-[#1f2933] font-semibold">
                        {label}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative w-full aspect-[1.2/1] max-w-[600px] md:max-w-none mx-auto md:mx-0 order-1 md:order-2 overflow-hidden rounded-lg shadow-lg border border-white/60">
            <Image
              src="/about us/mission statement placeholder.jpg"
              alt="Our Solutions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
