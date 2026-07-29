import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        rounded-2xl
        bg-white
        shadow-sm
        border
        border-gray-200
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;