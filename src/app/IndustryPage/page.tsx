import StaaffingIndustryHero from "@/components/StaffingIndustry/StaffingIndustryHero";
import ChallengesSection from "@/components/StaffingIndustry/ChallengeSection";
import RolesSection from "@/components/StaffingIndustry/RoleSection";
// import WelcomeSection from "@/components/StaffingIndustry/WelcomeSection";
import Welcomesection from "@/components/StaffingIndustry/Welcomesection";
export default function industryPage() {
    return (
        <main >
            <StaaffingIndustryHero />
            {/* <WelcomeSection/> */}
            <Welcomesection />
            <ChallengesSection />
            <RolesSection />

        </main>
    );
}
