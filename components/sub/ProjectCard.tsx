"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

interface Props {
  src: string;
  gallery?: string[];
  title: string;
  description?: string;
  summary?: string;
  category?: string;
  purpose?: string;
  concept?: string;
  result?: string;
  featured?: boolean;
  className?: string;
  rotationMs?: number;
  variant?: "card" | "plain";
}

const ProjectCard = ({
  src,
  gallery = [],
  title,
  description,
  summary,
  category,
  purpose,
  concept,
  result,
  featured = false,
  className = "",
  rotationMs = 4500,
  variant = "card",
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
  const currentImageIndex = activeImageIndex % imageSources.length;

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

  const detailRows = [
    { label: "Purpose", value: purpose },
    { label: "Concept", value: concept },
    { label: "Result", value: result },
  ].filter((row) => Boolean(row.value?.trim()));
  const summaryText = summary ?? description ?? "";
  const isCardVariant = variant === "card";

  const cardClassName = [
    "group relative flex h-full flex-col overflow-hidden transition-[transform,border-color,box-shadow] duration-500",
    isCardVariant
      ? featured
        ? "rounded-2xl border border-[#8b74ff]/65 bg-[#0b0426]/70 shadow-[0_22px_52px_rgba(42,14,97,0.34)] backdrop-blur-sm hover:-translate-y-[5px] hover:border-[#b49bff]/75 hover:shadow-[0_30px_70px_rgba(42,14,97,0.42)]"
        : "rounded-2xl border border-[#4e2a96]/65 bg-[#0b0426]/70 shadow-[0_14px_34px_rgba(42,14,97,0.24)] backdrop-blur-sm hover:-translate-y-1 hover:border-[#8b74ff]/65 hover:shadow-[0_24px_54px_rgba(42,14,97,0.34)]"
      : "border-0 bg-transparent shadow-none",
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
      <div
        className={`relative aspect-[16/10] overflow-hidden ${
          isCardVariant ? "" : "rounded-xl border border-[#5c3ea8]/30"
        }`}
      >
        {imageSources.map((imageSource, index) => (
          <Image
            key={`${title}-${imageSource}`}
            src={imageSource}
            alt={title}
            fill
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 48vw, 32vw"
            className={`h-full w-full object-cover object-center transition-[opacity,transform] duration-700 ${
              isCardVariant ? "group-hover:scale-[1.03]" : "group-hover:scale-[1.01]"
            } ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
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
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-[#0a0424]/70 text-sm text-white opacity-100 transition-all duration-300 hover:border-white/55 hover:bg-[#0a0424]/90 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b49bff]/70 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
            >
              &#8592;
            </button>
            <button
              type="button"
              onClick={showNextImage}
              aria-label={`Next image for ${title}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-[#0a0424]/70 text-sm text-white opacity-100 transition-all duration-300 hover:border-white/55 hover:bg-[#0a0424]/90 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b49bff]/70 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
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
                  index === currentImageIndex ? "bg-white/90" : "bg-white/35"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div
        className={`relative flex flex-1 flex-col ${
          isCardVariant ? "p-5 md:p-6" : "px-1 pb-1 pt-4"
        }`}
      >
        {category ? (
          <p
            className={`inline-flex w-fit ${
              isCardVariant
                ? "rounded-full border border-[#8b74ff]/45 bg-[#8b74ff]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#cfc3ff]"
                : "text-[11px] uppercase tracking-[0.14em] text-[#bdaeff]"
            }`}
          >
            {category}
          </p>
        ) : null}
        <h3
          className={`project-card-title mt-3 font-semibold leading-snug text-white ${
            isCardVariant
              ? featured
                ? "text-xl md:text-2xl"
                : "text-lg md:text-xl"
              : "text-xl md:text-2xl"
          }`}
        >
          {title}
        </h3>
        {summaryText ? (
          <p
            className={`mt-2 text-sm leading-relaxed text-slate-300 ${
              isCardVariant ? "project-card-description" : ""
            }`}
          >
            {summaryText}
          </p>
        ) : null}
        {isCardVariant && detailRows.length > 0 ? (
          <div className="mt-4 space-y-2.5 border-t border-[#8b74ff]/25 pt-4">
            {detailRows.map((row) => (
              <p
                key={`${title}-${row.label}`}
                className="text-sm leading-relaxed text-slate-200"
              >
                <span className="mr-2 text-[10px] uppercase tracking-[0.14em] text-[#b49bff]">
                  {row.label}
                </span>
                <span className="text-slate-300">{row.value}</span>
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;
