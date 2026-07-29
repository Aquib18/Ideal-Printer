// src/components/ui/Badge.tsx

import React from "react";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "light" | "outline";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  className,
}) => {
  const variants = {
    gold: "bg-[#C9963E]/10 text-[#F5BD61] border border-[#C9963E]",
    dark: "bg-[#1E1E1E] text-white border border-[#333333]",
    light: "bg-white text-[#1E1E1E] border border-gray-200",
    outline: "bg-transparent text-[#C9963E] border border-[#C9963E]",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-5 py-2",
        "text-xs font-semibold uppercase tracking-[3px]",
        "transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;