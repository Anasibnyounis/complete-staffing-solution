import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Manufacturing.module.css";
export const metadata = {
    title: "Manufacturing Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function ManufacturingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/manufacturing-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        MANUFACTURING
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>






                    <p className={styles.contentParagraph}>
                  Complete Staffing Solutions understands the critical role that manufacturing plays in driving economic growth and is committed to providing our clients in the manufacturing industry with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in automotive, aerospace, consumer goods, or industrial equipment manufacturing, we work closely with them to identify and secure top talent that aligns with their production goals and business objectives. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in engineering, production management, quality control, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and dedication necessary to drive success in the manufacturing sector.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
We recognize the importance of efficiency, quality, and safety in manufacturing operations and strive to connect our clients with candidates who embody these values. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their manufacturing operations and initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we are proud to partner with clients in the manufacturing industry and support their efforts to innovate, streamline processes, and deliver high-quality products to markets worldwide. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for manufacturing companies seeking to build high-performing teams and achieve their production goals.  {/* Paragraph 1 */}
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}