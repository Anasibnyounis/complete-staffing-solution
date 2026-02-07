import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Healthcare.module.css";
export const metadata = {
    title: "Arts Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function HealthcarePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/healthcare-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        HEALTHCARE
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>



                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
                        Complete Staffing Solutions understands the critical role that healthcare professionals play in ensuring the well-being of communities and is committed to providing our clients in the healthcare industry with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in hospitals, clinics, long-term care facilities, or medical research organizations, we work closely with them to identify and secure top talent that aligns with their mission and values. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in nursing, medicine, allied health, healthcare administration, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and compassion necessary to drive success in the healthcare sector.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
                        We recognize the importance of patient care, safety, and compliance in healthcare and strive to connect our clients with candidates who embody these values. Whether our clients require temporary staff for a specific shift or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their healthcare operations and initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
                        At Complete Staffing Solutions, we are proud to partner with clients in the healthcare industry and support their efforts to provide quality care and improve health outcomes for patients. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for healthcare organizations seeking to build high-performing teams and achieve their patient care goals.
                        Connecting businesses with t          </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}