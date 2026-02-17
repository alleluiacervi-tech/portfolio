"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="inline-flex w-fit items-center rounded-full border border-[#8b74ff]/35 bg-[#110736]/80 px-3 py-1.5 shadow-[0_8px_24px_rgba(42,14,97,0.24)]"
      >
        <SparklesIcon className="mr-2 h-4 w-4 text-[#b49bff]" />
        <h1 className="text-[10px] uppercase tracking-[0.16em] text-[#ddd5ff] md:text-[11px]">
          Core Capabilities
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mb-4 mt-4 max-w-4xl text-center text-3xl font-semibold leading-tight text-white md:text-4xl"
      >
        Design skills first, engineering depth second
      </motion.div>
      <p className="mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-300 md:text-base">
        A balanced toolkit for building brand-led interfaces that are visually
        intentional and technically reliable in production.
      </p>
    </div>
  );
};

export default SkillText;
