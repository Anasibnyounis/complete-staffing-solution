"use client";
import { useState } from "react";
import styles from "./Latestjobstable.module.css";

// SVG Arrows (Zero dependencies)
const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);
const ChevronUp = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
);

export default function LatestJobsTable() {
  const [openSection, setOpenSection] = useState({ jobType: true, employment: true });

  const toggleSection = (section: 'jobType' | 'employment') => {
    setOpenSection(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const jobOpenings = Array(7).fill({
    jobTitle: "Staff Accountant",
    jobId: "#33583",
    location: "Worcester, Massachusetts",
    department: "Administrative",
  });

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.mainTitle}>LATEST JOB OPENINGS</h2>

      <div className={styles.container}>
        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          {/* Keyword Search */}
          <div className={styles.inputGroup}>
            <div className={styles.searchContainer}>
              <img src="/open position/1.png" alt="" className={styles.sidebarIcon} />
              <input type="text" placeholder="Keyword" className={styles.keywordInput} />
            </div>
          </div>

          {/* All Categories - FIXED STYLE */}
          <div className={styles.sidebarHeaderLine}>
            <div className={styles.iconText}>
              <img src="/open position/2.png" alt="" className={styles.sidebarIcon} />
              <span>All Categories</span>
            </div>
            <ChevronDown />
          </div>

          <div className={styles.divider} />

          {/* Job Type with Animation */}
          <div className={styles.filterGroup}>
            <div className={styles.sidebarHeaderLine} onClick={() => toggleSection('jobType')}>
              <div className={styles.iconText}>
                <img src="/open position/3.png" alt="" className={styles.sidebarIcon} />
                <span className={styles.blueText}>Job Type</span>
              </div>
              {openSection.jobType ? <ChevronUp /> : <ChevronDown />}
            </div>
            <div className={`${styles.accordionContent} ${openSection.jobType ? styles.isOpen : ''}`}>
              <div className={styles.checkboxList}>
                {['Full Time', 'Part Time', 'Temporary', 'Contract'].map((t) => (
                  <label key={t} className={styles.checkLabel}>
                    <input type="checkbox" /> {t}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          {/* Employment Type with Animation */}
          <div className={styles.filterGroup}>
            <div className={styles.sidebarHeaderLine} onClick={() => toggleSection('employment')}>
              <div className={styles.iconText}>
                <img src="/open position/3.png" alt="" className={styles.sidebarIcon} />
                <span className={styles.blueText}>Employment Type</span>
              </div>
              {openSection.employment ? <ChevronUp /> : <ChevronDown />}
            </div>
            <div className={`${styles.accordionContent} ${openSection.employment ? styles.isOpen : ''}`}>
              <div className={styles.checkboxList}>
                {['On Site', 'Remote', 'Hybrid'].map((t) => (
                  <label key={t} className={styles.checkLabel}>
                    <input type="checkbox" /> {t}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.divider} />
          <button className={styles.applyBtn}>Apply Filters</button>
        </aside>

        {/* TABLE SECTION */}
        <div className={styles.tableWrapper}>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Job Id</th>
                  <th>Location</th>
                  <th>Department</th>
                  <th>Job Type</th>
                </tr>
              </thead>
              <tbody>
                {jobOpenings.map((job, i) => (
                  <tr key={i}>
                    <td className={styles.boldCell}>{job.jobTitle}</td>
                    <td>{job.jobId}</td>
                    <td>{job.location}</td>
                    <td>{job.department}</td>
                    <td>
                      <button className={styles.viewBtn}>
                        <span>View Details</span>
                        <ChevronDown />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.loadMoreRow}>
             <button className={styles.loadMore}>Load More Job listings</button>
          </div>
        </div>
      </div>
    </section>
  );
}