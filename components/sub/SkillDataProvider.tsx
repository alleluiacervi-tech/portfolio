"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  label?: string;
}

const SkillDataProvider = ({ src, width, height, index, label }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.06;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.35 }}
      className="flex min-h-[108px] min-w-[108px] flex-col items-center justify-center rounded-xl border border-[#8b74ff]/25 bg-[#110736]/55 px-4 py-3 text-center shadow-[0_8px_24px_rgba(16,8,42,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8b74ff]/50 hover:bg-[#130a3d]/70"
    >
      <Image src={src} width={width} height={height} alt={`${label ?? "skill"} icon`} />
      {label ? (
        <p className="mt-2 text-[11px] leading-tight text-slate-300">{label}</p>
      ) : null}
    </motion.div>
  );
};

export default SkillDataProvider;
