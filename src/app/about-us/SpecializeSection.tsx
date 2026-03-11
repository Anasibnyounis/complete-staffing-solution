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
      className="w-full bg-gradient-to-b from-[#b9c6dc]/40 via-white to-[#e5edf8] py-12 sm:py-16 lg:py-20"
      aria-labelledby="specialize-positions-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 md:gap-10 text-center font-[var(--font-plus-jakarta)] text-neutral-900">
        <div className="space-y-3 max-w-3xl">
          <p className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-[#19478e] uppercase shadow-sm ring-1 ring-[#19478e]/10">
            Roles we specialize in
          </p>
          <h2
            id="specialize-positions-title"
            className="w-full font-bold text-[clamp(26px,3vw,36px)] leading-tight text-center capitalize"
          >
            We specialize in filling the following positions
          </h2>
          <p className="font-[var(--font-inter)] text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed">
            From finance and administration to healthcare and customer service,
            we place skilled professionals across the roles that keep your
            organization moving.
          </p>
        </div>

        <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 text-left font-[var(--font-inter)] text-neutral-700 text-[15px] sm:text-base">
          {columns.map((items, index) => (
            <div
              key={index}
              className="relative flex-1 min-w-[200px] max-w-xs rounded-2xl bg-white/80 p-4 sm:p-5 shadow-[0_14px_30px_rgba(15,23,42,0.10)] ring-1 ring-[#b9c6dc]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.15)]"
            >
              <div className="pointer-events-none absolute inset-x-4 top-0 h-[2px] rounded-b-full bg-gradient-to-r from-[#19478e] via-[#6ca642] to-[#19478e]" />
              <ul className="mt-3 m-0 pl-5 list-disc leading-relaxed space-y-1.5">
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
