import AboutJobRequestSection from "./AboutJobRequestSection";
import MissionServicesSection from "./MissionServicesSection";
import SpecializeSection from "./SpecializeSection";
import styles from "./AboutHero.module.css";

export const metadata = {
  title: "About Us | Complete Staffing Solutions",
  description:
    "Learn about Complete Staffing Solutions - connecting businesses with the best talent.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* About hero - Bg */}
      <div className={styles.bg}>
        <h1 className={styles.heroTitle}>About</h1>
      </div>
      {/* Mission & Services section */}
      <MissionServicesSection />
      {/* Specialize section */}
      <SpecializeSection />
      {/* Job Request section (copy for About page) */}
      <AboutJobRequestSection />
    </main>
  );
}
