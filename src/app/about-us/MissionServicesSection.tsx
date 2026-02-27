import Image from "next/image";

const ASSETS = "/about%20us";

const items = [
  {
    title: "Mission Statement",
    description:
      "Complete Staffing Solutions connects exceptional talent with organizations that demand results. We believe great companies are built by great people. We deliver staffing solutions that fuel growth, productivity and long-term success.",
    icon: `${ASSETS}/mission statement icon.svg`,
    image: `${ASSETS}/mission statement placeholder.jpg`,
  },
  {
    title: "Our Service Commitment",
    description:
      "At Complete Staffing Solutions, our staffing services are built on long-term workforce partnerships, not one-time transactions. We approach every talent placement as the foundation of a strategic relationship, delivering recruitment solutions that prioritize quality, consistency, and organizational fit. Our comprehensive recruitment process includes in-depth candidate interviews, skills assessments, and professional reference verification to ensure alignment in technical expertise, experience, values, and company culture. Through rigorous candidate screening and personalized matching, we support successful placements across finance, accounting, healthcare, and administrative roles. We are committed to responsive communication, transparent hiring practices, and dedicated client and candidate support. By aligning our staffing solutions with your business goals, we help drive sustainable growth and long-term success.",
    icon: `${ASSETS}/our services commitmnet to you icon.svg`,
    image: `${ASSETS}/our service placeholder.jpg`,
  },
  {
    title: "Overview",
    description:
      "For over 25 years, Complete Staffing Solutions has delivered professional staffing and recruitment services for organizations seeking top talent in finance and accounting, healthcare, and administrative support. As an experienced staffing agency, we partner with businesses across multiple industries, connecting highly qualified professionals with companies ranging from growing startups to established enterprises. Our specialized recruitment teams focus on permanent placement, direct hire, and temporary staffing solutions, providing strategic workforce solutions tailored to each client's hiring needs. Through rigorous candidate screening, industry expertise, and a deep understanding of organizational culture, we ensure precise talent acquisition and long-term placement success. By combining responsiveness, data-driven recruiting methods, and a consultative approach, we help organizations build high-performing teams that meet today's operational demands while supporting future growth.",
    icon: `${ASSETS}/overview icon.svg`,
    image: `${ASSETS}/overview placeholder.jpg`,
  },
];

export default function MissionServicesSection() {
  return (
    <section
      className="w-full flex flex-col items-center py-12 px-4 sm:py-14 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 xl:px-12 2xl:px-16 gap-6 md:gap-8 text-left font-[var(--font-plus-jakarta)] text-neutral-900"
      aria-labelledby="mission-services-heading"
    >
      {items.map((item) => (
        <article
          key={item.title}
          className="w-full rounded-2xl bg-white shadow-lg flex flex-col md:flex-row items-stretch md:items-center p-4 sm:p-5 md:p-6 gap-6 md:gap-8"
        >
          <div className="flex flex-col flex-1 min-w-0 gap-6 md:gap-8">
            <div className="border-b border-[#19478e] pb-5 px-4 sm:px-5 flex flex-col gap-5">
              <h2 className="font-bold text-[clamp(22px,2.5vw,36px)] leading-tight">
                {item.title}
              </h2>
              <p className="font-[var(--font-inter)] text-base text-neutral-600 leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
            <div className="flex justify-start px-4 sm:px-5">
              <div className="w-20 h-20 md:w-[100px] md:h-[100px] rounded-full bg-[#6ca642] flex items-center justify-center shrink-0">
                <Image
                  src={item.icon.replace(/ /g, "%20")}
                  alt=""
                  width={56}
                  height={56}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain brightness-0 invert"
                  unoptimized
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[550px] md:min-w-[550px] h-56 sm:h-72 md:h-[400px] relative rounded-2xl overflow-hidden shrink-0">
            <Image
              src={item.image.replace(/ /g, "%20")}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </article>
      ))}
    </section>
  );
}
