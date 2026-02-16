"use client";
import React from "react";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const SECURITY_HIGHLIGHTS = [
  "Optimized Performance",
  "End-to-End Encryption",
  "Scalable Architecture",
];

const Encryption = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell">
      <div className="clean-divider" />
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="relative py-8 md:py-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(139,116,255,0.18),transparent_48%)]" />
        <div className="relative grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="section-eyebrow">Performance & Security</p>
            <h2 className="mt-2 max-w-xl text-2xl font-semibold leading-tight text-white md:text-[30px]">
              Fast Delivery. Secure by Default.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-[15px]">
              Every build is optimized for speed, resilient architecture, and
              data protection to support reliable product growth.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {SECURITY_HIGHLIGHTS.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-[#8b74ff]/40 bg-[#8b74ff]/10 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#ddd3ff]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-[#8b74ff]/30 bg-[#090321]/75 shadow-[0_16px_40px_rgba(14,8,40,0.45)]">
            <video
              loop
              muted
              autoPlay
              playsInline
              preload="metadata"
              className="h-[160px] w-full object-cover md:h-[180px]"
              src="/encryption.webm"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090321] via-transparent to-[#090321]/30" />
            <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-[#8b74ff]/55 bg-[#110736]/80 px-3 py-1.5">
              <Image
                src="/LockMain.png"
                alt="Security lock"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#e3dcff]">
                End-to-end Protected
              </span>
            </div>
            <p className="absolute bottom-3 left-3 right-3 text-xs text-slate-300">
              Continuous monitoring, role-based access, and encrypted data flow.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="clean-divider" />
    </section>
  );
};

export default Encryption;
