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
          <h2 className={styles.title}>Welcome to Consumer Goods Staffing</h2>
          <p className={styles.description}>
Identifying top talent for product development, marketing, and distribution to keep you ahead of consumer trends.                  </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span>Agility and Innovation
              </span>
            </div>
          
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span>Customer-centric professionals 
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span>Supply chain expertise</span>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/industries/cards/consumer goods.jpg"
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