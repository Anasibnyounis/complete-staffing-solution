import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Public.module.css";
export const metadata = {
    title: "Public Administration Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function PublicAdministrationPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/public-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        PUBLIC ADMINISTRATION                 </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>












                    <p className={styles.contentParagraph}>
                        Complete Staffing Solutions recognizes the importance of effective leadership and administration in driving success in the public sector and is committed to providing our clients in public administration with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in government agencies, municipal departments, or public utilities, we work closely with them to identify and secure top talent that aligns with their organizational goals and public service mission. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in public policy, public administration, government affairs, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and commitment necessary to drive success in public administration roles.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
                        We recognize the importance of accountability, transparency, and responsiveness in public administration and strive to connect our clients with candidates who embody these values. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their public administration initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
                        At Complete Staffing Solutions, we are proud to partner with clients in public administration and support their efforts to serve the public interest and improve the quality of life for citizens. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for government agencies and public sector organizations seeking to build high-performing teams and achieve their mission-driven goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}