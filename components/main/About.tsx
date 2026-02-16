import React from "react";

const About = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 md:px-10">
      <div className="rounded-2xl border border-[#7042f861] bg-[#0b0426]/60 p-8 shadow-xl shadow-[#2A0E61]/25 backdrop-blur-sm md:p-10">
        <p className="text-xs uppercase tracking-[0.22em] text-[#b49bff]">About</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Systems-driven design with long-term clarity
        </h2>
        <p className="mt-6 max-w-4xl text-base leading-relaxed text-gray-200">
          I approach design as a system, not just an image. Every project I create
          is built with clarity, balance, and long-term usability in mind. With a
          background in digital development, I understand how identity translates
          across screens, interfaces, and environments, which helps me design
          brands that truly function in the real world.
        </p>
      </div>
    </section>
  );
};

export default About;
