import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "⚖️", title: "Legal Counsel", description: "Providing expert legal advice and representing organizational interests in legal proceedings.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/legal cards/1.jpg" },
  { icon: "📜", title: "Paralegal", description: "Supporting attorneys through legal research, document drafting, and trial preparation.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/legal cards/2.jpg" },
  { icon: "💼", title: "Legal Administrator", description: "Managing the operations, staff, and finances of law firms or legal departments.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/legal cards/3.jpg" },
  { icon: "🏛️", title: "Case Manager", description: "Coordinating legal files and ensuring all administrative steps in a case are completed timely.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/legal cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
