import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Hardware.module.css";
export const metadata = {
    title: "Hardware & Networking Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function HardwarePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section -  */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/hardware-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        HARDWARE & NETWORKING
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>









                    <p className={styles.contentParagraph}>
                        Complete Staffing Solutions recognizes the critical role that hardware and networking play in driving success in the technology industry and is committed to providing our clients with tailored recruitment solutions to meet their specific staffing needs. Whether our clients operate in computer hardware, networking infrastructure, telecommunications, or IT services, we work closely with them to identify and secure top talent that aligns with their technical requirements and business objectives. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in computer engineering, network administration, cybersecurity, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and innovation necessary to drive success in the hardware and networking sector.
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
                        We recognize the importance of reliability, scalability, and security in hardware and networking solutions and strive to connect our clients with candidates who possess expertise in these areas. Whether our clients require temporary staff for a specific project or permanent additions to their team, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their hardware and networking initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements.
                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
                        At Complete Staffing Solutions, we are proud to partner with clients in the hardware and networking industry and support their efforts to build robust, secure, and scalable technology solutions. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for technology companies seeking to build high-performing teams and achieve their business goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}