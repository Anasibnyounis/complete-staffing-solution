import JobRequestSection from "@/components/JobRequestSection";
import styles from "./ConsumerGoods.module.css";
export const metadata = {
    title: "Consumer Goods Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function ConsumerGoodsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/consumer-goods-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        CONSUMER GOODS
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>




 
                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
Complete Staffing Solutions is dedicated to supporting clients in the consumer goods industry by providing tailored recruitment solutions to meet their unique staffing needs. From product development and marketing to sales and distribution, we understand the diverse range of roles within the consumer goods sector and work closely with our clients to identify and secure top talent. With a deep understanding of consumer trends and market dynamics, we strive to connect our clients with candidates who possess the skills, experience, and creativity necessary to drive success in this competitive industry.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
Our team of experienced recruiters specializes in sourcing candidates with backgrounds in consumer product management, brand management, retail merchandising, supply chain management, and more. We recognize the importance of agility, innovation, and customer-centricity in the consumer goods industry, and we strive to connect our clients with candidates who embody these values. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is committed to delivering recruitment solutions that meet their unique needs and contribute to the growth and profitability of their consumer goods businesses.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we understand the critical role that talent plays in driving success in the consumer goods industry. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for consumer goods companies seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}