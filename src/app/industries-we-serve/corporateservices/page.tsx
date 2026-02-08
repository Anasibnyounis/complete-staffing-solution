import JobRequestSection from "@/components/JobRequestSection";
import styles from "./CorporateServices.module.css";
export const metadata = {
    title: "Corporate Services Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function CorporateServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/corporate-services-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        CORPORATE SERVICES
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>





                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
Complete Staffing Solutions understands the diverse range of roles and responsibilities encompassed within corporate services and is committed to providing our clients with tailored recruitment solutions to meet their specific needs. Whether our clients require administrative support, human resources expertise, finance professionals, or executive leadership, we work closely with them to identify and secure top talent that aligns with their organizational culture and business objectives. Our team of experienced recruiters specializes in sourcing candidates with the skills, experience, and professionalism necessary to excel in corporate services roles.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
We recognize that corporate services play a crucial role in ensuring the smooth operation of businesses across industries, from small startups to large corporations. That’s why we take the time to understand our clients’ unique requirements and provide recruitment solutions that address their specific staffing needs. Whether our clients require temporary staff for short-term projects or permanent placements to support long-term growth, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to their overall success.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we are committed to providing exceptional service and support to our clients in the corporate services sector. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for corporate services departments seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}