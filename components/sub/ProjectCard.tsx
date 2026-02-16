import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  category?: string;
  featured?: boolean;
  className?: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  category,
  featured = false,
  className = "",
}: Props) => {
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
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1280px) 45vw, 32vw"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/25 to-transparent" />
      </div>

      <div className="relative space-y-3 p-5 md:p-6">
        {category ? (
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#b49bff]">
            {category}
          </p>
        ) : null}
        <h3
          className={`text-white ${
            featured ? "text-2xl md:text-[30px]" : "text-xl md:text-2xl"
          } font-semibold leading-snug`}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300 md:text-base">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
