import AboutJobRequestSection from "./AboutJobRequestSection";
import MissionServicesSection from "./MissionServicesSection";
import SpecializeSection from "./SpecializeSection";

export const metadata = {
  title: "About Us | Complete Staffing Solutions",
  description:
    "Learn about Complete Staffing Solutions - connecting businesses with the best talent.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* About hero - full width bar, title centered */}
      <div className="w-full flex items-center justify-center h-24 sm:h-[120px] md:h-[158px] bg-[#225eb9] px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="m-0 font-[var(--font-plus-jakarta)] font-bold text-[clamp(24px,5vw,48px)] text-white uppercase tracking-wide">
          About
        </h1>
      </div>
      <MissionServicesSection />
      <SpecializeSection />
      <AboutJobRequestSection />
    </main>
  );
}
