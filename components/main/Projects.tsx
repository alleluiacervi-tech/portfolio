import React from "react";
import ProjectCard from "../sub/ProjectCard";

const DESIGN_PROJECTS = [
  {
    src: "/Design1.jpg",
    gallery: ["/Design1.jpg", "/Design2.jpeg", "/Design4.jpeg"],
    title: "Fintech Mobile Experience Suite",
    description:
      "A focused UI direction for trading and wallet products, combining clear chart readability, streamlined actions, and consistent interaction patterns.",
    category: "Product UI Direction",
  },
  {
    src: "/Design3.jpg",
    title: "Operations Analytics Dashboard",
    description:
      "A dark-themed dashboard system built for quick monitoring, KPI visibility, and structured information scanning across business units.",
    category: "Dashboard Systems",
  },
  {
    src: "/brand.jpg",
    gallery: ["/brand.jpg", "/brand1.jpeg"],
    title: "Brand Identity Applications",
    description:
      "A rotating showcase of brand collaterals, built to demonstrate logo flexibility, merchandise consistency, and real-world identity application.",
    category: "Brand Systems",
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
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {DESIGN_PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.src}
              gallery={project.gallery}
              title={project.title}
              description={project.description}
              category={project.category}
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
