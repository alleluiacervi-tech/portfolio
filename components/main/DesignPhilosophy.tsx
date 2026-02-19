import React from "react";

const PHILOSOPHY_POINTS = [
  {
    title: "Strategy Before Styling",
    description:
      "Every direction starts with brand intent, audience behavior, and business priorities before visual treatment.",
  },
  {
    title: "Systems Over Screens",
    description:
      "I design reusable structures and rules so interfaces scale consistently across products, teams, and future iterations.",
  },
  {
    title: "Execution in Reality",
    description:
      "Design decisions account for implementation constraints, performance, and maintainability from day one.",
  },
];

const DesignPhilosophy = () => {
  return (
    <section id="design-philosophy" className="section-shell py-8 md:py-10">
      <div className="panel-card">
        <p className="section-eyebrow">Design Philosophy</p>
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
          Strategic systems that connect brand clarity with product delivery
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
          I approach design as a business tool, not decoration. The goal is to
          translate strategy into clear visual systems that teams can implement,
          scale, and maintain without losing brand quality.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {PHILOSOPHY_POINTS.map((point) => (
            <div
              key={point.title}
              className="border-l border-[#8b74ff]/35 pl-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#dcd2ff]">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
