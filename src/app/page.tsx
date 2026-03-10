import { Hero, HeroTagline } from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LandingVideoSection from "@/components/LandingVideoSection/LandingVideoSection";
import JobRequestSection from "@/components/JobRequestSection";

const VIDEO_SYNOPSIS =
  "In this video we share how Complete Staffing Solutions partners with businesses to find the right talent—from understanding your needs and culture to delivering qualified candidates who are ready to contribute from day one.";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhyChooseUs />
      <section className="w-full bg-neutral-50 border-y border-neutral-100">
        <div className="w-full max-w-[720px] mx-auto px-4 sm:px-6 py-8 sm:py-10 text-center">
          <p className="font-[var(--font-inter)] text-neutral-700 text-base sm:text-lg leading-relaxed">
            {VIDEO_SYNOPSIS}
          </p>
        </div>
      </section>
      <LandingVideoSection />
      <JobRequestSection />
    </main>
  );
}
