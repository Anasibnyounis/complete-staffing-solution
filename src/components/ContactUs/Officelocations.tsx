"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Office {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  fax?: string;
}

const OFFICES: Office[] = [
  {
    name: "Marlborough Office",
    address: "33 Boston Post Road West, Suite 190",
    city: "Marlborough",
    state: "MA 01752",
    phone: "(508) 460-6600",
    fax: "(508) 460-6631",
  },
  {
    name: "Boston Office",
    address: "100 Summer Street, 17th Floor",
    city: "Boston",
    state: "MA 02110",
    phone: "(617) 555-0123",
  },
  {
    name: "Providence Office",
    address: "50 Kennedy Plaza",
    city: "Providence",
    state: "RI 02903",
    phone: "(401) 555-0145",
  },
  {
    name: "Hartford Office",
    address: "10 State House Square",
    city: "Hartford",
    state: "CT 06103",
    phone: "(860) 555-0199",
  },
  {
    name: "Burlington Office",
    address: "25 Burlington Mall Road, Suite 406",
    city: "Burlington",
    state: "MA 01803",
    phone: "(781) 270-0004",
  },
  {
    name: "Shelton Office",
    address: "2 Corporate Drive, Suite 943",
    city: "Shelton",
    state: "CT 06484",
    phone: "(203) 533-2110",
  },
  {
    name: "Fort Myers Office",
    address: "4575 Via Royale Suite 218",
    city: "Fort Myers",
    state: "FL 33907",
    phone: "(239) 555-0185",
  },
  {
    name: "Remote & National",
    address: "Serving clients across the U.S.",
    city: "",
    state: "",
    phone: "(401) 475-8800",
  },
];

const ACCENT_COLORS = [
  { border: "border-t-[#19478e]", bg: "bg-[#19478e]", hover: "hover:bg-[#143474]", shadow: "shadow-[#19478e]/20" },
  { border: "border-t-[#6CA642]", bg: "bg-[#6CA642]", hover: "hover:bg-[#5d9338]", shadow: "shadow-[#6CA642]/20" },
  { border: "border-t-[#225eb9]", bg: "bg-[#225eb9]", hover: "hover:bg-[#1a4a94]", shadow: "shadow-[#225eb9]/20" },
  { border: "border-t-[#0d7a3e]", bg: "bg-[#0d7a3e]", hover: "hover:bg-[#0a6232]", shadow: "shadow-[#0d7a3e]/20" },
  { border: "border-t-[#19478e]", bg: "bg-[#19478e]", hover: "hover:bg-[#143474]", shadow: "shadow-[#19478e]/20" },
];

const OfficeLocations: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-sky-50/50 to-amber-50/30 py-16 sm:py-20 md:py-24">
      <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-16">
        <div className="mb-14 text-center">
          <span className="inline-block text-[#19478e] font-semibold text-sm uppercase tracking-wider mb-2">
            Find us
          </span>
          <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(26px,3.5vw,34px)] font-bold text-neutral-900 mb-3">
            Our Offices
          </h2>
          <p className="font-[var(--font-inter)] text-sm sm:text-base text-neutral-600 max-w-[640px] mx-auto leading-relaxed">
            Connect with the Complete Staffing Solutions team closest to you. We partner with clients and candidates across New England and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {OFFICES.map((office, i) => {
            const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
            return (
              <div
                key={office.name}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-neutral-100 hover:border-[#19478e]/30 transition-all duration-300 overflow-hidden flex flex-col border-t-4 ${accent.border}`}
              >
                <div className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden bg-neutral-100">
                  <Image
                    src="/contact us/map.png"
                    alt={`${office.name} location`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col gap-3 p-6 font-[var(--font-inter)]">
                  <h3 className="text-[16px] sm:text-lg font-bold text-[#19478e] mb-0.5">
                    {office.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {office.address}
                    {office.city && (
                      <>
                        <br />
                        {office.city}
                        {office.state && `, ${office.state}`}
                      </>
                    )}
                    {office.state && !office.city && (
                      <>
                        <br />
                        {office.state}
                      </>
                    )}
                  </p>
                  <p className="text-sm font-medium text-neutral-800">
                    Phone: {office.phone}
                    {office.fax && (
                      <>
                        <br />
                        Fax: {office.fax}
                      </>
                    )}
                  </p>
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address + (office.city ? ` ${office.city} ${office.state}` : ""))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-xl ${accent.bg} px-4 py-2.5 text-sm font-semibold text-white shadow-md ${accent.hover} hover:shadow-lg transition-all duration-200 no-underline`}
                  >
                    Get Directions
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
