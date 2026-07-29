// src/common/SectionTitle.tsx

import React from "react";
import clsx from "clsx";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  textColor?: "dark" | "light";
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  description,
  align = "center",
  textColor = "dark",
  className,
}) => {
  const isLight = textColor === "light";

  return (
    <div
      className={clsx(
        "mb-14",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className
      )}
    >
      {/* Badge */}
      {badge && (
        <span
          className={clsx(
            "inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[3px]",
            isLight
              ? "border-[#C9963E]/40 bg-[#C9963E]/10 text-[#F5BD61]"
              : "border-[#C9963E] bg-[#FFF8EC] text-[#C9963E]"
          )}
        >
          {badge}
        </span>
      )}

      {/* Title */}
      <h2
        className={clsx(
          "mt-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          isLight ? "text-white" : "text-[#1E1E1E]"
        )}
      >
        {title}
      </h2>

      {/* Underline */}
      <div
        className={clsx(
          "mt-5 h-1 w-20 rounded-full bg-[#C9963E]",
          align === "center" && "mx-auto"
        )}
      />

      {/* Description */}
      {description && (
        <p
          className={clsx(
            "mt-6 text-base leading-8 md:text-lg",
            isLight ? "text-gray-300" : "text-[#666666]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;