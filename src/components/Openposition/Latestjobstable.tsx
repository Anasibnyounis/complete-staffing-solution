"use client";

const CATEGORIES = [
  {
    name: "Healthcare",
    count: "1,250+ Jobs",
    color: "from-sky-50 to-sky-100",
    stroke: "#1d4ed8",
    icon: "health",
  },
  {
    name: "Finance & Accounting",
    count: "900+ Jobs",
    color: "from-emerald-50 to-emerald-100",
    stroke: "#16a34a",
    icon: "finance",
  },
  {
    name: "Information Technology",
    count: "750+ Jobs",
    color: "from-indigo-50 to-indigo-100",
    stroke: "#4f46e5",
    icon: "it",
  },
  {
    name: "Manufacturing",
    count: "600+ Jobs",
    color: "from-amber-50 to-amber-100",
    stroke: "#ea580c",
    icon: "manufacturing",
  },
  {
    name: "Customer Service",
    count: "450+ Jobs",
    color: "from-rose-50 to-rose-100",
    stroke: "#e11d48",
    icon: "customer",
  },
  {
    name: "Administrative",
    count: "300+ Jobs",
    color: "from-cyan-50 to-cyan-100",
    stroke: "#0891b2",
    icon: "admin",
  },
];

const JOBS = [
  {
    title: "Licensed Practical Nurse (LPN)",
    id: "#84238",
    location: "Bridgeport, CT",
    department: "Healthcare",
    type: "Full-Time",
    status: "Urgent",
  },
  {
    title: "CNC Machinist",
    id: "#83912",
    location: "Stamford, CT",
    department: "Manufacturing",
    type: "Full-Time",
    status: "",
  },
  {
    title: "Financial Analyst",
    id: "#84567",
    location: "New Haven, CT",
    department: "Finance",
    type: "Full-Time",
    status: "New",
  },
  {
    title: "Customer Service Representative",
    id: "#84101",
    location: "Remote / USA",
    department: "Customer Service",
    type: "Part-Time",
    status: "",
  },
  {
    title: "Radiology Technician",
    id: "#84325",
    location: "Danbury, CT",
    department: "Healthcare",
    type: "Full-Time",
    status: "",
  },
];

export default function LatestJobsTable() {
  return (
    <section className="w-full bg-[#f5f7fb] py-10 sm:py-12 lg:py-14">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Browse Jobs by Category */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-3">
            <h2 className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(18px,2.2vw,22px)] text-neutral-900">
              Browse Jobs by Category
            </h2>
          </div>
          <div className="relative">
            <div className="flex flex-wrap gap-4 pb-2">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="flex-1 min-w-[150px] sm:min-w-[170px] max-w-[190px] rounded-2xl bg-white shadow-sm border border-neutral-200 flex flex-col justify-between"
                >
                  <div className="px-4 pt-4 pb-3 flex flex-col gap-2">
                    {/* Icon row */}
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-neutral-50 flex items-center justify-center">
                        {/* category icon, styled like reference */}
                        {cat.icon === "health" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-7 w-7"
                            fill="none"
                            stroke={cat.stroke}
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="8" cy="7" r="2.3" />
                            <path d="M4.5 14c.4-2 1.7-3 3.5-3s3.1 1 3.5 3" />
                            <circle cx="17" cy="7" r="2.3" />
                            <path d="M13.5 14c.4-2 1.7-3 3.5-3 1.7 0 3 1 3.4 3" />
                          </svg>
                        )}
                        {cat.icon === "finance" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-7 w-7"
                            fill="none"
                            stroke={cat.stroke}
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="4" y="4" width="12" height="16" rx="1.5" />
                            <path d="M8 9h6M8 12h3M8 15h4" />
                          </svg>
                        )}
                        {cat.icon === "it" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-7 w-7"
                            fill="none"
                            stroke={cat.stroke}
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="4" width="18" height="13" rx="2" />
                            <path d="M8 19h8" />
                          </svg>
                        )}
                        {cat.icon === "manufacturing" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-7 w-7"
                            fill="none"
                            stroke={cat.stroke}
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 20V9l4 2 4-3 6 3v9H5z" />
                            <path d="M9 13v7M13 11v9M17 13v7" />
                          </svg>
                        )}
                        {cat.icon === "customer" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-7 w-7"
                            fill="none"
                            stroke={cat.stroke}
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="7" r="3" />
                            <path d="M5 19c.6-3 3-5 7-5s6.4 2 7 5" />
                            <path d="M4 10v3a2 2 0 0 0 2 2h1" />
                            <path d="M20 10v3a2 2 0 0 1-2 2h-1" />
                          </svg>
                        )}
                        {cat.icon === "admin" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-7 w-7"
                            fill="none"
                            stroke={cat.stroke}
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="5" y="4" width="14" height="16" rx="2" />
                            <circle cx="12" cy="9" r="2.3" />
                            <path d="M8.5 16c.5-1.5 1.8-2.5 3.5-2.5s3 1 3.5 2.5" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs text-neutral-400">→</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-[#19478e] hover:underline cursor-pointer">
                        {cat.name}
                      </span>
                      <span className="text-xs text-neutral-500">{cat.count}</span>
                    </div>
                  </div>
                  <div className={`h-2 rounded-b-2xl bg-gradient-to-r ${cat.color}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Job Listings card */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
          {/* Header */}
          <div className="px-4 sm:px-6 md:px-8 pt-5 pb-4 border-b border-neutral-100 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(18px,2.3vw,22px)] text-neutral-900">
                Featured Job Listings
              </h2>
              <p className="font-[var(--font-inter)] text-xs sm:text-sm text-neutral-600">
                Explore some of the latest opportunities available through our network.
              </p>
            </div>
            <button className="mt-1 inline-flex items-center justify-center rounded-xl border border-[#19478e]/15 bg-[#19478e]/5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#19478e] hover:bg-[#19478e]/10 transition-colors">
              View All Jobs
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 text-xs sm:text-sm font-[var(--font-inter)]">
              <thead>
                <tr className="bg-[#eef2fb] text-left font-semibold text-neutral-600">
                  <th className="px-4 sm:px-6 py-3 border-b border-neutral-200">Job Title</th>
                  <th className="px-4 sm:px-6 py-3 border-b border-neutral-200">Job ID</th>
                  <th className="px-4 sm:px-6 py-3 border-b border-neutral-200">Location</th>
                  <th className="px-4 sm:px-6 py-3 border-b border-neutral-200">Department</th>
                  <th className="px-4 sm:px-6 py-3 border-b border-neutral-200">Type</th>
                  <th className="px-4 sm:px-6 py-3 border-b border-neutral-200 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {JOBS.map((job, idx) => (
                  <tr
                    key={job.id}
                    className={idx % 2 === 1 ? "bg-white" : "bg-[#f9fbff]"}
                  >
                    {/* Job title + status */}
                    <td className="px-4 sm:px-6 py-3 border-b border-neutral-100">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#e2efff] to-[#f4f8ff] border border-[#d1e2ff]" />
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-neutral-900">{job.title}</span>
                            {job.status === "Urgent" && (
                              <span className="rounded-full bg-[#fee2e2] px-2 py-[2px] text-[10px] font-semibold text-[#b91c1c]">
                                Urgent
                              </span>
                            )}
                            {job.status === "New" && (
                              <span className="rounded-full bg-[#dcfce7] px-2 py-[2px] text-[10px] font-semibold text-[#166534]">
                                New
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-neutral-500">{job.id}</span>
                        </div>
                      </div>
                    </td>

                    {/* Job ID duplicate column for exact layout match */}
                    <td className="px-4 sm:px-6 py-3 border-b border-neutral-100 text-neutral-700">
                      {job.id}
                    </td>

                    {/* Location */}
                    <td className="px-4 sm:px-6 py-3 border-b border-neutral-100 text-neutral-700">
                      {job.location}
                    </td>

                    {/* Department */}
                    <td className="px-4 sm:px-6 py-3 border-b border-neutral-100">
                      <span
                        className={
                          job.department === "Healthcare"
                            ? "text-[#2563eb] font-semibold cursor-pointer"
                            : job.department === "Manufacturing"
                            ? "text-[#f97316] font-semibold cursor-pointer"
                            : job.department === "Finance"
                            ? "text-[#16a34a] font-semibold cursor-pointer"
                            : "text-[#dc2626] font-semibold cursor-pointer"
                        }
                      >
                        {job.department}
                      </span>
                    </td>

                    {/* Type + Apply */}
                    <td className="px-4 sm:px-6 py-3 border-b border-neutral-100">
                      <span
                        className={
                          job.type === "Part-Time"
                            ? "inline-flex rounded-full bg-[#fee2e2] px-3 py-1 text-[11px] font-semibold text-[#b91c1c]"
                            : "inline-flex rounded-full bg-[#e0f2fe] px-3 py-1 text-[11px] font-semibold text-[#0369a1]"
                        }
                      >
                        {job.type}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 border-b border-neutral-100 text-right">
                      <button className="inline-flex items-center justify-center rounded-full bg-[#1a458b] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#153874] transition-colors">
                        Apply Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Load more row */}
          <div className="px-4 sm:px-6 md:px-8 py-4 text-center bg-white">
            <button className="text-sm font-semibold text-[#19478e] hover:underline">
              Load More Job Listings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}