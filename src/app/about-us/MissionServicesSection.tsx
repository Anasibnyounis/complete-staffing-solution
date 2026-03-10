import Image from "next/image";

const ASSETS = "/about%20us";

const items = [
  {
    title: "Mission Statement",
    description:
      "Complete Staffing Solutions connects exceptional talent with organizations that demand results. We believe great companies are built by great people. We deliver staffing solutions that fuel growth, productivity and long-term success.",
    icon: `${ASSETS}/mission statement icon.svg`,
    image: `${ASSETS}/mission statement placeholder.jpeg`,
  },
  {
    title: "Our Service Commitment",
    description:
      "Complete Staffing Solutions builds long-term workforce partnerships, not one-time placements. Our recruitment process includes detailed interviews, skills assessments, and reference checks to ensure every candidate aligns with the role, company values, and culture.",
    icon: `${ASSETS}/our services commitmnet to you icon.svg`,
    image: `${ASSETS}/our service placeholder.jpg`,
  },
  {
    title: "Overview",
    description:
      "For over 25 years, Complete Staffing Solutions has provided professional staffing for finance, healthcare, and administrative roles. We connect qualified professionals with organizations through permanent, direct hire, and temporary staffing solutions.",
    icon: `${ASSETS}/overview icon.svg`,
    image: `${ASSETS}/overview placeholder.jpg`,
  },
];

export default function MissionServicesSection() {
  return (
    <section
      className="w-full bg-neutral-50 py-10 sm:py-14 lg:py-16"
      aria-labelledby="mission-services-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10 font-[var(--font-plus-jakarta)] text-neutral-900">
        {items.map((item, index) => (
          <article
            key={item.title}
            className={`${index === 1 ? "md:flex-row-reverse" : "md:flex-row"} w-full rounded-2xl bg-white shadow-lg flex flex-col  items-stretch md:items-center p-4 sm:p-5 md:p-6 lg:p-7 gap-6 md:gap-8`}
          >
            <div className="flex flex-col flex-1 min-w-0 gap-6 md:gap-8">
              <div className="border-b border-[#19478e] pb-5 flex flex-col gap-5">
                <h2 className="font-bold text-[clamp(22px,2.4vw,34px)] leading-tight tracking-wide uppercase">
                  {item.title}
                </h2>
                <p className="font-[var(--font-inter)] text-[15px] sm:text-base text-neutral-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-start">
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
            <div className="w-full md:w-[520px] md:min-w-[520px] h-56 sm:h-72 md:h-[360px] lg:h-[380px] relative rounded-2xl overflow-hidden shrink-0">
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
      </div>
    </section>
  );
}
