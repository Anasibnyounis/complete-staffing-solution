import JobRequestSection from "@/components/JobRequestSection";
import styles from "./IT.module.css";
export const metadata = {
    title: "Software & IT Services Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function ITPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/IT-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Software & IT Services
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>




                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
Complete Staffing Solutions understands the importance of technology in driving success in the modern business landscape and is committed to providing our clients in the software and IT services industry with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in software development, IT consulting, cybersecurity, or cloud services, we work closely with them to identify and secure top talent that aligns with their technical requirements and business objectives. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in software engineering, network administration, data analysis, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and innovation necessary to drive success in the software and IT services sector.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
We recognize the importance of technical expertise, problem-solving skills, and collaboration in software and IT services and strive to connect our clients with candidates who excel in these areas. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their software.
                    </p>

                  

                </div>
            </section>



            <JobRequestSection />




        </main>
    );
}