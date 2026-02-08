import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Construction.module.css";
export const metadata = {
    title: "Construction Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function ConstructionPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/construction-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        CONSTRUCTION
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>




                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
                        In the construction industry, Complete Staffing Solutions understands the critical importance of skilled labor and effective project management in driving success. That’s why we are committed to providing our clients with tailored recruitment solutions that address their unique staffing needs and support their projects’ timely completion and quality execution. From construction managers to skilled tradespeople, we work closely with our clients to identify and secure top talent that aligns with their project requirements and organizational culture.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
                        Our team of experienced recruiters specializes in sourcing candidates with backgrounds in construction management, civil engineering, architecture, electrical work, plumbing, and more. We understand the importance of safety, reliability, and attention to detail in the construction industry, and we strive to connect our clients with candidates who possess these qualities. Whether our clients require temporary labor for a specific project or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their construction projects.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
                        At Complete Staffing Solutions, we are proud to partner with clients in the construction industry to address their staffing needs and support their growth and success. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for construction companies seeking to build high-performing teams and deliver exceptional results.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}