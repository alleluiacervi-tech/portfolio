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

const PROFILE_NAME = "Your Name";
const PROFILE_ROLE = "Full Stack Software Engineer";
const PROFILE_DESCRIPTION =
  "Write a short professional summary here. Highlight your strengths, experience, and the value you bring to projects.";
const PROFILE_PHOTO = "/profiol3.png";

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
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
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
            </div>
          </div>

          <div className="w-full rounded-[28px] border border-[#7042f861] bg-[#0b0426]/50 p-5 shadow-lg shadow-[#2A0E61]/20 backdrop-blur-sm">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-[#b49bff]">
              Core Tools
            </p>
            <div className="relative mt-4 h-[180px] w-full">
              <Image
                src="/mainIconsdark.svg"
                alt="technology icons"
                fill
                className="object-contain"
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
