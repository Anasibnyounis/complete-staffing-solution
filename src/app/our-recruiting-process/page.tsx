import JobRequestSection from "@/components/JobRequestSection";
import HeroSection from "@/components/OurRecruitingProcess/Herosection ";
import ProcessSteps from "@/components/OurRecruitingProcess/Processsteps";

export const metadata = {
  title: "Our Recruiting Process | Complete Staffing Solutions",
  description:
    "Learn how Complete Staffing Solutions finds the right talent. Our fast, transparent, human-focused recruiting process connects people with the right opportunities.",
};

export default function OurRecruitingProcess() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProcessSteps />
      <JobRequestSection />
    </main>
  );
}
