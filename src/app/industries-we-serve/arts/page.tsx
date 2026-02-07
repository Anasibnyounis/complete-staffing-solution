import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Arts.module.css";
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
                        backgroundImage: "url('/industries detail pages/arts-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        ARTS
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>




                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
                        Complete Staffing Solutions recognizes the importance of the arts in enriching our communities and driving cultural innovation. That’s why we are dedicated to supporting clients in the arts industry with specialized recruitment solutions tailored to their unique needs. From museum curators to performing artists, we understand the diverse range of roles within the arts and work closely with our clients to identify and secure top talent that aligns with their artistic vision and organizational goals.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
                        Our team of experienced recruiters specializes in sourcing candidates with backgrounds in fine arts, performing arts, art history, arts administration, and more. We understand the importance of creativity, passion, and cultural sensitivity in the arts, and we strive to connect our clients with candidates who possess these qualities. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is committed to delivering recruitment solutions that meet their unique needs and contribute to the vibrancy and success of the arts community.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
                        At Complete Staffing Solutions, we are passionate about supporting clients in the arts industry and helping them thrive in an ever-changing landscape. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services to their needs. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for arts organizations seeking to build diverse and talented teams that push the boundaries of creativity and innovation.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}