// src/components/ui/BreadCrumb.tsx

import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadCrumbProps {
  title: string;
  backgroundImage?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  title,
  backgroundImage = "/images/breadcrumb.jpg",
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1E1E1E]/75" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-[320px] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-montserrat text-4xl font-extrabold uppercase tracking-wide text-white md:text-5xl">
          {title}
        </h1>

        {/* Gold Line */}
        <div className="mt-5 h-1 w-20 rounded-full bg-[#C9963E]" />

        {/* Breadcrumb */}
        <div className="mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-widest">
          <Link
            to="/"
            className="text-gray-300 transition hover:text-[#F5BD61]"
          >
            Home
          </Link>

          <ChevronRight size={16} className="text-[#C9963E]" />

          <span className="text-[#F5BD61]">{title}</span>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;