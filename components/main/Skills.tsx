import React from "react";

const DESIGN_SKILLS = [
  "Branding",
  "Logo Systems",
  "UI Design",
  "Typography",
  "Visual Systems",
];

const DIGITAL_SKILLS = [
  "Frontend Development",
  "Interface Systems",
  "Web Architecture",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-6 md:px-10"
    >
      <div className="rounded-2xl border border-[#7042f861] bg-[#0b0426]/60 p-8 shadow-xl shadow-[#2A0E61]/20 backdrop-blur-sm md:p-10">
        <p className="text-xs uppercase tracking-[0.22em] text-[#b49bff]">Skills</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Structured Capabilities
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white">Design</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {DESIGN_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#8b74ff]/50 bg-[#8b74ff]/10 px-3 py-1 text-sm text-[#e8e1ff]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Digital</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {DIGITAL_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/45 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
