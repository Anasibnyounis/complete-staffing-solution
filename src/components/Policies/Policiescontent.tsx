"use client";
import styles from "./Policies.module.css";
import Image from "next/image";
import Link from "next/link";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function PoliciesContent() {
  return (
    // Added font variables to the wrapper
    <div className={`${styles.content} ${jakarta.variable} ${inter.variable}`}>

      {/* Introduction */}
      <section id="introduction" className={styles.section}>
        <div className={styles.iconWrapper}>
          <Image
            src="/policies/security.png"
            alt="Introduction"
            width={48}
            height={48}
            className={styles.iconImage}
          />
        </div>
        <h2 className={styles.sectionTitle}>Introduction</h2>
        <p className={styles.text}>
          Complete Staffing Solutions (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services. <br />
          By accessing our website, you agree to the terms outlined in this policy.
        </p>
      </section>

      {/* Information We Collect */}
      <section id="info-collect" className={styles.section}>
        <div className={styles.iconWrapper}>
          <Image
            src="/policies/collection.png"
            alt="Information We Collect"
            width={48}
            height={48}
            className={styles.iconImage}
          />
        </div>
        <h2 className={styles.sectionTitle}>Information We Collect</h2>

        <div className={styles.twoColumn}>
          <div className={styles.column}>
            <p className={styles.text}>
              We may collect the following types of information:
            </p>
            <h4 className={styles.subTitle}>Personal Information</h4>
            <ul className={styles.list}>
              <li>Name and contact details</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Resume and employment history</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.stackItem}>
              <h4 className={styles.subTitle}>Browsing & Technical Data</h4>
              <ul className={styles.list}>
                <li>IP address</li>
                <li>Browser type and device information</li>
                <li>Pages visited and time spent on the website</li>
              </ul>
            </div>
            <div className={styles.stackItem}>
              <h4 className={styles.subTitle}>Cookies & Tracking Data</h4>
              <ul className={styles.list}>
                <li>Usage behavior</li>
                <li>Preferences and settings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section id="use-info" className={styles.section}>
        <div className={styles.iconWrapper}>
          <Image src="/policies/process.png" alt="Icon" width={48} height={48} className={styles.iconImage} />
        </div>
        <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
        <p className={styles.text}>We use collected information to:</p>
        <ul className={styles.list}>
          <li>Respond to inquiries and provide customer support</li>
          <li>Process job applications and staffing requests</li>
          <li>Match candidates with employment opportunities</li>
          <li>Improve website performance and user experience</li>
          <li>Send updates, job alerts, or marketing communications (with consent)</li>
        </ul>
      </section>

      {/* Cookies & Tracking */}
      <section id="cookies" className={styles.section}>
        <div className={styles.iconWrapper}>
          <Image src="/policies/biscuits.png" alt="Icon" width={48} height={48} className={styles.iconImage} />
        </div>
        <h2 className={styles.sectionTitle}>Cookies & Tracking Technologies</h2>
        <p className={styles.text2}>We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.</p>
        <p className={styles.text2}>You may manage or disable cookies through your browser settings or by using our cookie preference tools.</p>
      </section>

      {/* Third-Party Services */}
      <section id="third-party" className={styles.section}>
        <div className={styles.iconWrapper}>
          <Image src="/policies/puzzles.png" alt="Icon" width={48} height={48} className={styles.iconImage} />
        </div>
        <h2 className={styles.sectionTitle}>Third-Party Services</h2>
        <p className={styles.text}>We may use trusted third-party services such as:</p>
        <ul className={styles.list}>
          <li>Analytics providers (e.g., Google Analytics)</li>
          <li>Form and application processing tools</li>
        </ul>
        <p className={styles.text2}>These providers only receive information necessary to perform their services and are required to protect your data.</p>
        <div className={styles.margins}>
          <Link href="/cookies" className={styles.cookieButton}>Manage Cookies Preferences</Link>
        </div>
      </section>

      {/* Your Rights & Choices */}
      <section id="rights" className={styles.section}>
        <div className={styles.iconWrapper}>
          <Image src="/policies/adjustment.png" alt="Icon" width={48} height={48} className={styles.iconImage} />
        </div>
        <h2 className={styles.sectionTitle}>Your Rights & Choices</h2>
        <p className={styles.text}>You have the right to:</p>
        <ul className={styles.list}>
          <li>Request access to your personal information</li>
          <li>Request correction or deletion of your data</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p className={styles.text}>To exercise these rights, please contact us using the information below.</p>
      </section>

      {/* Data Security */}
      <section id="data-security" className={styles.section}>
        <div className={styles.iconWrapper}>
          <Image src="/policies/security-lock.png" alt="Icon" width={48} height={48} className={styles.iconImage} />
        </div>
        <h2 className={styles.sectionTitle}>Data Security</h2>
        <p className={styles.text2}>We take reasonable administrative, technical, and physical measures to protect your personal information from unauthorized access, disclosure, or misuse.</p>
        <p className={styles.text2}>While no system is 100% secure, we follow industry-standard practices to safeguard your data.</p>
      </section>

      {/* Policy Updates */}
      <section id="updates" className={styles.section}>
        <div className={styles.iconWrapper}>
          <Image src="/policies/contact-mail.png" alt="Icon" width={48} height={48} className={styles.iconImage} />
        </div>
        <h2 className={styles.sectionTitle}>Policy Updates</h2>
        <p className={styles.text}>
          If you have questions or concerns about this Privacy Policy: <br />
          Email: privacy@completestaffingsolutions.com<br />
          Phone: 123-456-7890<br />
          Address: 123 Main Street, Suite 400, Boston, MA 02110
        </p>
      </section>

    </div>
  );
}