import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeadingProps) {
  const alignmentClass = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`mx-auto max-w-3xl ${alignmentClass} ${className}`.trim()}>
      {eyebrow ? (
        <p className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-pink-600 sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-2 text-2xl font-black leading-snug text-[#2D2433] sm:mt-3 sm:text-4xl lg:text-5xl ${titleClassName}`.trim()}>
        {title}
      </h2>
      {description ? (
        <p className={`mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-[#6B6570] sm:mt-4 sm:text-base sm:leading-relaxed ${descriptionClassName}`.trim()}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
