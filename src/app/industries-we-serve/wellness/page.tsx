import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Wellness.module.css";
export const metadata = {
    title: "Wellness & Fitness Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function WellnessPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/wellness-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        WELNESS & FITNESS
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>







                    <p className={styles.contentParagraph}>
Complete Staffing Solutions understands the importance of health and wellness in today’s society and is committed to providing our clients in the wellness and fitness industry with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in fitness centers, spas, wellness retreats, or corporate wellness programs, we work closely with them to identify and secure top talent that aligns with their wellness philosophy and business objectives. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in personal training, group fitness instruction, nutrition counseling, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and passion necessary to drive success in the wellness and fitness sector.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
We recognize the importance of empathy, motivation, and accountability in wellness and fitness programs and strive to connect our clients with candidates who excel in these areas. Whether our clients require certified trainers, licensed therapists, or experienced wellness coaches, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their wellness and fitness initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we are proud to partner with clients in the wellness and fitness industry and support their efforts to promote healthy lifestyles and improve overall well-being. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for fitness facilities, wellness centers, and health-focused organizations seeking to build high-performing teams and achieve their wellness goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}