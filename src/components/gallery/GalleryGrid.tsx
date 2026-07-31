

import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import type { GalleryCategory } from "./GalleryFilter";
import { ITEMS } from "./galleryData";

const PAGE_SIZE = 9; // how many cards to reveal per "Load More" click

interface GalleryGridProps {
  activeCategory: GalleryCategory;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ activeCategory }) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredItems =
    activeCategory === "all"
      ? ITEMS
      : ITEMS.filter((item) => item.category === activeCategory);

  // Reset pagination whenever the filter changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <section className="py-[120px]">
      <Container>
        <h2 className="mb-16 text-3xl font-extrabold tracking-wide text-[#1E1E1E] md:text-4xl">
          Portfolio Showcase
          <span className="mt-2 block h-1 w-[60px] bg-[#C9963E]" />
        </h2>

        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="group relative mb-6 overflow-hidden rounded-xl border-t-4 border-[#C9963E] bg-white shadow-sm transition-all duration-500 [break-inside:avoid] hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`overflow-hidden ${item.aspect}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#1E1E1E]/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-2 w-fit bg-[#C9963E] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  {item.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="py-16 text-center text-[#666666]">
            No projects in this category yet.
          </p>
        )}

        {hasMore && (
          <div className="mt-20 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="rounded-xl border-2 border-[#C9963E] px-10 py-4 text-sm font-semibold uppercase tracking-widest text-[#C9963E] transition-all duration-300 hover:bg-[#C9963E] hover:text-white"
            >
              Load More Projects
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default GalleryGrid;