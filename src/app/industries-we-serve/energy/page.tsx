"use client";
import Link from "next/link";

import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "./IndustryDetailPageHero";
import IndustryWelcome from "./IndustryWelcome";
import IndustryChallenges from "./IndustryChallenges";
import IndustryRoles from "./IndustryRoles";
// export const metadata = {
//     title: "Agriculture Staffing Solutions | Complete Staffing Solutions",
//     description: "Expert healthcare staffing services for hospitals, clinics, and medical facilities.",
// };

export default function AgriculturePage() {
    return (<>
           <IndustryDetailPageHero />
           <IndustryWelcome />
           <IndustryChallenges/>
           <IndustryRoles/>
            <JobRequestSection />

</>


    );
}