import React from "react";
import clsx from "clsx";
import Container from "../common/Container";

export type GalleryCategory =
  | "all"
  | "diaries"
  | "calendars"
  | "stationery"
  | "pens"
  | "billbook"
  | "challanbook"
  | "letterhead"
  | "envelop"
  | "idcard"
  | "vnylsticker"
  | "flexprinting"
  | "visitingcard";

interface FilterOption {
  label: string;
  value: GalleryCategory;
}

const FILTERS: FilterOption[] = [
  { label: "All Projects", value: "all" },
  { label: "Diaries", value: "diaries" },
  { label: "Calendars", value: "calendars" },
  { label: "Stationery", value: "stationery" },
  { label: "Pens", value: "pens" },
  { label: "Bill Book", value: "billbook" },
  { label: "Challan Book", value: "challanbook" },
  { label: "Letter Head", value: "letterhead" },
  { label: "Envelop", value: "envelop" },
  { label: "ID Card", value: "idcard" },
  { label: "Vnyl Sticker", value: "vnylsticker" },
  { label: "Flex Printing", value: "flexprinting" },
  { label: "Visiting Card", value: "visitingcard" },
];

interface GalleryFilterProps {
  active: GalleryCategory;
  onChange: (category: GalleryCategory) => void;
}

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