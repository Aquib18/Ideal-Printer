import React from "react";

interface GalleryHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

const DEFAULT_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlS1tZ0P04vI9oiOymtpu58pwzTJtiXkK20qNQYijsIGcDURd2iTQ32KX3twz3so8U2NYS-PLkUtsu9ED2wLpE6JdhMm4gkdbc2xDH6lkAWjGi0QUOLTIaYm6CI0xmv0rp6OuSg9u2KNMjdJtyuuYThnaLMuQTQ4xdhRFzy4mhExd_IqfNe9tR9lDGkeaIFypDXgOy-mhJmFgmRODow_ZJplFOFK4-9IuCFy6ak2_ZhQcNVDw0eI9E";


const GalleryHero: React.FC<GalleryHeroProps> = ({
  title = "Our Work",
  description = "Where industrial precision meets artisanal excellence. Browse our portfolio of elite print productions.",
  backgroundImage = DEFAULT_BG,
}) => {
  return (
    <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden bg-[#1E1E1E]">
      {/* Background image */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <h1 className="mb-2 text-4xl font-black uppercase tracking-[0.2em] text-[#C9963E] md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#F5F1EA]/80">
          {description}
        </p>
      </div>
    </section>
  );
};

export default GalleryHero;