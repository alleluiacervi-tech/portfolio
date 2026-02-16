"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

interface Props {
  src: string;
  gallery?: string[];
  title: string;
  description: string;
  category?: string;
  featured?: boolean;
  className?: string;
  rotationMs?: number;
}

const ProjectCard = ({
  src,
  gallery = [],
  title,
  description,
  category,
  featured = false,
  className = "",
  rotationMs = 3000,
}: Props) => {
  const imageSources = useMemo(() => {
    const uniqueSources = [src, ...gallery].filter(
      (value, index, array) => value && array.indexOf(value) === index,
    );

    return uniqueSources.length > 0 ? uniqueSources : [src];
  }, [src, gallery]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const hasImageRotation = imageSources.length > 1;

  useEffect(() => {
    setActiveImageIndex(0);
  }, [imageSources]);

  useEffect(() => {
    if (!hasImageRotation) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => {
        const nextIndex = currentIndex + 1;
        return nextIndex >= imageSources.length ? 0 : nextIndex;
      });
    }, rotationMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [hasImageRotation, imageSources.length, rotationMs]);

  const cardClassName = [
    "group relative overflow-hidden rounded-2xl border bg-[#0b0426]/65 backdrop-blur-sm transition-all duration-300",
    featured
      ? "border-[#8b74ff]/70 shadow-[0_18px_45px_rgba(42,14,97,0.38)] hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(42,14,97,0.46)]"
      : "border-[#4e2a96]/70 shadow-[0_14px_34px_rgba(42,14,97,0.26)] hover:-translate-y-1 hover:border-[#8b74ff]/65 hover:shadow-[0_22px_52px_rgba(42,14,97,0.4)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClassName}>
      <div className="relative aspect-[16/9] overflow-hidden">
        {imageSources.map((imageSource, index) => (
          <Image
            key={`${title}-${imageSource}`}
            src={imageSource}
            alt={title}
            fill
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 42vw, 30vw"
            className={`h-full w-full object-cover object-center transition-[opacity,transform] duration-700 group-hover:scale-[1.02] ${
              index === activeImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/25 to-transparent" />
        {hasImageRotation ? (
          <div className="pointer-events-none absolute bottom-3 left-3 flex gap-1.5">
            {imageSources.map((imageSource, index) => (
              <span
                key={`${title}-dot-${imageSource}`}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === activeImageIndex ? "bg-white/90" : "bg-white/35"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="relative space-y-2.5 p-4 md:p-5">
        {category ? (
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#b49bff]">
            {category}
          </p>
        ) : null}
        <h3
          className={`text-white ${
            featured ? "text-xl md:text-2xl" : "text-lg md:text-xl"
          } font-semibold leading-snug`}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
