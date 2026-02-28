import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🖥️", title: "Network Administrator", description: "Managing and maintaining organizational networks to ensure maximum connectivity.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/hardware cards/1.jpg" },
  { icon: "🛠️", title: "Systems Engineer", description: "Designing and installing complex hardware systems and computing infrastructures.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/hardware cards/2.jpg" },
  { icon: "🛡️", title: "Cybersecurity Expert", description: "Protecting physical and digital assets through advanced network security protocols.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/hardware cards/3.jpg" },
  { icon: "📟", title: "Hardware Engineer", description: "Testing and optimizing computer components for high-performance computing.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/hardware cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
