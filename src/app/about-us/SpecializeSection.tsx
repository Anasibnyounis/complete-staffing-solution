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
      className="w-full bg-[#b9c6dc]/40 py-10 sm:py-14 lg:py-16"
      aria-labelledby="specialize-positions-title"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 md:gap-10 text-center font-[var(--font-plus-jakarta)] text-neutral-900">
        <h2
          id="specialize-positions-title"
          className="w-full max-w-[720px] font-bold text-[clamp(20px,2.6vw,40px)] leading-tight text-center uppercase tracking-[0.16em]"
        >
          We specialize in filling the following positions:
        </h2>
        <div className="w-full flex flex-wrap items-start justify-center gap-6 md:gap-8 text-left font-[var(--font-inter)] text-neutral-700 text-[15px] sm:text-base">
          {columns.map((items, index) => (
            <div
              key={index}
              className="flex-1 min-w-[200px] max-w-[260px]"
            >
              <ul className="m-0 pl-5 list-disc leading-relaxed">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
