// src/components/gallery/GalleryFilter.tsx

import React from "react";
import clsx from "clsx";
import Container from "../common/Container";

export type GalleryCategory =
  | "all"
  | "wedding"
  | "business"
  | "packaging"
  | "large"
  | "corporate";

interface FilterOption {
  label: string;
  value: GalleryCategory;
}

const FILTERS: FilterOption[] = [
  { label: "All Projects", value: "all" },
  { label: "Wedding Cards", value: "wedding" },
  { label: "Business Cards", value: "business" },
  { label: "Packaging", value: "packaging" },
  { label: "Large Format", value: "large" },
  { label: "Corporate Printing", value: "corporate" },
];

interface GalleryFilterProps {
  active: GalleryCategory;
  onChange: (category: GalleryCategory) => void;
}

/**
 * GalleryFilter
 * Row of pill buttons used to filter the GalleryGrid below it.
 * State is controlled by the parent so GalleryGrid can react to the
 * same `active` value.
 */
const GalleryFilter: React.FC<GalleryFilterProps> = ({ active, onChange }) => {
  return (
    <section className="border-b border-[#d3c4b2]/30 bg-[#eeeeec] py-12">
      <Container>
        <div className="flex flex-wrap justify-center gap-4">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => onChange(filter.value)}
              className={clsx(
                "rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-all",
                active === filter.value
                  ? "bg-[#C9963E] text-white shadow-md"
                  : "bg-[#e2e3e1] text-[#4f4537] hover:bg-[#C9963E]/10 hover:text-[#C9963E]"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GalleryFilter;