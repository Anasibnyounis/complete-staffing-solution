"use client";


import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./EmploymentForm.module.css";

const PLACEHOLDER_IMAGE = "/for%20employer/pic.jpg";
const UPLOAD_ICON = "/for%20employer/material-symbols-light_upload-file-outline.svg";

export default function EmploymentForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("No file chosen");

  return (
    <section className={styles.section} aria-labelledby="form-title">
      <div className={styles.formCard}>
        <div className={styles.headingBlock}>
          <h2 id="form-title" className={styles.title}>
            EMPLOYMENT APPLICATION
          </h2>
          <p className={styles.subtitle}>
            Please contact us to discuss your hiring needs.
          </p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          {/* Email Address */}
          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input id="email" type="email" name="email" className={styles.input} required />
          </div>

          {/* Full Name & Phone Number */}
          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="fullName" className={styles.label}>Full Name</label>
              <input id="fullName" type="text" name="fullName" className={styles.input} required />
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="phone" className={styles.label}>Phone Number</label>
              <input id="phone" type="tel" name="phone" className={styles.input} required />
            </div>
          </div>

          {/* Street Address */}
          <div className={styles.fieldGroup}>
            <label htmlFor="street" className={styles.label}>Street Address</label>
            <input id="street" type="text" name="street" className={styles.input} />
          </div>

          {/* City & State */}
          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="city" className={styles.label}>City</label>
              <input id="city" type="text" name="city" className={styles.input} />
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="state" className={styles.label}>State</label>
              <input id="state" type="text" name="state" className={styles.input} />
            </div>
          </div>

          {/* Zip Code & Salary Range */}
          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="zip" className={styles.label}>Zip Code</label>
              <input id="zip" type="text" name="zip" className={styles.input} />
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="salary" className={styles.label}>Desired Salary Range</label>
              <select id="salary" name="salary" className={styles.select}>
                <option value="">Please Select a Range</option>
                <option value="30-50k">$30,000 - $50,000</option>
                <option value="50-80k">$50,000 - $80,000</option>
                <option value="80k+">$80,000+</option>
              </select>
            </div>
          </div>

          {/* Position & Source */}
          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="position" className={styles.label}>Position Interested in</label>
              <select id="position" name="position" className={styles.select}>
                <option value="">Please Choose</option>
                <option value="accounting">Accounting</option>
                <option value="admin">Administrative</option>
                <option value="it">Information Technology</option>
              </select>
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="hearAbout" className={styles.label}>How did you hear about us?</label>
              <select id="hearAbout" name="hearAbout" className={styles.select}>
                <option value="">Please Choose</option>
                <option value="search">Search Engine</option>
                <option value="referral">Referral</option>
                <option value="social">Social Media</option>
              </select>
            </div>
          </div>

          {/* Type of Employment (Checkboxes) */}
          <div className={styles.checkboxSection}>
            <label className={styles.label}>Type of Employment Desired:</label>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" name="type" value="full-time" /> Full Time
              </label>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" name="type" value="part-time" /> Part Time
              </label>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" name="type" value="temporary" /> Temporary
              </label>
            </div>
          </div>

          {/* File Upload Block */}
          <div className={styles.uploadBlock}>
            <div className={styles.uploadRow}>
              <div className={styles.uploadBox} onClick={() => fileInputRef.current?.click()}>
                <Image src={UPLOAD_ICON} alt="upload" width={30} height={30} />
                <input
                  ref={fileInputRef}
                  type="file"
                  className={styles.visuallyHidden}
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "No file chosen")}
                />
              </div>
              <div className={styles.uploadInfo}>
                <span className={styles.fileName}>{fileName}</span>
                <span className={styles.maxSize}>Max. file size: 128 MB.</span>
              </div>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>

      <Image 
        src={PLACEHOLDER_IMAGE}
        alt=""
        width={689}
        height={1200}
        className={styles.placeholderImage}
      />
    </section>
  );
}