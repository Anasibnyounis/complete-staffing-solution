import Link from "next/link";

export default function AboutJobRequestSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden min-h-[280px] py-8 px-5 md:min-h-[320px] md:py-10 md:px-6 lg:h-[390px] lg:min-h-[390px] lg:py-0 2xl:min-h-[420px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/homepage/job%20request.png')" }}
      aria-labelledby="about-job-request-headline"
    >
      <div
        className="absolute inset-0 bg-[#19478e] opacity-45 pointer-events-none"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center px-6">
        <h2
          id="about-job-request-headline"
          className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(22px,4vw,42px)] leading-snug text-white m-0 max-w-[700px]"
        >
          Connecting businesses with the
          <br />
          best talent is our passion.
        </h2>
        <Link
          href="/job-request"
          className="inline-flex items-center justify-center h-[50px] px-7 rounded bg-[#6ca642] text-lg font-semibold font-[var(--font-inter)] text-white no-underline transition-opacity hover:opacity-90 w-full max-w-[280px] md:max-w-none md:w-auto"
        >
          Place a Job Request
        </Link>
      </div>
    </section>
  );
}
