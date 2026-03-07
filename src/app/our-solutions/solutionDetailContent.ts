export type SolutionId = "retained" | "executive" | "contract" | "direct";

export interface SolutionDetailSection {
  title: string;
  body: string;
}

export interface SolutionDetailContent {
  title: string;
  subtitle: string;
  image: string;
  ourFocus: string;
  sections: SolutionDetailSection[];
  ourEdge: string;
}

export const SOLUTION_DETAIL_CONTENT: Record<SolutionId, SolutionDetailContent> = {
  retained: {
    title: "Retained Search",
    subtitle: "Dedicated, strategic recruitment for critical leadership roles",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    ourFocus:
      "Our retained search model is designed for critical leadership and highly specialized roles that require a dedicated, strategic recruitment approach. Through a retained partnership, we commit focused resources to delivering exceptional candidates for pivotal positions.",
    sections: [
      {
        title: "Strategic Partnership",
        body: "Working closely with client leadership, we develop a comprehensive search strategy that includes market mapping, targeted outreach, and structured candidate evaluation. This collaborative approach ensures alignment with both immediate hiring goals and broader organizational objectives.",
      },
      {
        title: "Confidential Search Process",
        body: "Retained engagements allow for a discreet and methodical search process, particularly valuable when hiring for senior leadership roles or replacing key personnel.",
      },
    ],
    ourEdge:
      "By dedicating a specialized team and leveraging deep industry networks, we provide a highly focused search experience that consistently delivers exceptional talent for mission-critical roles.",
  },
  executive: {
    title: "Executive Search",
    subtitle: "C-suite and senior leadership placement with global reach",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    ourFocus:
      "We partner with organizations to identify and secure C-suite and senior executives who are culturally aligned and results-driven. Our executive search practice combines rigorous assessment with deep market access to place leaders who shape the future of your organization.",
    sections: [
      {
        title: "C-suite and Senior Leadership",
        body: "We focus on board-level, C-suite, and senior leadership roles where fit and impact matter most. Each search is led by experienced consultants who understand both the role and the market.",
      },
      {
        title: "Global Talent Network",
        body: "Our reach extends across industries and geographies, enabling us to source and evaluate exceptional candidates who might otherwise remain undiscovered.",
      },
    ],
    ourEdge:
      "Agile, consultative, and outcome-focused—we deliver leaders who drive results and align with your culture from day one.",
  },
  contract: {
    title: "Contract Search",
    subtitle: "Flexible talent for project-based work and interim leadership",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    ourFocus:
      "We help organizations quickly access highly skilled professionals who can step in, contribute immediately, and support critical business initiatives. Our contract search services provide flexible talent solutions for project-based work, interim leadership, and specialized skill requirements.",
    sections: [
      {
        title: "Rapid Talent Deployment",
        body: "Our recruiting team maintains an active network of experienced professionals who are available to engage on short-term and long-term contract assignments. This allows us to move quickly when our clients need skilled talent to address immediate operational demands.",
      },
      {
        title: "Specialized Expertise",
        body: "Whether supporting seasonal workload fluctuations, transformation initiatives, or temporary coverage for key roles, our contract professionals bring targeted expertise and the ability to deliver results in dynamic environments.",
      },
    ],
    ourEdge:
      "We combine speed, precision, and relationship-driven recruiting to ensure our clients receive dependable professionals who integrate quickly, add immediate value, and help keep business operations moving forward.",
  },
  direct: {
    title: "Direct-Hire Search",
    subtitle: "Full-time professionals who fit your culture and goals",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
    ourFocus:
      "Our direct-hire search services help organizations secure full-time professionals who bring both technical expertise and cultural alignment. We work closely with clients to understand the strategic needs behind every hire, ensuring candidates are positioned to succeed from day one.",
    sections: [
      {
        title: "Candidate Evaluation",
        body: "Each candidate undergoes a comprehensive screening process that includes in-depth interviews, skills evaluation, and reference verification. This process ensures that every candidate presented meets the highest standards of capability and professionalism.",
      },
      {
        title: "Efficient Hiring Process",
        body: "We streamline the recruitment lifecycle by managing sourcing, screening, interview coordination, and offer facilitation—allowing hiring teams to focus on selecting the best talent rather than managing the search process.",
      },
    ],
    ourEdge:
      "Our consultative approach balances efficiency with thoroughness, delivering candidates who are not only qualified but well-suited to contribute to the long-term success of the organization.",
  },
};

export const SOLUTION_IDS: SolutionId[] = ["retained", "executive", "contract", "direct"];

export function isSolutionId(id: string): id is SolutionId {
  return SOLUTION_IDS.includes(id as SolutionId);
}
