import Image from "next/image";
import styles from "./IndustryWelcome.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700"], variable: "--font-jakarta" });

export default function IndustryWelcome() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Welcome to Entertainment Staffing</h2>
          <p className={styles.description}>
Supporting film, music, gaming, and theater with professionals who embody creativity and adaptability.                  </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span>Creative Vision Alignment

              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span> Fast-paced Adaptability

              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span> Talent Management
 </span>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/industries/cards/media.jpg"
            alt=" workers"
            fill
            className={styles.image}
            // sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}