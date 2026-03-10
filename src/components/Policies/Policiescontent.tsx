"use client";
import { useEffect } from "react";
import styles from "./Policies.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function PoliciesContent() {
  useEffect(() => {
    const embeds = [
      {
        id: "VldKS1pGaHpObmMyWVdkaWVFRTlQUT09",
        src: "https://policies.termageddon.com/api/embed/VldKS1pGaHpObmMyWVdkaWVFRTlQUT09.js",
      },
      {
        id: "VEhoS1RVUlFhVGhKYWt4M2FtYzlQUT09",
        src: "https://policies.termageddon.com/api/embed/VEhoS1RVUlFhVGhKYWt4M2FtYzlQUT09.js",
      },
    ];

    embeds.forEach(({ id, src }) => {
      if (document.querySelector(`script[data-termageddon-id="${id}"]`)) {
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-termageddon-id", id);
      document.body.appendChild(script);
    });
  }, []);

  return (
    <div className={`${styles.content} ${jakarta.variable} ${inter.variable}`}>
      <section id="privacy-policy" className={styles.section}>
        <h2 className={styles.sectionTitle}>Privacy Policy</h2>
        <p className={styles.text}>
          The Privacy Policy below is provided and automatically kept up to date by our partner Termageddon.
        </p>

        <div className={styles.embedWrapper}>
          <div
            id="VldKS1pGaHpObmMyWVdkaWVFRTlQUT09"
            className="policy_embed_div"
          >
            Please wait while the policy is loaded. If it does not load, please{" "}
            <a
              rel="nofollow noopener noreferrer"
              href="https://policies.termageddon.com/api/policy/VldKS1pGaHpObmMyWVdkaWVFRTlQUT09"
              target="_blank"
            >
              click here
            </a>{" "}
            to view the policy.
          </div>
        </div>
      </section>

      <section id="cookie-policy" className={styles.section}>
        <h2 className={styles.sectionTitle}>Cookie Policy</h2>
        <p className={styles.text}>
          Our Cookie Policy, also managed by Termageddon, explains how we use cookies and similar technologies on this website.
        </p>

        <div className={styles.embedWrapper}>
          <div
            id="VEhoS1RVUlFhVGhKYWt4M2FtYzlQUT09"
            className="policy_embed_div"
          >
            Please wait while the policy is loaded. If it does not load, please{" "}
            <a
              rel="nofollow noopener noreferrer"
              href="https://policies.termageddon.com/api/policy/VEhoS1RVUlFhVGhKYWt4M2FtYzlQUT09"
              target="_blank"
            >
              click here
            </a>{" "}
            to view the policy.
          </div>
        </div>
      </section>

      <section id="additional-disclosures" className={styles.section}>
        <h2 className={styles.sectionTitle}>Additional Disclosures & Compliance</h2>
        <p className={styles.text}>
          Additional disclosures, notices, or jurisdiction-specific requirements may be added here as needed.
          If you receive more Termageddon embed codes (for example, Terms of Service or Disclaimer),
          they can be included in this section to keep all compliance information maintained in one place.
        </p>
      </section>
    </div>
  );
}