"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
const TOOL_LOGOS = [
  "/svg1.svg",
  "/svg2.svg",
  "/svg3.svg",
  "/svg4.svg",
  "/svg5.svg",
  "/svg6.svg",
  "/svg7.svg",
  "/svg8.svg",
  "/svg9.svg",
  "/svg11.svg",
  "/svg12.svg",
];

const HeroContent = () => {
  const [showProfilePhoto, setShowProfilePhoto] = useState(true);
  const profileInitials =
    PROFILE_NAME.split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "YN";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Software Engineering & Design Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
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
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          {PROFILE_DESCRIPTION}
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4"
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
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
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
              <p className="mt-4 text-sm leading-6 text-gray-300">
                {PROFILE_DESCRIPTION}
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

          <div className="w-full rounded-[28px] border border-[#7042f861] bg-[#0b0426]/50 p-5 shadow-lg shadow-[#2A0E61]/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-[#b49bff]">
                Creative & Dev Toolkit
              </p>
              <span className="rounded-full border border-[#8b74ff]/40 bg-[#8b74ff]/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[#d9d0ff]">
                {TOOL_LOGOS.length} Icons
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
              {TOOL_LOGOS.map((logoSrc, index) => (
                <div
                  key={logoSrc}
                  className="flex h-16 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white to-[#ece6ff] p-3 shadow-inner shadow-black/5 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Image
                    src={logoSrc}
                    alt={`tool logo ${index + 1}`}
                    width={42}
                    height={42}
                    className="h-10 w-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
