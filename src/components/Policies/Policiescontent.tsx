"use client";
import styles from "./Policies.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import TermageddonPolicyEmbed from "./TermageddonPolicyEmbed";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function PoliciesContent() {
  return (
    <div className={`${styles.content} ${jakarta.variable} ${inter.variable}`}>
      <section id="privacy-policy" className={styles.section}>
        <h2 className={styles.sectionTitle}>Privacy Policy</h2>
        <p className={styles.text}>
          Our Privacy Policy is generated and kept up to date by Termageddon.
        </p>
        <TermageddonPolicyEmbed
          policyId="VldKS1pGaHpObmMyWVdkaWVFRTlQUT09"
        />
      </section>

      <section id="cookie-policy" className={styles.section}>
        <h2 className={styles.sectionTitle}>Cookie Policy</h2>
        <p className={styles.text}>
          Our Cookie Policy is also managed by Termageddon and details how we
          use cookies and similar technologies.
        </p>
        <TermageddonPolicyEmbed
          policyId="VEhoS1RVUlFhVGhKYWt4M2FtYzlQUT09"
        />
      </section>
    </div>
  );
}
