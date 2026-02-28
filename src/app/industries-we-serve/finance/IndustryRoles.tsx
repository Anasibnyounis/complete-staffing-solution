import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "💰", title: "Financial Analyst", description: "Analyzing financial data to guide business decisions and investment strategies.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/finance cards/1.jpg" },
  { icon: "📈", title: "Investment Banker", description: "Facilitating capital raising and advisory services for corporate mergers and acquisitions.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/finance cards/2.jpg" },
  { icon: "🏦", title: "Tax Manager", description: "Ensuring tax compliance and developing strategies for tax optimization and reporting.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/finance cards/3.jpg" },
  { icon: "📉", title: "Risk Officer", description: "Developing frameworks to identify and manage operational and market-related financial risks.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/finance cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
