import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Entertainment.module.css";
export const metadata = {
    title: "Entertainment Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function EntertainmentPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/entertainment-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        ENTERTAINMENT
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>





                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
Complete Staffing Solutions understands the dynamic and fast-paced nature of the entertainment industry and is committed to providing our clients with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in film, television, music, theater, or gaming, we work closely with them to identify and secure top talent that aligns with their creative vision and business objectives. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in production, talent management, marketing, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and passion necessary to drive success in the entertainment industry.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
We recognize the importance of innovation, collaboration, and adaptability in the entertainment industry and strive to connect our clients with candidates who embody these values. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their entertainment projects and initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we are proud to partner with clients in the entertainment industry and support their efforts to entertain, inspire, and captivate audiences worldwide. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for entertainment companies seeking to build high-performing teams and achieve their creative goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}