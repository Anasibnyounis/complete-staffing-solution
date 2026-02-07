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

export default function PoliciesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>POLICIES AND DISCLOSURES</h1>
        <p className={styles.heroDate}>Last updated: Oct 17, 2025 10:47 AM</p>
        <p className={styles.heroText}>
We value your privacy very highly. Please read this Privacy Policy carefully before using the completestaffingsolutions.com website (the “Website”) operated by Complete Staffing Solutions, a(n) Corporation formed in Massachusetts, United States (“us, we, our”) as this Privacy Policy contains important information regarding your privacy and how we may use the information we collect about you.       
 </p>
   <p className={styles.heroText}>
Your access to or use of the Website is conditional upon your acceptance of and compliance with this Privacy Policy. This Privacy Policy applies to everyone, including but not limited to visitors, users and others, who wish to access or use the Website. </p>
   <p className={styles.heroText}>
By accessing or using the Website, you agree to be bound by this Privacy Policy. If you disagree with any part of this Privacy Policy, you do not have our permission to access or use the Website. </p>
      </div>
    </section>
  );
}