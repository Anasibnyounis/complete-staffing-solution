import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Travel.module.css";
export const metadata = {
    title: "Recreation & Travel Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function TravelPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/travel-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        RECREATION & TRAVEL                  </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>










                    <p className={styles.contentParagraph}>
Complete Staffing Solutions understands the importance of creating memorable experiences and is committed to providing our clients in the recreation and travel industry with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in hospitality, tourism, attractions, or outdoor recreation, we work closely with them to identify and secure top talent that aligns with their brand, guest experience, and business objectives. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in hotel management, event planning, tour guiding, outdoor leadership, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and passion necessary to drive success in the recreation and travel sector.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
We recognize the importance of customer service, cultural sensitivity, and safety in recreation and travel experiences and strive to connect our clients with candidates who excel in these areas. Whether our clients require seasonal staff for peak travel seasons or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their recreation and travel offerings. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we are proud to partner with clients in the recreation and travel industry and support their efforts to create unforgettable experiences for guests around the world. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for hotels, resorts, tour operators, and recreation providers seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}