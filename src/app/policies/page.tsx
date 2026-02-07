import PoliciesHero from "@/components/Policies/Policieshero";
import PoliciesSidebar from "@/components/Policies/Policiessidebar";
import PoliciesContent from "@/components/Policies/Policiescontent";
import styles from "./Policies.module.css";
export const metadata = {
  title: "Policies and Disclosures | Complete Staffing Solutions",
  description: "Read our privacy policies, terms of service, and important disclosures.",
};

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PoliciesHero />
      
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <PoliciesSidebar />
            <PoliciesContent />
          </div>
        </div>
      </div>
    </main>
  );
}