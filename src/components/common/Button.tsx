// src/components/ui/Button.tsx

import React from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  rightIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  rightIcon = false,
  className,
  ...props
}) => {
  const variants = {
    primary:
      "bg-[#C9963E] text-[#1E1E1E] hover:bg-[#F5BD61] shadow-lg hover:shadow-xl",

    secondary:
      "bg-[#1E1E1E] text-white hover:bg-black",

    outline:
      "border-2 border-[#C9963E] text-[#C9963E] hover:bg-[#C9963E] hover:text-[#1E1E1E]",

    dark:
      "bg-black text-white hover:bg-[#2C2C2C]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2",
        "rounded-lg",
        "font-semibold",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}

      {rightIcon && (
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default Button;