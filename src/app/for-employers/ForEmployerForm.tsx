"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./ForEmployerForm.module.css";

const PLACEHOLDER_IMAGE = "/for%20employer/source_904ec21c34e0b2555a4ab03bb339cfc7277f46f5.jpg";
const UPLOAD_ICON = "/for%20employer/material-symbols-light_upload-file-outline.svg";

export default function ForEmployerForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("No file chosen");

  return (
    <section className={styles.section} aria-labelledby="for-employer-form-title">
      <div className={styles.formCard}>
        <div className={styles.headingBlock}>
          <h2 id="for-employer-form-title" className={styles.title}>
            Place a Job Request
          </h2>
          <p className={styles.subtitle}>
            Please contact us to discuss your hiring needs.
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={styles.input}
              placeholder=""
              required
            />
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="companyName" className={styles.label}>
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                className={styles.input}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="title" className={styles.label}>
                Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="department" className={styles.label}>
                Department
              </label>
              <input
                id="department"
                type="text"
                name="department"
                className={styles.input}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="departmentHiringFor" className={styles.label}>
                Department Hiring for
              </label>
              <select
                id="departmentHiringFor"
                name="departmentHiringFor"
                className={styles.select}
              >
                <option value="">Select</option>
                <option value="engineering">Engineering</option>
                <option value="sales">Sales</option>
                <option value="operations">Operations</option>
                <option value="hr">Human Resources</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="zipCode" className={styles.label}>
                Zip Code
              </label>
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                className={styles.input}
                inputMode="numeric"
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="hearAbout" className={styles.label}>
              How did you hear about us?
            </label>
            <select id="hearAbout" name="hearAbout" className={styles.select}>
              <option value="">Select</option>
              <option value="search">Search / Google</option>
              <option value="referral">Referral</option>
              <option value="linkedin">LinkedIn</option>
              <option value="event">Event</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="comments" className={styles.label}>
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              className={styles.textarea}
              placeholder="Message"
            />
          </div>

          <div className={styles.uploadBlock}>
            <span className={styles.uploadLabel}>Job Description</span>
            <span className={styles.uploadHint}>
              Please upload a .docx or .pdf file with your job description.
            </span>
            <div className={styles.uploadZone}>
              <input
                ref={fileInputRef}
                type="file"
                id="jobDescription"
                name="jobDescription"
                accept=".doc,.docx,.pdf"
                className={styles.visuallyHidden}
                aria-label="Upload job description file"
                onChange={(e) =>
                  setFileName(e.target.files?.[0]?.name ?? "No file chosen")
                }
              />
              <button
                type="button"
                className={styles.uploadButton}
                onClick={() => fileInputRef.current?.click()}
                aria-label="Choose file"
              >
                <Image
                  src={UPLOAD_ICON}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.uploadIcon}
                />
              </button>
              <div>
                <span className={styles.uploadText} aria-live="polite">
                  {fileName}
                </span>
                <div className={styles.uploadMax}>Max. file size: 128 MB.</div>
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
        height={1208}
        className={styles.placeholderImage}
        sizes="(max-width: 768px) 0px, (max-width: 992px) 50vw, 689px"
      />
    </section>
  );
}
