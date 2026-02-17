import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { selectedDesignProjects } from "@/constants/projects";

const SelectedDesignWork = () => {
  return (
    <section id="design-work" className="section-shell py-10 md:py-14">
      <p className="section-eyebrow">Portfolio Focus</p>
      <h2 className="section-title mt-3">Selected Design Work</h2>
      <p className="section-intro">
        Brand, visual, and interface work led with strategic structure. Each
        project frames intent, design direction, and measurable outcome.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {selectedDesignProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            src={project.src}
            gallery={project.gallery}
            title={project.title}
            summary={project.summary}
            category={project.category}
            purpose={project.purpose}
            concept={project.concept}
            result={project.result}
            featured={project.featured ?? index === 0}
            className={index === 0 ? "md:col-span-2" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectedDesignWork;
