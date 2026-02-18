import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

type SkillItem = {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
};

const normalizeSkillName = (skillName: string) =>
  skillName.toLowerCase().replace(/\s+/g, " ").trim();

const allSkills: SkillItem[] = [
  ...Skill_data,
  ...Frontend_skill,
  ...Backend_skill,
  ...Full_stack,
  ...Other_skill,
];

const uniqueSkills = Array.from(
  allSkills.reduce((skillMap, skill) => {
    const normalizedName = normalizeSkillName(skill.skill_name);
    if (!skillMap.has(normalizedName)) {
      skillMap.set(normalizedName, skill);
    }
    return skillMap;
  }, new Map<string, SkillItem>()).values(),
);

const DESIGN_PRIORITY = [
  "Figma",
  "Framer Motion",
  "Tailwind Css",
  "Material UI",
  "Next.js",
  "React",
];

const skillByName = new Map(
  uniqueSkills.map((skill) => [normalizeSkillName(skill.skill_name), skill]),
);

const designSkills = DESIGN_PRIORITY.map((skillName) =>
  skillByName.get(normalizeSkillName(skillName)),
).filter((skill): skill is SkillItem => Boolean(skill));

const designSkillNames = new Set(
  designSkills.map((skill) => normalizeSkillName(skill.skill_name)),
);

const developmentSkills = uniqueSkills.filter(
  (skill) => !designSkillNames.has(normalizeSkillName(skill.skill_name)),
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-shell relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-16 md:py-20"
    >
      <SkillText />

      <div className="grid w-full gap-6">
        <div className="panel-card">
          <div className="flex items-center justify-between gap-3">
            <p className="section-eyebrow">Design Skills</p>
            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
              Primary Focus
            </p>
          </div>
          <div className="mt-5 flex flex-row flex-wrap items-center justify-center gap-3 md:gap-4">
            {designSkills.map((skill, index) => (
              <SkillDataProvider
                key={`design-${skill.skill_name}`}
                src={skill.Image}
                width={skill.width}
                height={skill.height}
                index={index}
                label={skill.skill_name}
              />
            ))}
          </div>
        </div>

        <div className="panel-card">
          <div className="flex items-center justify-between gap-3">
            <p className="section-eyebrow">Development Skills</p>
            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
              Secondary Depth
            </p>
          </div>
          <div className="mt-5 flex flex-row flex-wrap items-center justify-center gap-3 md:gap-4">
            {developmentSkills.map((skill, index) => (
              <SkillDataProvider
                key={`development-${skill.skill_name}`}
                src={skill.Image}
                width={skill.width}
                height={skill.height}
                index={index}
                label={skill.skill_name}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute h-full w-full">
        <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover opacity-20">
          <video
            className="h-auto w-full"
            preload="metadata"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
