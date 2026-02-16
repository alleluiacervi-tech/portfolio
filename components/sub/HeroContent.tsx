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

const PROFILE_NAME = "Alleluia Cervi";
const PROFILE_PRIMARY_DESCRIPTOR = "Brand & Digital Designer";
const PROFILE_SECONDARY_DESCRIPTOR = "Designer with Development Expertise";
const PROFILE_DEVELOPMENT_ROLE = "Software Developer";
const PROFILE_DESCRIPTION =
  "I combine brand thinking, visual craft, and full-stack engineering to deliver polished digital products from concept to launch.";
const PROFILE_ABOUT =
  "I approach every project with strategic thinking, using design systems and strong visual structure to create scalable solutions that perform in real-world usability.";
const PROFILE_PHOTO = "/alleluia.jpg";
const PROFILE_HIGHLIGHTS = [
  "Brand Identity",
  "Digital Direction",
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
      .toUpperCase() || "AC";

  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : "hidden"}
      animate={prefersReducedMotion ? undefined : "visible"}
      className="z-[20] mt-28 flex w-full flex-col-reverse items-center justify-center gap-14 px-6 md:mt-32 md:flex-row md:px-10 xl:px-16"
    >
      <div className="m-auto flex h-full w-full max-w-2xl flex-col justify-center gap-6 text-start">
        <motion.div
          variants={prefersReducedMotion ? undefined : slideInFromTop}
          className="inline-flex w-fit items-center rounded-full border border-[#8b74ff]/35 bg-[#10082c]/80 px-3 py-1.5 shadow-[0_8px_24px_rgba(42,14,97,0.26)] backdrop-blur-sm"
        >
          <SparklesIcon className="mr-1.5 h-3.5 w-3.5 text-[#b49bff]" />
          <h1 className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#d8d0ff] md:text-[11px]">
            Brand & Digital Designer
          </h1>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? undefined : slideInFromLeft(0.5)}
          className="mt-2 flex max-w-[640px] flex-col text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          <span>
            Crafting
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              strategic brand-led digital experiences{" "}
            </span>
            with development precision
          </span>
        </motion.div>

        <motion.p
          variants={prefersReducedMotion ? undefined : slideInFromLeft(0.8)}
          className="max-w-[620px] text-base leading-relaxed text-slate-300 md:text-lg"
        >
          {PROFILE_DESCRIPTION}
        </motion.p>

        <motion.div
          variants={prefersReducedMotion ? undefined : slideInFromLeft(1)}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#design-work"
            className="button-primary inline-flex cursor-pointer items-center justify-center rounded-lg px-6 py-2 text-center text-sm font-medium text-white md:text-base"
          >
            View Projects
          </a>
          <a
            href="#development-projects"
            className="inline-flex items-center justify-center rounded-lg border border-[#8b74ff]/45 bg-[#10082c]/75 px-6 py-2 text-sm font-medium text-[#ddd5ff] transition-all duration-300 hover:border-[#8b74ff]/75 hover:bg-[#8b74ff]/15 hover:text-white md:text-base"
          >
            Development Projects
          </a>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? undefined : slideInFromLeft(1.05)}
          className="panel-card mt-1 max-w-[620px] px-5 py-5 md:px-6"
        >
          <p className="section-eyebrow">About</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            {PROFILE_ABOUT}
          </p>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? undefined : slideInFromLeft(1.1)}
          className="panel-card mt-1 w-full max-w-[620px] px-5 py-5 md:px-6"
        >
          <div className="flex items-center gap-3">
            <p className="section-eyebrow">Design Tools</p>
            <span className="clean-divider" />
          </div>
          <div className="mt-4 space-y-3 md:space-y-5">
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
                      className="h-12 w-12 object-contain opacity-75 saturate-50 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100 group-focus-visible:scale-105 group-focus-visible:opacity-100 group-focus-visible:saturate-100 sm:h-14 sm:w-14"
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
        className="flex h-full w-full items-center justify-center"
      >
        <div className="flex w-full max-w-[420px] flex-col gap-6">
          <div className="panel-card rounded-[28px] p-6">
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
              <h2 className="text-2xl font-semibold text-white md:text-[30px]">
                {PROFILE_NAME}
              </h2>
              <p className="mt-2 text-sm font-medium text-[#e7deff]">
                {PROFILE_PRIMARY_DESCRIPTOR}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#b49bff]">
                {PROFILE_SECONDARY_DESCRIPTOR}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-slate-300">
                {PROFILE_DEVELOPMENT_ROLE}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Design-first execution with production-ready implementation.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
                {PROFILE_HIGHLIGHTS.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-[#8b74ff]/70 bg-[#8b74ff]/10 px-3 py-1 text-[11px] text-[#d2c8ff]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="panel-card w-full px-3 py-5">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8b74ff]/60 to-transparent" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#b49bff]">
                Core Tools
              </p>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8b74ff]/60 to-transparent" />
            </div>
            <div
              className="group relative mt-4 h-[280px] w-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#8b74ff]/60 md:h-[300px]"
              tabIndex={0}
            >
              <Image
                src="/mainIconsdark.svg"
                alt="technology icons"
                fill
                className="scale-[1.16] object-contain opacity-75 saturate-50 transition-all duration-300 group-hover:opacity-100 group-hover:saturate-100 group-focus-visible:opacity-100 group-focus-visible:saturate-100 md:scale-[1.2]"
                sizes="(max-width: 768px) 92vw, 460px"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
