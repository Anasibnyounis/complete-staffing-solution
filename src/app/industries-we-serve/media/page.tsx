import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Media.module.css";
export const metadata = {
    title: "Media Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function MediaPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section -  */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/media-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        MEDIA & COMMUNICATION
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>









                    <p className={styles.contentParagraph}>
                        Complete Staffing Solutions recognizes the dynamic and ever-evolving nature of the media and communications industry and is committed to providing our clients with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in traditional media, digital media, public relations, or advertising, we work closely with them to identify and secure top talent that aligns with their content, audience, and business objectives. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in journalism, broadcasting, marketing, social media management, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and creativity necessary to drive success in the media and communications sector.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
                        We recognize the importance of storytelling, audience engagement, and technological innovation in media and communications and strive to connect our clients with candidates who embody these values. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their media and communications initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
                        At Complete Staffing Solutions, we are proud to partner with clients in the media and communications industry and support their efforts to inform, entertain, and engage audiences across platforms. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for media companies, communications agencies, and content creators seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}