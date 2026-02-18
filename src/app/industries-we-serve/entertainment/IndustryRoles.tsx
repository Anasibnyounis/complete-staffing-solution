import Link from "next/link";
import Image from "next/image";
import styles from "./IndustryRoles.module.css";


const ROLES = [
  { icon: "🎬", title: "Production Coordinator", description: "Managing the logistics and schedules for film, television, or theater productions.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries/entertainment/prod.jpg" },
  { icon: "🎭", title: "Talent Manager", description: "Representing and guiding the careers of artists, actors, and performers.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/entertainment/talent.jpg" },
  { icon: "🎟️", title: "Event Specialist", description: "Planning and executing large-scale live events, concerts, and festivals.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/entertainment/event.jpg" },
  { icon: "🎮", title: "Game Developer", description: "Designing and coding interactive experiences for the global gaming audience.", buttonText: "Learn More", buttonColor: "blue", image: "/industries/entertainment/game.jpg" }
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