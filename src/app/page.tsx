import { Hero, HeroTagline } from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Industries from "@/components/Industries";
import JobRequestSection from "@/components/JobRequestSection";
// import IndustryWelcome from "@/app/industries-we-serve/healthcare/IndustryWelcome";
// import FinancialServicesWelcome from "@/app/industries-we-serve/financial-services/IndustryWelcome";
// import RealEstateWelcome from "@/app/industries-we-serve/real-estate/IndustryWelcome";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <HeroTagline />
      <WhyChooseUs />
      <Industries />
      {/* <IndustryWelcome /> */}
      {/* <FinancialServicesWelcome /> */}
      {/* <RealEstateWelcome /> */}
      <JobRequestSection />
    </main>
  );
}
