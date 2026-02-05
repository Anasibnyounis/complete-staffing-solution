import styles from "./SpecializeSection.module.css";

const columns = [
  [
    "Controller",
    "Finance Manager",
    "Credit Analyst",
    "Financial Analyst",
    "Staff and Senior Accountants",
    "Payroll Specialists",
    "Collections Specialist",
    "Accounting Managers",
    "Administrative Assistant",
  ],
  [
    "Bookkeepers",
    "AP & AR Specialist",
    "Credit & Collections",
    "Office Manager",
    "Executive Assistant",
    "Administrative Assistant",
    "Receptionist",
    "Human Resource Assistant",
    "Coder",
  ],
  [
    "Marketing Assistant",
    "Customer Service Representative",
    "Data Entry Specialist",
    "Medical Billing Professionals",
    "Medical Receptionist",
    "Medical Secretary",
    "Mortgage Professionals",
    "Loan Officers",
  ],
  [
    "Registered Nurse",
    "Physical Therapist",
    "Medical Assistant",
    "Phlebotomist",
    "Dental Assistant",
    "Patient Care Technician",
    "Medical Biller",
    "Medical Secretary",
    "Receptionist",
  ],
];

export default function SpecializeSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="specialize-positions-title"
    >
      <h2 id="specialize-positions-title" className={styles.title}>
        We specialize in filling the following positions:
      </h2>
      <div className={styles.columns}>
        {columns.map((items, index) => (
          <div key={index} className={styles.column}>
            <ul className={styles.columnList}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
