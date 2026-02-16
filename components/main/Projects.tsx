import React from "react";
import ProjectCard from "../sub/ProjectCard";

const DESIGN_PROJECTS = [
  {
    src: "/edit2.png",
    title: "Editorial Brand Campaign System",
    description:
      "A cohesive digital campaign direction built with modular layouts, intentional typography rhythm, and brand-consistent visual storytelling.",
    category: "Brand & Visual System",
  },
  {
    src: "/nikedash.png",
    title: "Product Marketing Dashboard Concept",
    description:
      "A design-led dashboard concept focused on clear hierarchy, structured data visibility, and high-contrast decision support for teams.",
    category: "Digital Experience Design",
  },
  {
    src: "/profiol3.png",
    title: "Portfolio Visual Language Exploration",
    description:
      "A design study centered on tone, spacing cadence, and component consistency to create a professional studio-level portfolio presence.",
    category: "Interface Direction",
  },
];

const DEVELOPMENT_PROJECTS = [
  {
    src: "/NextWebsite.png",
    title: "Modern Next.js Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    src: "/CardImage.png",
    title: "Interactive Website Cards",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    src: "/SpaceWebsite.png",
    title: "Space Themed Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
