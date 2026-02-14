// import JobHero from "@/components/OpenPosition/Jobhero";
// import FeaturedJobs from "@/components/OpenPosition/Featuredjobs";
// import LatestJobsTable from "@/components/OpenPosition/Latestjobstable";
// import JobRequestSection from "@/components/JobRequestSection";
// export const metadata = {
//   title: "Open Positions | Complete Staffing Solutions",
//   description: "Browse current job openings and apply today. Find your next opportunity with Complete Staffing Solutions.",
// };

// export default function OpenPositionPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <JobHero />
//       <FeaturedJobs />
//       <LatestJobsTable />
//       <JobRequestSection/>
//     </main>
//   );
// }
// src/app/open-position/page.tsx
"use client";
import JobHero from "@/components/Openposition/Jobhero";
import FeaturedJobs from "@/components/Openposition/Featuredjobs";
import LatestJobsTable from "@/components/Openposition/Latestjobstable";
import CommitmentSection from "@/components/JobSeekerOverview/Commitmentsection";

import JobRequestSection from "@/components/JobRequestSection";

export default function OpenPositionPage() {
  return (
    <main className="min-h-screen bg-white">
      <CommitmentSection />
      <JobHero />
      <FeaturedJobs />
      <LatestJobsTable />
      <JobRequestSection />
    </main>
  );
}
