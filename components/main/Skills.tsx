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

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-shell relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-20 pb-44 md:py-24 md:pb-56"
      style={{ transform: "scale(0.96)" }}
    >
      <SkillText />

      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5 md:gap-6">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5 md:gap-6">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5 md:gap-6">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5 md:gap-6">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5 md:gap-6">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="absolute h-full w-full">
        <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover opacity-30">
          <video
            className="h-auto w-full"
            preload="false"
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
