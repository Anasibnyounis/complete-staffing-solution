import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Legal.module.css";
export const metadata = {
    title: "Legal Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function LegalPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/legal-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        LEGAL
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>





                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
Complete Staffing Solutions understands the complex and demanding nature of the legal industry and is committed to providing our clients with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in law firms, corporate legal departments, government agencies, or nonprofit organizations, we work closely with them to identify and secure top legal talent that aligns with their practice areas and business objectives. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in law, paralegal studies, legal administration, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and integrity necessary to drive success in the legal profession.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
We recognize the importance of legal expertise, ethics, and professionalism in the practice of law and strive to connect our clients with candidates who embody these values. Whether our clients require temporary staff for a specific case or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their legal operations and initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we are proud to partner with clients in the legal industry and support their efforts to uphold justice, protect rights, and navigate complex legal matters. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for law firms, legal departments, and legal organizations seeking to build high-performing teams and achieve their legal objectives.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}