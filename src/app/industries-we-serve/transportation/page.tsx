import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Transportation.module.css";
export const metadata = {
    title: "Transportation & Logistics Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function TransportationPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/transportation-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        TRANSPORTATION & LOGISTICS                   </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>








                    <p className={styles.contentParagraph}>
Complete Staffing Solutions understands the critical role that transportation and logistics play in the global economy and is committed to providing our clients in this industry with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in shipping, freight forwarding, warehousing, or supply chain management, we work closely with them to identify and secure top talent that aligns with their operational requirements and business objectives. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in logistics coordination, transportation management, inventory control, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and dedication necessary to drive success in the transportation and logistics sector.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
We recognize the importance of efficiency, reliability, and innovation in transportation and logistics operations and strive to connect our clients with candidates who excel in these areas. Whether our clients require temporary staff for peak seasons or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their transportation and logistics initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we are proud to partner with clients in the transportation and logistics industry and support their efforts to streamline operations, optimize supply chains, and deliver goods and services efficiently to markets worldwide. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for logistics companies, transportation providers, and supply chain professionals seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}