"use client";
import Link from "next/link";

import JobRequestSection from "@/components/JobRequestSection";
import IndustryDetailPageHero from "../industries-we-serve/healthcare/IndustryDetailPageHero";
import OurSolutionsWelcome from "./OurSolutionsWelcome";
import IndustryChallenges from "../industries-we-serve/healthcare/IndustryChallenges";
import IndustryRoles from "../industries-we-serve/healthcare/IndustryRoles";

export default function OurSolutionsPage() {
    return (<>
           <IndustryDetailPageHero />
           <OurSolutionsWelcome />
           <IndustryChallenges/>
           <IndustryRoles/>
            <JobRequestSection />

</>

    );
}
