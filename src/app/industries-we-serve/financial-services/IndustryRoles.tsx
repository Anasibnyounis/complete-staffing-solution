import Link from "next/link";
import Image from "next/image";
import styles from "./IndustryRoles.module.css";
const ROLES = [
  { icon: "💼", title: "Wealth Manager", description: "Managing investment portfolios and providing strategic financial advice to high-net-worth clients.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries/finance/wealth.jpg" },
  { icon: "🛡️", title: "Compliance Officer", description: "Ensuring all banking and investment activities strictly adhere to legal standards and internal policies.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/finance/compliance.jpg" },
  { icon: "📊", title: "Investment Analyst", description: "Researching financial trends and evaluating investment opportunities to drive organizational growth.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/finance/analyst.jpg" },
  { icon: "🏦", title: "Portfolio Coordinator", description: "Supporting the management of diverse asset classes and ensuring smooth daily operational reporting.", buttonText: "Learn More", buttonColor: "blue", image: "/industries/finance/portfolio.jpg" }
];

export default function IndustryRoles() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Roles We Fill</h2>

        <div className={styles.rolesGrid}>
          {ROLES.map((role, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                />
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.iconTitle}>
                  <div className={`${styles.iconCircle} ${styles[role.buttonColor]}`}>
                    <span className={styles.icon}>{role.icon}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{role.title}</h3>
                </div>
                
                <p className={styles.cardDescription}>{role.description}</p>
                
                <Link 
                  href="/job-request" 
                  className={`${styles.button} ${styles[role.buttonColor]}`}
                >
                  {role.buttonText}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}