import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏫", title: "Academic Administrator", description: "Directing the operations and strategic goals of educational institutions.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/corporate services cards/1.jpg" },
  { icon: "🎓", title: "Instructional Designer", description: "Developing curriculum and learning materials for digital and physical classrooms.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/corporate services cards/2.jpg" },
  { icon: "🤝", title: "School Counselor", description: "Supporting students' social and academic growth through personalized guidance.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/corporate services cards/3.jpg" },
  { icon: "📝", title: "Curriculum Lead", description: "Ensuring educational standards are met through rigorous syllabus planning.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/corporate services cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
