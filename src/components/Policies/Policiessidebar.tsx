"use client";

import { useState } from "react";
import styles from "./Policies.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "info-collect", label: "Information We Collect" },
  { id: "use-info", label: "How We Use Your Information" },
  { id: "cookies", label: "Cookies & Tracking Technologies" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "rights", label: "Your Rights & Choices" },
  { id: "data-security", label: "Data Security" },
  { id: "updates", label: "Policy Updates" },
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