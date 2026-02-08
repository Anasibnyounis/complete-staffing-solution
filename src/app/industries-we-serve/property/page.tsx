import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Property.module.css";
export const metadata = {
    title: "Property Management Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function PropertyPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/property-management-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        PROPERTY MANAGEMENT
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>










                    <p className={styles.contentParagraph}>
Complete Staffing Solutions in the property management industry encompass not only defining roles and responsibilities within a property but also developing a strategic approach to staffing and recruitment. A robust staffing plan involves analyzing property requirements, such as size, type, and location, to determine staffing needs. This includes creating detailed job descriptions that clearly outline roles, responsibilities, and qualifications required for each position.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
Recruitment strategies are crucial in attracting top talent. These strategies may involve advertising job openings through various channels, attending industry-specific events and job fairs, and utilizing online platforms to reach a diverse pool of candidates. The recruitment process includes screening resumes, conducting interviews, and performing background and reference checks to ensure candidates meet the property’s standards.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
Retention is also a key focus in Complete Staffing Solutions. High turnover can be costly and disruptive. Therefore, it’s essential to offer competitive salaries and benefits, provide opportunities for professional development and career advancement, and create a positive work environment. Recognizing and rewarding employees for their contributions can enhance morale and job satisfaction, leading to higher retention rates and a more stable workforce.
                    </p>
<p className={styles.contentParagraph}>
    In summary, a comprehensive approach to staffing and recruitment is essential for ensuring that properties are adequately staffed with qualified personnel. This, in turn, leads to effective property management, tenant satisfaction, profitability, and compliance with regulations.
</p>
                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}