import React from 'react';
import styles from './Departmentshero.module.css';
const DepartmentsHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>POSITIONS WE RECRUIT ACROSS INDUSTRIES</h1>
        <p className={styles.subtitle}>
          If our many facets to executive roles — connect with talent to fill the goal- fast, efficiently.
        </p>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary}>Meet Our Request</button>
          <button className={styles.btnSecondary}>Talk To Recruiter</button>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsHero;