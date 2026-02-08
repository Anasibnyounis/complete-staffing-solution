import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Agriculture.module.css";
export const metadata = {
    title: "Agriculture Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function AgriculturePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/agriculture-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        AGRICULTURE
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>




                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
                        In the agriculture industry, Complete Staffing Solutions is dedicated to supporting our clients with tailored recruitment solutions that address the unique challenges and demands of the sector. From farm managers to agricultural scientists, we understand the diverse range of roles within agriculture and work closely with our clients to identify and secure top talent. With a deep understanding of agricultural practices and trends, we strive to connect our clients with candidates who possess the technical expertise, innovation, and commitment to sustainability necessary to drive success in the field.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
                        Our team of experienced recruiters specializes in sourcing candidates with backgrounds in crop science, animal husbandry, agricultural engineering, and agribusiness management, among others. We recognize the importance of staying up-to-date with advancements in technology, regulations, and market dynamics within the agriculture industry, allowing us to provide informed guidance and support to our clients. Whether our clients require seasonal workers, skilled laborers, or managerial staff, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the growth and sustainability of their agricultural operations.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
                        At Complete Staffing Solutions, we are proud to partner with clients in the agriculture industry to address their staffing needs and drive success in this vital sector. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for agricultural organizations seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}