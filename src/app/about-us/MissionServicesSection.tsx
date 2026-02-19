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
      "At Complete Staffing Solutions, we believe placement is more than a transaction — it’s the beginning of a partnership.Each candidate is thoroughly screened through in-depth interviews and reference verification to ensure alignment not only in skills, but in values and culture. We are committed to supporting both our clients and our candidates with responsiveness, transparency, and a level of service that reflects genuine care.Your goals guide our work, and your success defines ours."
      ,
    icon: `${ASSETS}/our services commitmnet to you icon.svg`,
    image: `${ASSETS}/our service placeholder.jpg`,
  },
  {
    title: "Overview",
    description:
      "Complete Staffing Solutions is a premier finance, accounting & administrative staffing firm that has been in business for over 25 years. We have the resources, experience and expertise required to coordinate the ideal match between hiring organization and candidate. We have a dedicated permanent placement team that focuses on Finance, Accounting, and Healthcare roles across a multitude of industries. Our temporary staffing consultants offer a wide array of industry knowledge that ranges from accounting/finance to healthcare/administrative and beyond. Here at Complete Staffing, we are confident that our team of committed professionals will provide your company with top-tier talent and be a proven resource to contribute to the immediate and long-term success of your business.",
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
