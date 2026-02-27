import JobRequestSection from "@/components/JobRequestSection";
import OurSolutionsHero from "./OurSolutionsHero";
import OurSolutionsWelcome from "./OurSolutionsWelcome";
import SolutionsCategories from "./SolutionsCategories";

export default function OurSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <OurSolutionsHero />
      <OurSolutionsWelcome />
      <SolutionsCategories />
      <JobRequestSection />
    </main>
  );
}
