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
      className="flex min-h-[96px] min-w-[84px] flex-col items-center justify-center px-2 py-2 text-center opacity-90 transition-all duration-300 hover:opacity-100"
    >
      <Image src={src} width={width} height={height} alt={`${label ?? "skill"} icon`} />
      {label ? (
        <p className="mt-2 text-[11px] leading-tight text-slate-300">{label}</p>
      ) : null}
    </motion.div>
  );
};

export default SkillDataProvider;
