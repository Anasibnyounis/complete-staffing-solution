import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Energy.module.css";
export const metadata = {
    title: "Energy Staffing Solutions | Complete Staffing Solutions",
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
                        backgroundImage: "url('/industries detail pages/energy-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        ENERGY & MINING
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>





                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
Complete Staffing Solutions is dedicated to supporting clients in the energy industry by providing tailored recruitment solutions to meet their unique staffing needs. From renewable energy and utilities to oil and gas, we understand the diverse range of roles within the energy sector and work closely with our clients to identify and secure top talent. With a deep understanding of energy technologies, regulations, and market dynamics, we strive to connect our clients with candidates who possess the skills, experience, and innovation necessary to drive success in this critical industry.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
Our team of experienced recruiters specializes in sourcing candidates with backgrounds in engineering, project management, environmental science, and more. We recognize the importance of sustainability, safety, and efficiency in the energy industry and strive to connect our clients with candidates who embody these values. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is committed to delivering recruitment solutions that meet their unique needs and contribute to the success of their energy projects and initiatives.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we understand the critical role that talent plays in driving success in the energy industry. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for energy companies seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}