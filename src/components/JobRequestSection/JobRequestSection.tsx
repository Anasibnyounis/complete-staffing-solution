"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function JobRequestSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full flex items-center justify-center overflow-hidden min-h-[280px] py-8 px-5 md:min-h-[320px] md:py-10 md:px-6 lg:h-[390px] lg:min-h-[390px] lg:py-0 2xl:min-h-[420px] bg-cover bg-center bg-no-repeat ${isVisible ? "active" : ""}`}
      style={{ backgroundImage: "url('/homepage/job%20request.png')" }}
    >
      <div
        className="absolute inset-0 bg-[#19478e] opacity-45 pointer-events-none"
        aria-hidden
      />
      <div
        className={`relative z-10 flex flex-col items-center justify-center gap-6 text-center px-6 opacity-0 translate-y-10 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <h2 className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(22px,4vw,42px)] leading-snug text-white m-0 max-w-[700px]">
          Connecting businesses with the
          <br />
          best talent is our passion.
        </h2>
        <Link
          href="/job-request"
          className="inline-flex items-center justify-center h-[50px] px-7 rounded bg-[#6ca642] text-lg font-semibold font-[var(--font-inter)] text-white no-underline transition-opacity hover:opacity-90 w-full max-w-[280px] md:max-w-none md:w-auto"
        >
          Place a Job Request
        </Link>
      </div>
    </section>
  );
}
