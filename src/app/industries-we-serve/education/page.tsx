import JobRequestSection from "@/components/JobRequestSection";
import styles from "./Educatin.module.css";
export const metadata = {
    title: "Education Staffing Solutions | Complete Staffing Solutions",
    description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
};

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - HEALTHCARE */}
            <section className={styles.heroSection}>
                {/* Background Image */}
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: "url('/industries detail pages/education-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                {/* Hero Title */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        EDUCATION
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>





                    {/* Paragraph 1 */}
                    <p className={styles.contentParagraph}>
Complete Staffing Solutions understands the critical role that education plays in shaping the future and is committed to providing our clients in the education sector with tailored recruitment solutions to meet their specific staffing needs. Whether our clients require teachers, administrators, counselors, or support staff, we work closely with them to identify and secure top talent that aligns with their educational mission and values. Our team of experienced recruiters specializes in sourcing candidates with backgrounds in education, instructional design, curriculum development, and more, ensuring that we connect our clients with candidates who possess the skills, experience, and passion necessary to drive success in the field of education. 
                    </p>

                    {/* Paragraph 2 */}
                    <p className={styles.contentParagraph}>
We recognize the importance of diversity, equity, and inclusion in education and strive to connect our clients with candidates who reflect these values. Whether our clients operate in K-12 schools, higher education institutions, or educational nonprofits, Complete Staffing Solutions is dedicated to delivering recruitment solutions that meet their unique needs and contribute to the success of their educational initiatives. Our client-focused approach ensures that we understand the specific requirements and objectives of each client, allowing us to tailor our recruitment services accordingly and provide ongoing support to ensure successful placements 
.                    </p>

                    {/* Paragraph 3 */}
                    <p className={styles.contentParagraph}>
At Complete Staffing Solutions, we are proud to partner with clients in the education sector and support their efforts to provide quality education and opportunities for learners of all ages. By leveraging our industry expertise, extensive network, and commitment to excellence, we strive to be the trusted recruitment partner for educational organizations seeking to build high-performing teams and achieve their educational goals.
                    </p>

                </div>
            </section>

            {/* CTA Section - Blue Background */}


            <JobRequestSection />




        </main>
    );
}