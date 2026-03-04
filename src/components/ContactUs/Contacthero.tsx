"use client";

import React from "react";
import Link from "next/link";

const CONTACT_REASONS = [
  "I'm an employer looking for talent",
  "I'm a job seeker looking for opportunities",
  "I'm interested in partnering with your team",
  "I have a general question",
];

const ContactHero: React.FC = () => {
  return (
    <>
      {/* Hero with gradient */}
      <section className="w-full bg-gradient-to-br from-[#19478e] via-[#225eb9] to-[#2d7ac7] flex items-center justify-center min-h-[160px] sm:min-h-[180px] px-4 sm:px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
        <h1 className="font-[var(--font-plus-jakarta)] font-bold text-white text-[clamp(28px,4.5vw,44px)] uppercase tracking-wide m-0 relative z-10 drop-shadow-sm">
          Contact Us
        </h1>
      </section>

      {/* Intro + CTA - soft colored background */}
      <section className="w-full bg-gradient-to-b from-sky-50/80 to-white py-14 sm:py-16 md:py-20 border-b border-sky-100/60">
        <div className="w-full max-w-[920px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="font-[var(--font-inter)] text-[15px] sm:text-base md:text-[17px] leading-relaxed text-neutral-700 mb-2">
            We appreciate your interest and are here to assist you. Our dedicated team is ready to respond promptly, or you can schedule a time for us to reach out.
          </p>
          <p className="font-[var(--font-inter)] text-sm sm:text-base text-neutral-600 mb-8">
            Select a topic below so we can route your message to the right specialist.
          </p>
          <div className="w-full max-w-[540px] mx-auto">
            <label htmlFor="contact-reason" className="sr-only">
              What are you reaching out about?
            </label>
            <select
              id="contact-reason"
              className="w-full rounded-xl border-2 border-sky-200 bg-white px-4 py-3.5 text-sm sm:text-base text-neutral-800 shadow-md shadow-sky-100/50 focus:outline-none focus:ring-2 focus:ring-[#19478e] focus:border-[#19478e] focus:shadow-lg focus:shadow-[#19478e]/20 cursor-pointer transition-all"
              defaultValue=""
            >
              <option value="" disabled>
                Please select a topic
              </option>
              {CONTACT_REASONS.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <Link
              href="mailto:Contactus@completestaffingsolutions.com"
              className="group inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-lg shadow-sky-100/60 border border-sky-100 text-[#19478e] font-semibold text-sm sm:text-base hover:bg-[#19478e] hover:text-white hover:shadow-xl hover:shadow-[#19478e]/25 hover:border-[#19478e]/30 transition-all duration-300 no-underline"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#19478e] text-white group-hover:bg-white/20 transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Contactus@completestaffingsolutions.com
            </Link>
            <Link
              href="tel:+14014758800"
              className="group inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-lg shadow-emerald-100/60 border border-emerald-100 text-[#0d7a3e] font-semibold text-sm sm:text-base hover:bg-[#6CA642] hover:text-white hover:shadow-xl hover:shadow-[#6CA642]/25 hover:border-[#6CA642]/30 transition-all duration-300 no-underline"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6CA642] text-white group-hover:bg-white/20 transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              (401) 475-8800
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHero;
