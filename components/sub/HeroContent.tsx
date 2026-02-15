"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const PROFILE_NAME = "Alleluia";
const PROFILE_ROLE = "Software Engineer & Graphic Designer";
const PROFILE_DESCRIPTION =
  "I combine visual design craft with full-stack engineering to deliver polished, scalable digital products from concept to launch.";
const PROFILE_PHOTO = "/alleluia.jpg";
const PROFILE_HIGHLIGHTS = [
  "UI/UX Design",
  "Design Systems",
  "Next.js",
  "TypeScript",
  "Node.js",
];
const DESIGN_TOOL_ROWS = [
  ["/svg1.svg", "/svg2.svg", "/svg3.svg", "/svg4.svg"],
  ["/svg5.svg", "/svg6.svg", "/svg7.svg"],
  ["/svg8.svg", "/svg9.svg", "/svg11.svg", "/svg12.svg"],
];

const HeroContent = () => {
  const [showProfilePhoto, setShowProfilePhoto] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const profileInitials =
    PROFILE_NAME.split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "YN";

  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : "hidden"}
      animate={prefersReducedMotion ? undefined : "visible"}
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={prefersReducedMotion ? undefined : slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Software Engineering & Design Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? undefined : slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Designing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              polished digital experiences
            </span>
            with reliable engineering
          </span>
        </motion.div>

        <motion.p
          variants={prefersReducedMotion ? undefined : slideInFromLeft(0.8)}
          className="text-lg text-gray-400 mt-4 mb-3 md:my-5 max-w-[600px]"
        >
          {PROFILE_DESCRIPTION}
        </motion.p>
        <motion.div
          variants={prefersReducedMotion ? undefined : slideInFromLeft(1)}
          className="flex flex-wrap gap-3 md:gap-4"
        >
          <a
            href="#projects"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-6"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="py-2 px-6 text-sm border border-[#8b74ff]/70 rounded-lg text-white hover:bg-[#8b74ff]/20 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
        <motion.div
          variants={prefersReducedMotion ? undefined : slideInFromLeft(1.1)}
          className="mt-1 md:mt-2 w-full max-w-[600px]"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#b49bff]">
            Design Tools
          </p>
          <div className="mt-3 md:mt-4 space-y-3 md:space-y-5">
            {DESIGN_TOOL_ROWS.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className="flex items-center justify-center gap-5 sm:gap-7 md:gap-8"
              >
                {row.map((logoSrc) => (
                  <span
                    key={logoSrc}
                    tabIndex={0}
                    className="group inline-flex items-center justify-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#8b74ff]/60"
                  >
                    <Image
                      src={logoSrc}
                      alt={`design tool ${logoSrc.replace("/svg", "").replace(".svg", "")}`}
                      width={52}
                      height={52}
                      className="h-12 w-12 sm:h-14 sm:w-14 object-contain opacity-75 saturate-50 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100 group-focus-visible:scale-105 group-focus-visible:opacity-100 group-focus-visible:saturate-100"
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={prefersReducedMotion ? undefined : slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="w-full max-w-[420px] flex flex-col gap-6">
          <div className="w-full rounded-[28px] border border-[#7042f861] bg-[#0b0426]/60 p-6 shadow-xl shadow-[#2A0E61]/30 backdrop-blur-sm">
            <div className="relative mx-auto h-[140px] w-[140px] overflow-hidden rounded-full border border-[#8b74ff]/70 bg-[#140b3c]">
              {showProfilePhoto ? (
                <Image
                  src={PROFILE_PHOTO}
                  alt={PROFILE_NAME}
                  fill
                  className="object-cover"
                  sizes="140px"
                  onError={() => setShowProfilePhoto(false)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-white">
                  {profileInitials}
                </div>
              )}
            </div>

            <div className="mt-5 text-center">
              <h2 className="text-2xl font-semibold text-white">{PROFILE_NAME}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#b49bff]">
                {PROFILE_ROLE}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {PROFILE_HIGHLIGHTS.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-[#8b74ff]/70 bg-[#8b74ff]/10 px-3 py-1 text-xs text-[#d2c8ff]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full px-2">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8b74ff]/60 to-transparent" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#b49bff]">
                Core Tools
              </p>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8b74ff]/60 to-transparent" />
            </div>
            <div className="group relative mt-4 h-[240px] w-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#8b74ff]/60" tabIndex={0}>
              <Image
                src="/mainIconsdark.svg"
                alt="technology icons"
                fill
                className="object-contain opacity-75 saturate-50 transition-all duration-300 group-hover:opacity-100 group-hover:saturate-100 group-focus-visible:opacity-100 group-focus-visible:saturate-100"
                sizes="(max-width: 768px) 90vw, 420px"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
