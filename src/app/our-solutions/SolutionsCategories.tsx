import styles from "./SolutionsCategories.module.css";

export default function SolutionsCategories() {
  return (
    <div className={styles.container}>
      {/* Executive Search Section - Top */}
      <section className={styles.solutionSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Executive Search</h2>
        </div>
        <div className={styles.horizontalCard}>
          <div className={styles.cardContent}>
            <div className={styles.detailSection}>
              <h4 className={styles.detailSubtitle}>Our Focus</h4>
              <p className={styles.detailText}>
                We collaborate with trusted, high-impact consumer brands to drive meaningful growth and transformation.
              </p>
            </div>
            <div className={styles.detailSection}>
              <h4 className={styles.detailSubtitle}>Executive Search</h4>
              <p className={styles.detailText}>
                We're not just search professionals — we're seasoned operators who've led teams, delivered complex projects, and built businesses ourselves. We bring that experience to every search, delivering leaders who are both capable and culturally aligned.
              </p>
            </div>
            <div className={styles.detailSection}>
              <h4 className={styles.detailSubtitle}>Reach</h4>
              <p className={styles.detailText}>
                We have access to contacts across North America, EU, and APEC.
              </p>
            </div>
            <div className={styles.detailSection}>
              <h4 className={styles.detailSubtitle}>Our Edge</h4>
              <p className={styles.detailText}>
                Our approach is flexible, agile, and built to solve real business challenges — even those that extend beyond traditional executive search. When clients need results, we find a way to deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retained Section */}
      {/* <section className={styles.solutionSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Retained</h2>
        </div>
        <div className={styles.horizontalCard}>
          <div className={styles.cardContent}>
            <p className={styles.cardDescription}></p>
          </div>
        </div>
      </section> */}

      {/* Contract Section */}
      {/* <section className={styles.solutionSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Contract</h2>
        </div>
        <div className={styles.horizontalCard}>
          <div className={styles.cardContent}>
            <p className={styles.cardDescription}></p>
          </div>
        </div>
      </section> */}

      {/* Direct-Hire Section */}
      {/* <section className={styles.solutionSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Direct-Hire</h2>
        </div>
        <div className={styles.horizontalCard}>
          <div className={styles.cardContent}>
            <p className={styles.cardDescription}></p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
