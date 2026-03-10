"use client";

import { useState } from "react";
import styles from "./Policies.module.css";

const sections = [
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "cookie-policy", label: "Cookie Policy" },
  { id: "additional-disclosures", label: "Additional Disclosures" },
];

export default function PoliciesSidebar() {
  const [activeSection, setActiveSection] = useState("introduction");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.sidebarTitle}>Table of Contents</h3>
      <ul className={styles.sidebarList}>
        {sections.map((section) => (
          <li
            key={section.id}
            className={`${styles.sidebarItem} ${
              activeSection === section.id ? styles.sidebarItemActive : ""
            }`}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}