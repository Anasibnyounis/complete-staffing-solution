import Link from "next/link";
import Image from "next/image";
import styles from "./IndustryRoles.module.css";


const ROLES = [
  { icon: "⚖️", title: "Legal Counsel", description: "Providing expert legal advice and representing organizational interests in legal proceedings.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries/legal/counsel.jpg" },
  { icon: "📜", title: "Paralegal", description: "Supporting attorneys through legal research, document drafting, and trial preparation.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/legal/paralegal.jpg" },
  { icon: "💼", title: "Legal Administrator", description: "Managing the operations, staff, and finances of law firms or legal departments.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/legal/admin.jpg" },
  { icon: "🏛️", title: "Case Manager", description: "Coordinating legal files and ensuring all administrative steps in a case are completed timely.", buttonText: "Learn More", buttonColor: "blue", image: "/industries/legal/case-manager.jpg" }
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