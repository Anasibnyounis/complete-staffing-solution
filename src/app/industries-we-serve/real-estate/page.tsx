import JobRequestSection from "@/components/JobRequestSection";
import styles from "./RealEstate.module.css";
export const metadata = {
    title: "Real Estate Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function RealEstatePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/real-estate.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        REAL ESTATE                  </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>











                    <p className={styles.contentParagraph}>
                        Complete Staffing Solutions recognizes the diverse and dynamic nature of the real estate industry and is committed to providing our clients with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in residential or commercial real estate, property management, development, or brokerage, we work closely with them to identify and secure top talent that aligns with their business objectives and values. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in real estate sales, leasing, property management, finance, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and professionalism necessary to drive success in the real estate sector.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
                        We recognize the importance of market knowledge, negotiation skills, and customer service in real estate and strive to connect our clients with candidates who excel in these areas. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their real estate ventures. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
                        At Complete Staffing Solutions, we are proud to partner with clients in the real estate industry and support their efforts to navigate the complexities of buying, selling, and managing properties. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for real estate agencies, property management firms, and real estate professionals seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}