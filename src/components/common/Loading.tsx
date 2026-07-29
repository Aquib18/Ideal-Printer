// src/components/ui/Loading.tsx

import React from "react";
import clsx from "clsx";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = "md",
  text = "Loading...",
  fullScreen = false,
  className,
}) => {
  const spinnerSize = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-[3px]",
    lg: "h-14 w-14 border-4",
  };

  const content = (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-4",
        className
      )}
    >
      {/* Spinner */}
      <div
        className={clsx(
          "animate-spin rounded-full",
          "border-[#C9963E]/30 border-t-[#C9963E]",
          spinnerSize[size]
        )}
      />

      {/* Loading Text */}
      {text && (
        <p className="font-medium tracking-wide text-[#5F5E5E]">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};

export default Loading;