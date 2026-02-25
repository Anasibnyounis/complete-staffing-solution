"use client";
import Link from "next/link";

import JobRequestSection from "@/components/JobRequestSection";
import OurSolutionsHero from "./OurSolutionsHero";
import OurSolutionsWelcome from "./OurSolutionsWelcome";
import SolutionsCategories from "./SolutionsCategories";

export default function OurSolutionsPage() {
    return (<>
           <OurSolutionsHero />
           <OurSolutionsWelcome />
           <SolutionsCategories />
            <JobRequestSection />

</>

    );
}
