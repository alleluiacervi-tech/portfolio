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
  rotationMs = 4500,
}: Props) => {
  const imageSources = useMemo(() => {
    const uniqueSources = [src, ...gallery].filter(
      (value, index, array) => value && array.indexOf(value) === index,
    );

    return uniqueSources.length > 0 ? uniqueSources : [src];
  }, [src, gallery]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const hasImageRotation = imageSources.length > 1;
  const shouldPauseRotation = isHovered || isFocused;

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === 0) {
        return imageSources.length - 1;
      }

      return currentIndex - 1;
    });
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) => {
      const nextIndex = currentIndex + 1;
      return nextIndex >= imageSources.length ? 0 : nextIndex;
    });
  };

  useEffect(() => {
    setActiveImageIndex(0);
  }, [imageSources]);

  useEffect(() => {
    if (!hasImageRotation || shouldPauseRotation) {
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
  }, [hasImageRotation, imageSources.length, rotationMs, shouldPauseRotation]);

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
    <article
      className={cardClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
    >
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
          <div className="absolute inset-y-0 left-0 right-0 z-[2] flex items-center justify-between px-3">
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label={`Previous image for ${title}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-[#0a0424]/70 text-sm text-white opacity-0 transition-all duration-300 hover:border-white/55 hover:bg-[#0a0424]/90 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b49bff]/70 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              &#8592;
            </button>
            <button
              type="button"
              onClick={showNextImage}
              aria-label={`Next image for ${title}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-[#0a0424]/70 text-sm text-white opacity-0 transition-all duration-300 hover:border-white/55 hover:bg-[#0a0424]/90 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b49bff]/70 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              &#8594;
            </button>
          </div>
        ) : null}
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
