import React from "react";

const HeroContent = () => {
  return (
    <section className="relative z-[20] mx-auto mt-28 w-full max-w-6xl px-6 pb-10 md:mt-32 md:px-10">
      <div className="rounded-2xl border border-[#7042f861] bg-[#0b0426]/60 p-8 shadow-xl shadow-[#2A0E61]/25 backdrop-blur-sm md:p-12">
        <p className="text-xs uppercase tracking-[0.22em] text-[#b49bff]">Hero</p>
        <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
          Alleluia Cervi
        </h1>
        <p className="mt-3 text-lg uppercase tracking-[0.16em] text-[#d7ccff] md:text-xl">
          Brand &amp; Digital Designer
        </p>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-200">
          I design structured visual identities and digital experiences that are
          clear, scalable, and built for real-world impact.
        </p>

        <p className="mt-6 max-w-4xl text-base leading-relaxed text-gray-300">
          I&apos;m Alleluia Cervi, a brand and digital designer focused on
          creating structured visual identities and scalable digital experiences.
          My work combines strategic design thinking with technical understanding,
          allowing me to build brands that are not only visually strong but also
          practical across real platforms.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="button-primary rounded-lg px-6 py-2 text-sm font-medium text-white"
          >
            Selected Work
          </a>
          <a
            href="#case-studies"
            className="rounded-lg border border-[#8b74ff]/50 bg-[#8b74ff]/10 px-6 py-2 text-sm font-medium text-[#e8e1ff] transition-colors hover:bg-[#8b74ff]/20"
          >
            Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
