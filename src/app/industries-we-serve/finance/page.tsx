import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Finance.module.css";
export const metadata = {
    title: "Finance Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function FinancePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/finance-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        FINANCE
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>





                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
Complete Staffing Solutions understands the importance of talent in driving success in the finance industry and is committed to providing our clients with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in banking, investment, insurance, or accounting, we work closely with them to identify and secure top talent that aligns with their business objectives and values. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in finance, economics, risk management, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and integrity necessary to drive success in the finance industry.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
We recognize the importance of trust, reliability, and compliance in the finance industry and strive to connect our clients with candidates who embody these values. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their finance operations and initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we are proud to partner with clients in the finance industry and support their efforts to drive growth, manage risk, and achieve financial stability. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for finance companies seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}