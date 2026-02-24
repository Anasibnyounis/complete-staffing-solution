import Image from "next/image";
import styles from "./MissionServicesSection.module.css";

const ASSETS = "/about%20us";

const items = [
  {
    title: "Mission Statement",
    description:
    "Complete Staffing Solutions connects exceptional talent with organizations that demand results. We believe great companies are built by great people. We deliver staffing solutions that fuel growth, productivity and long-term success."      
      
      
      ,
    icon: `${ASSETS}/mission statement icon.svg`,
    image: `${ASSETS}/mission statement placeholder.jpg`,
  },
  {
    title: "Our Service Commitment",
    description:
      "At Complete Staffing Solutions, our staffing services are built on long-term workforce partnerships, not one-time transactions. We approach every talent placement as the foundation of a strategic relationship, delivering recruitment solutions that prioritize quality, consistency, and organizational fit. Our comprehensive recruitment process includes in-depth candidate interviews, skills assessments, and professional reference verification to ensure alignment in technical expertise, experience, values, and company culture. Through rigorous candidate screening and personalized matching, we support successful placements across finance, accounting, healthcare, and administrative roles. We are committed to responsive communication, transparent hiring practices, and dedicated client and candidate support. By aligning our staffing solutions with your business goals, we help drive sustainable growth and long-term success."
      ,
    icon: `${ASSETS}/our services commitmnet to you icon.svg`,
    image: `${ASSETS}/our service placeholder.jpg`,
  },
  {
    title: "Overview",
    description:
      "For over 25 years, Complete Staffing Solutions has delivered professional staffing and recruitment services for organizations seeking top talent in finance and accounting, healthcare, and administrative support. As an experienced staffing agency, we partner with businesses across multiple industries, connecting highly qualified professionals with companies ranging from growing startups to established enterprises. Our specialized recruitment teams focus on permanent placement, direct hire, and temporary staffing solutions, providing strategic workforce solutions tailored to each client’s hiring needs. Through rigorous candidate screening, industry expertise, and a deep understanding of organizational culture, we ensure precise talent acquisition and long-term placement success. By combining responsiveness, data-driven recruiting methods, and a consultative approach, we help organizations build high-performing teams that meet today’s operational demands while supporting future growth.",
    icon: `${ASSETS}/overview icon.svg`,
    image: `${ASSETS}/overview placeholder.jpg`,
  },
];

export default function MissionServicesSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="mission-services-heading"
    >
      {items.map((item) => (
        <article key={item.title} className={styles.card}>
          <div className={styles.textBlock}>
            <div className={styles.textContent}>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
            <div className={styles.cardIconWrap}>
              <Image
                src={item.icon.replace(/ /g, "%20")}
                alt=""
                width={56}
                height={56}
                className={styles.cardIcon}
                unoptimized
              />
            </div>
          </div>
          <Image
            src={item.image.replace(/ /g, "%20")}
            alt=""
            width={616}
            height={400}
            className={styles.cardImage}
            unoptimized
          />
        </article>
      ))}
    </section>
  );
}
