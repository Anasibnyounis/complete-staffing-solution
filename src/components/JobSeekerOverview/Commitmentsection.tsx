"use client";
import React, { useState } from 'react';
import styles from './Commitmentsection.module.css';
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-jakarta",
});

const CommitmentSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const paragraphs = [
    `We understand that the job search process can be daunting, and we are dedicated to alleviating the stress and uncertainty that often accompanies it. Our approach is centered on a comprehensive understanding of both your skills, qualifications, and aspirations, as well as the specific needs and culture of the companies we collaborate with.`,
    `To begin with, we prioritize building strong relationships. By taking the time to listen and understand their career goals, preferences, and personal values, we can better align them with opportunities that resonate with their professional journey. This personalized approach allows us to go beyond a simple match of skills and job requirements; we aim to connect individuals with positions that align with their long-term aspirations and cultural fit.
We take into consideration many factors, from technical skills and experience to soft skills and cultural fit, ensuring that when we present to you to prospective employers you are not just qualified but are also likely to thrive in a new role. This commitment to precision in our matchmaking sets us apart, offering a more nuanced and effective approach to recruitment.`,
    `Finally, our dedication extends to providing ongoing support for both you and our clients. We don’t consider our job done once a match is made; instead, we foster relationships that go beyond the hiring process. This commitment to the success and satisfaction of both parties ensures that our candidates not only find a job but also embark on a fulfilling career path, while our partner companies benefit from employees who contribute positively to their organizational goals. In essence, our commitment to finding the perfect job match is a holistic and enduring process that prioritizes the long-term success and satisfaction of both candidates and employers alike.`
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ✅ New Heading */}
        <h2 className={styles.poweredByTitle}>JobBoard Powered By</h2>

        {/* ✅ Center Logo */}
        <div className={styles.poweredByLogoWrapper}>
          <Image
            src="/open position/top-one-hire.jpg"   
            alt="JobBoard Logo"
            width={180}
            height={80}
            className={styles.poweredByLogo}
          />
        </div>

        {/* 🔽 Neeche tumhara existing content bilkul same */}
        <div className={styles.content}>
          <h1 className={styles.title} onClick={toggleOpen}>
            OUR COMMITMENT TO YOU
          </h1>
          <h2 className={styles.subtitle} onClick={toggleOpen}>
            WE GO THE EXTRA MILE TO CONNECT YOU WITH THE PERFECT JOB.
          </h2>

          <div className={styles.text}>
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className={`${styles.paragraph} ${isOpen ? styles.open : ''}`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommitmentSection;
