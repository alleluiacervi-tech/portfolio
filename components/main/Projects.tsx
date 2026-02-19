import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { developmentProjects } from "@/constants/projects";

const Projects = () => {
  return (
    <section id="projects" className="section-shell relative pb-20 pt-12 md:pb-24 md:pt-14">
      <div className="clean-divider" />

      <div id="development-projects" className="pt-12 md:pt-14">
        <p className="section-eyebrow">Software Development</p>
        <h2 className="section-title mt-3">Development Projects</h2>
        <p className="section-intro">
          Production-oriented systems where architecture, performance, and
          reliability support practical product execution.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {developmentProjects.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.src}
              title={project.title}
              summary={project.summary}
              category={project.category}
              purpose={project.purpose}
              concept={project.concept}
              result={project.result}
              variant="plain"
            />
          ))}
        </div>
        <div className="mt-10 border-t border-[#8b74ff]/25 pt-8 md:mt-12">
          <p className="section-eyebrow">Private Projects</p>
          <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
            And Many Other Private Projects
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Beyond the public portfolio, I have delivered multiple confidential
            products for organizations and teams, including internal financial
            workflows, operations platforms, and secure management dashboards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
