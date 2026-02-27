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
      className="w-full bg-[#b9c6dc]/30 flex flex-col items-center py-12 px-4 sm:py-14 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 xl:px-12 2xl:px-16 gap-6 md:gap-8 text-center font-[var(--font-plus-jakarta)] text-neutral-900"
      aria-labelledby="specialize-positions-title"
    >
      <h2
        id="specialize-positions-title"
        className="w-full max-w-[670px] font-bold text-[clamp(18px,2.5vw,42px)] leading-tight text-center uppercase tracking-wide"
      >
        We specialize in filling the following positions:
      </h2>
      <div className="w-full flex flex-wrap items-start justify-center gap-6 md:gap-8 text-left font-[var(--font-inter)] text-neutral-600 text-base">
        {columns.map((items, index) => (
          <div
            key={index}
            className="flex-1 min-w-[200px] max-w-[320px]"
          >
            <ul className="m-0 pl-6 list-disc leading-loose">
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
