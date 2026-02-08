"use client";
import { useEffect, useRef } from "react";
import styles from "./WhyChooseUs.module.css";

export default function BlueSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add(styles.active);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.blueSection} ${styles.reveal}`}>
      <div className={styles.container}>

        <div className={`${styles.blueBlock} ${styles.reveal} ${styles.revealUp}`}>
          <h2 className={styles.subTitle}>WHY USE A STAFFING FIRM.</h2>
          <p className={styles.text}>
            By utilizing temporary staffing instead of making direct hires, all costs associated with the processing and administering of payroll and benefits are transferred from your company to the staffing agency. This can help you control cost, improve production, and manage risk. Unlike short term direct hire employees, temporary personnel work for the staffing agency – not you. As a result, their unemployment claims don't affect your bottom line. In addition, overtime and benefits are costs that can be eliminated by using a staffing agency. On average, benefits can cost 20-25 percent in excess of payroll expenses.
          </p>
        </div>

        <div className={`${styles.blueBlock} ${styles.reveal} ${styles.revealUp} ${styles.delay2}`}>
          <h3 className={styles.smallTitle}>We save you valuable time...</h3>
          <p className={styles.text}>
            At Complete Staffing we have thousands of qualified candidates lined up and ready to go to work. We have one of the largest candidate databases in New England. Additionally, our recruiters specialize in the fields for which they recruit, giving you the ability to focus on core competencies while we do the sourcing and interviewing, saving you valuable time.
          </p>

          <ul className={styles.blueList}>
            {["Save time", "Save money", "Save energy", "No commitment", "Improve productivity", "Try before you buy", "Decrease costs", "Avoid unemployment claims", "Increase flexibility", "Streamline hiring"].map((item, idx) => (
              <li 
                key={idx} 
                className={`${styles.reveal} ${styles.revealUp}`}
                style={{ transitionDelay: `${0.6 + (idx * 0.05)}s` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}