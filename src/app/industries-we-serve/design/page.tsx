import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Design.module.css";
export const metadata = {
    title: "Design Staffing Solutions | Complete Staffing Solutions",
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
                        backgroundImage: "url('/industries detail pages/design-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        DESIGN
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>




 
                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
Complete Staffing Solutions is committed to supporting clients in the design industry by providing tailored recruitment solutions to meet their unique staffing needs. From graphic design and industrial design to interior design and fashion design, we understand the diverse range of roles within the design sector and work closely with our clients to identify and secure top talent. With a deep understanding of design principles, trends, and technologies, we strive to connect our clients with candidates who possess the skills, experience, and creativity necessary to drive success in this dynamic field.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
Our team of experienced recruiters specializes in sourcing candidates with backgrounds in graphic design, product design, UX/UI design, architecture, and more. We recognize the importance of innovation, collaboration, and attention to detail in the design industry, and we strive to connect our clients with candidates who embody these values. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is committed to delivering recruitment solutions that meet their unique needs and contribute to the success of their design projects and initiatives.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we understand the critical role that talent plays in driving success in the design industry. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for design firms seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}