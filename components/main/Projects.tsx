import React from "react";
import ProjectCard from "../sub/ProjectCard";

const DESIGN_PROJECTS = [
  {
    src: "/Design4.jpeg",
    title: "Forex App Interface Direction",
    description:
      "A mobile-first trading interface concept balancing bold visual hierarchy, real-time data readability, and action-focused interaction patterns.",
    category: "Fintech Product Design",
  },
  {
    src: "/Design1.jpg",
    title: "Crypto Trading Mobile UI",
    description:
      "A clean and intuitive chart-first layout designed to support high-frequency decision making with clear buy and sell pathways.",
    category: "Mobile Experience Design",
  },
  {
    src: "/Design2.jpeg",
    title: "Digital Wallet Dashboard",
    description:
      "A polished dual-screen mobile dashboard that combines account management, transfer actions, and performance metrics in a cohesive flow.",
    category: "UI/UX Design",
  },
  {
    src: "/Design3.jpg",
    title: "Operations Analytics Dashboard",
    description:
      "A dark-themed dashboard system built for quick monitoring, KPI visibility, and structured information scanning across business units.",
    category: "Interface Systems",
  },
  {
    src: "/brand.jpg",
    title: "Monochrome Brand Merch Collection",
    description:
      "A full merchandise mockup set demonstrating logo consistency, print hierarchy, and practical brand usage across physical touchpoints.",
    category: "Brand Identity",
  },
  {
    src: "/brand1.jpeg",
    title: "Dexlomri Brand Application Kit",
    description:
      "A vibrant brand application study spanning apparel, accessories, and digital product surfaces with unified visual language.",
    category: "Brand Application",
  },
];

const DEVELOPMENT_PROJECTS = [
  {
    src: "/blockchain.jpg",
    title: "Blockchain Network Platform Concept",
    description:
      "A blockchain-focused product concept illustrating distributed architecture, secure transaction routes, and network-level system communication.",
  },
  {
    src: "/CardImage.png",
    title: "Interactive Website Cards",
    description:
      "A responsive component suite with layered card interactions, smooth transitions, and accessibility-focused behavior for modern web interfaces.",
  },
  {
    src: "/SpaceWebsite.png",
    title: "Space Themed Website",
    description:
      "An immersive website experience blending motion, storytelling, and scalable front-end architecture for performance-oriented delivery.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-8 md:py-12">
      <div id="design-work" className="section-shell">
        <p className="section-eyebrow">Design First</p>
        <h2 className="section-title mt-3">Selected Design Work</h2>
        <p className="section-intro">
          A selection of visual and brand-focused work highlighting strategy,
          structure, and polished execution before implementation.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {DESIGN_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              src={project.src}
              title={project.title}
              description={project.description}
              category={project.category}
              featured
              className={index === 0 ? "md:col-span-2" : ""}
            />
          ))}
        </div>
      </div>

      <div className="section-shell mt-14 md:mt-16">
        <div className="clean-divider" />
      </div>

      <div id="development-projects" className="section-shell pb-20 pt-14 md:pb-24 md:pt-16">
        <p className="section-eyebrow">Development Projects</p>
        <h2 className="section-title mt-3">My Projects</h2>
        <p className="section-intro">
          Production-oriented builds where software architecture and performance
          support real product needs.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DEVELOPMENT_PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.src}
              title={project.title}
              description={project.description}
              category="Software Development"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
