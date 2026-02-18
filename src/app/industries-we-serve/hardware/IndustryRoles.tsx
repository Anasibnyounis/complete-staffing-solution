import Link from "next/link";
import Image from "next/image";
import styles from "./IndustryRoles.module.css";


const ROLES = [
  { icon: "🖥️", title: "Network Administrator", description: "Managing and maintaining organizational networks to ensure maximum connectivity.", buttonText: "Explore Roles", buttonColor: "blue", 
    image: "/industries detail pages/cards/hardware cards/1.jpg"
  },
  { icon: "🛠️", title: "Systems Engineer", description: "Designing and installing complex hardware systems and computing infrastructures.", buttonText: "Explore Roles", buttonColor: "green", 
    image: "/industries detail pages/cards/hardware cards/2.jpg"
   },
  { icon: "🛡️", title: "Cybersecurity Expert", description: "Protecting physical and digital assets through advanced network security protocols.", buttonText: "Explore Roles", buttonColor: "green",
    image: "/industries detail pages/cards/hardware cards/3.jpg"
    },
  { icon: "📟", title: "Hardware Engineer", description: "Testing and optimizing computer components for high-performance computing.", buttonText: "Learn More", buttonColor: "blue", 
    image: "/industries detail pages/cards/hardware cards/4.jpg"
   }
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