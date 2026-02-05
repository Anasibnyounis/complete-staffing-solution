import Image from "next/image";
import styles from "./MissionServicesSection.module.css";

const ASSETS = "/about%20us";

const items = [
  {
    title: "Mission Statement",
    description:
      "The mission of Complete Staffing Solutions is to provide our clients with access to the best and brightest talent available. We offer comprehensive solutions that will increase productivity and empower our clients and their employees to achieve their goals and experience the highest level of success possible. Our specialists focus on permanent and consulting services where our proven experience is unmatched in the marketplace.",
    icon: `${ASSETS}/mission statement icon.svg`,
    image: `${ASSETS}/mission statement placeholder.jpg`,
  },
  {
    title: "Our Service Commitment to You",
    description:
      "Every candidate represented by Complete Staffing Solutions is thoroughly interviewed in person and evaluated (including reference checks) before joining your team. Our thorough interview process ensures that a candidate's skills, experience and personality are well matched to each job and to the culture of the hiring organization. The success of our clients and our candidates is supremely important to us, and Complete Staffing has an unparalleled customer service approach that has proven to be an integral part of our success. We promise to make your staffing needs our number one priority.",
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
