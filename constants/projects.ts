export type PortfolioProject = {
  src: string;
  gallery?: string[];
  title: string;
  summary: string;
  category: string;
  purpose: string;
  concept: string;
  result: string;
  featured?: boolean;
};

export const selectedDesignProjects: PortfolioProject[] = [
  {
    src: "/brand.jpg",
    gallery: ["/brand.jpg", "/brand1.jpeg"],
    title: "Brand Identity Applications",
    summary:
      "A cohesive identity direction translated into practical touchpoints across merchandise, communication assets, and digital surfaces.",
    category: "Brand Identity",
    purpose:
      "Build a flexible brand system that stays recognizable across different formats.",
    concept:
      "A modular visual language balancing bold typography, simple geometry, and controlled color hierarchy.",
    result:
      "Delivered a scalable identity toolkit that improved consistency and clarity across brand outputs.",
    featured: true,
  },
  {
    src: "/operations-dashboard-1.jpg",
    gallery: ["/operations-dashboard-2.jpg", "/operations-dashboard-3.jpg"],
    title: "Operations Analytics Dashboard",
    summary:
      "A dashboard environment designed for quick executive scanning and confident data-led decisions.",
    category: "UI System",
    purpose:
      "Reduce interpretation time for teams monitoring KPIs, operations, and performance health.",
    concept:
      "A dense but readable dark interface using spacing rhythm, contrast, and component repetition for fast orientation.",
    result:
      "Created a clear interface system that supports quicker insight extraction and cleaner reporting workflows.",
  },
  {
    src: "/Fintech.png",
    gallery: [
      "/Fintech1.png",
      "/Fintech2.jpeg",
      "/Fintech3.jpeg",
      "/Fintech4.jpeg",
    ],
    title: "Fintech Mobile Experience Suite",
    summary:
      "A high-clarity mobile visual direction for trading and wallet experiences with confident interaction patterns.",
    category: "Visual Design",
    purpose:
      "Improve trust and usability in complex financial actions on smaller screens.",
    concept:
      "Used structured typography, intentional color signaling, and streamlined action paths to simplify decisions.",
    result:
      "Produced a polished mobile design language with stronger readability and more predictable task flow.",
  },
];

export const developmentProjects: PortfolioProject[] = [
  {
    src: "/blockchain.jpg",
    title: "Blockchain Network Platform Concept",
    summary:
      "A distributed product concept covering secure transaction logic and network coordination at scale.",
    category: "Software Development",
    purpose:
      "Model a trustworthy architecture for high-integrity transactions and system interoperability.",
    concept:
      "Mapped platform layers from wallet flow to network confirmation using clear system boundaries.",
    result:
      "Delivered a technically grounded concept framework suitable for phased implementation planning.",
  },
  {
    src: "/forex.jpg",
    title: "Forex Trading Platform",
    summary:
      "A market-facing product direction optimized for speed, chart legibility, and fast trading actions.",
    category: "Software Development",
    purpose:
      "Help active users make timely decisions with cleaner market visibility and reduced cognitive load.",
    concept:
      "Combined real-time data presentation with action-focused layouts and concise information hierarchy.",
    result:
      "Established a practical product blueprint that balances data density with interaction clarity.",
  },
  {
    src: "/smart.jpg",
    title: "Smart Cooperative Platform",
    summary:
      "A cooperative operations platform designed for transparent fund management and operational accountability.",
    category: "Software Development",
    purpose:
      "Strengthen financial transparency and reduce manual inefficiencies in cooperative workflows.",
    concept:
      "Structured the product around auditable records, role-based actions, and visible decision trails.",
    result:
      "Produced a solution direction that supports trust, accountability, and day-to-day governance.",
  },
];
