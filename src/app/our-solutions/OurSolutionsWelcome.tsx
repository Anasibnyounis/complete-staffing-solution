import Image from "next/image";
import styles from "../industries-we-serve/healthcare/IndustryWelcome.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700"], variable: "--font-jakarta" });

export default function OurSolutionsWelcome() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Welcome to Our Solutions</h2>
          <p className={styles.description}>
          Comprehensive staffing solutions tailored to your industry needs, connecting top talent with leading organizations across multiple sectors.
                  </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span>Industry Expertise
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span>Custom Staffing Solutions
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span>  Quality Talent Matching
</span>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/industries detail pages/our-solutions-hero.jpg"
            alt="Our Solutions"
            fill
            className={styles.image}
            // sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
