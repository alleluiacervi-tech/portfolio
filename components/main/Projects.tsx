import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 md:px-10">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[#b49bff]">
          Selected Work
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Three Featured Projects
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <ProjectCard
          src="/NextWebsite.png"
          title="BKreative Identity Concept"
          description="Concept project focused on structured branding, legacy alignment, and future-facing visual expression."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Trust Tickets Branding"
          description="Client branding system designed for trust, recognition, and clarity across digital service touchpoints."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Digital Platform UI System"
          description="Personal system project built to scale interfaces through reusable components, hierarchy, and consistency."
        />
      </div>
    </section>
  );
};

export default Projects;
