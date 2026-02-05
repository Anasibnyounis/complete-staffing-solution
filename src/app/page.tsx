import { Hero, HeroTagline } from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import JobRequestSection from "@/components/JobRequestSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <HeroTagline />
      <WhyChooseUs />
      <Industries />
      <JobRequestSection />
    </main>
  );
}
