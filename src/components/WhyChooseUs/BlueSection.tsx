import styles from "./WhyChooseUs.module.css";

export default function BlueSection() {
  return (
    <section className={styles.blueSection}>
      <div className={styles.container}>

        {/* Top Section */}
        <div className={styles.blueBlock}>
          <h2 className={styles.subTitle}>
            WHY USE A STAFFING FIRM.
          </h2>

          <p className={styles.text}>
            By utilizing temporary staffing instead of making direct hires, all costs associated with the processing and administering of payroll and benefits are transferred from your company to the staffing agency. This can help you control cost, improve production, and manage risk. Unlike short term direct hire employees, temporary personnel work for the staffing agency – not you. As a result, their unemployment claims don't affect your bottom line. In addition, overtime and benefits are costs that can be eliminated by using a staffing agency. On average, benefits can cost 20-25 percent in excess of payroll expenses.
          </p>
        </div>

        {/* Bottom Section */}
        <div className={styles.blueBlock}>
          <h3 className={styles.smallTitle}>
            We save you valuable time...
          </h3>

          <p className={styles.text}>
            At Complete Staffing we have thousands of qualified candidates lined up and ready to go to work. We have one of the largest candidate databases in New England. Additionally, our recruiters specialize in the fields for which they recruit, giving you the ability to focus on core competencies while we do the sourcing and interviewing, saving you valuable time.
          </p>

          {/* Bullet Points */}
          <ul className={styles.blueList}>
            <li>Save time</li>
            <li>Save money</li>
            <li>Save energy</li>
            <li>No commitment</li>
            <li>Improve productivity</li>
            <li>Try before you buy</li>
            <li>Decrease costs</li>
            <li>Avoid unemployment claims</li>
            <li>Increase flexibility</li>
            <li>Streamline hiring</li>
          </ul>
        </div>

      </div>
    </section>
  );
}