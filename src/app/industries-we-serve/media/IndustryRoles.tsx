import Link from "next/link";
import Image from "next/image";
import styles from "./IndustryRoles.module.css";

const ROLES = [
  { icon: "📱", title: "Social Media Manager", description: "Developing content strategies to build brand presence and community engagement online.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries/media/social.jpg" },
  { icon: "📢", title: "PR Specialist", description: "Managing public image and maintaining relationships with media outlets and stakeholders.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/media/pr.jpg" },
  { icon: "📰", title: "Journalist", description: "Researching, writing, and reporting news stories across digital and print media.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/media/journalist.jpg" },
  { icon: "🎙️", title: "Broadcaster", description: "Presenting news or entertainment content to audiences via radio, TV, or podcasts.", buttonText: "Learn More", buttonColor: "blue", image: "/industries/media/broadcaster.jpg" }
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