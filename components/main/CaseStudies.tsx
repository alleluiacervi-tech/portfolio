import React from "react";

type CaseStudy = {
  title: string;
  type: string;
  objective: string;
  strategy: string;
  concept: string;
  designSystem: string[];
  application: string[];
  outcome: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "BKreative Identity Concept",
    type: "Concept Branding Project",
    objective:
      "To create a visual identity that reflects Bank of Kigali's legacy while introducing a creative-forward expression suitable for future innovation.",
    strategy:
      "Rather than redesigning the existing brand language, the goal was to evolve it while maintaining familiarity and institutional recognition.",
    concept:
      "The identity integrates the letters B and C with a handshake symbol, representing partnership, empowerment, and collaboration. The square frame reinforces stability and structure, while the curved form of the C introduces creativity and motion.",
    designSystem: [
      "Structured geometry for stability",
      "Deep blue palette for trust",
      "Minimal stroke style for timelessness",
    ],
    application: ["Mobile", "Web", "Print", "Icon"],
    outcome:
      "A recognizable, institutional-grade identity that honors legacy while supporting future growth.",
  },
  {
    title: "Trust Tickets Branding",
    type: "Client Project",
    objective:
      "To build a service brand identity that communicates reliability and effortless access for digital ticketing users.",
    strategy:
      "The visual direction prioritized trust cues, simplified navigation patterns, and a flexible identity system that scales across campaigns.",
    concept:
      "The brand language combines structured forms and clear iconography to reflect verification, confidence, and fast digital interaction.",
    designSystem: [
      "Verification-inspired symbol logic",
      "High-contrast palette for readability",
      "UI-first typography hierarchy",
    ],
    application: ["Mobile", "Web", "Print", "Icon"],
    outcome:
      "A consistent identity system that improves brand recall and supports conversion-focused digital touchpoints.",
  },
  {
    title: "Digital Platform UI System",
    type: "Personal Project",
    objective:
      "To create a scalable interface framework that aligns visual consistency with practical implementation across product screens.",
    strategy:
      "I translated brand principles into reusable interface rules so teams can move faster without sacrificing coherence.",
    concept:
      "A modular UI foundation built around layout rhythm, clear component states, and predictable interaction behavior.",
    designSystem: [
      "Component-based structure and spacing",
      "Semantic color and feedback states",
      "Consistent typography scale",
    ],
    application: ["Mobile", "Web", "Print", "Icon"],
    outcome:
      "A production-ready UI system that reduces design drift and enables scalable digital execution.",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="mx-auto w-full max-w-6xl px-6 md:px-10">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b49bff]">
            Case Studies
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Structured Project Breakdowns
          </h2>
        </div>

        <div className="grid gap-6">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.title}
              className="rounded-2xl border border-[#7042f861] bg-[#0b0426]/60 p-6 shadow-xl shadow-[#2A0E61]/20 backdrop-blur-sm md:p-8"
            >
              <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[#b49bff]">
                Type: {study.type}
              </p>

              <div className="mt-6 grid gap-5 text-gray-200">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Objective
                  </p>
                  <p className="mt-2 leading-relaxed">{study.objective}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Strategy
                  </p>
                  <p className="mt-2 leading-relaxed">{study.strategy}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Concept
                  </p>
                  <p className="mt-2 leading-relaxed">{study.concept}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Design System
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {study.designSystem.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-[#8b74ff]/50 bg-[#8b74ff]/10 px-3 py-1 text-sm text-[#e4dcff]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Application
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {study.application.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-cyan-400/45 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-100"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Outcome
                  </p>
                  <p className="mt-2 leading-relaxed">{study.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
