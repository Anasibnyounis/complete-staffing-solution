import IndustriesHero from "./IndustriesHero";
import IndustriesBrowseSection from "./IndustriesBrowseSection";

export const metadata = {
  title: "Industries We Serve | Complete Staffing Solutions",
  description:
    "Staffing by industry, specialists by discipline. Our recruiters specialize in the fields they hire for—qualified candidates, better fit.",
};

export default function IndustriesWeServePage() {
  return (
    <main className="min-h-screen bg-white">
      <IndustriesHero />
      <IndustriesBrowseSection />
    </main>
  );
}
