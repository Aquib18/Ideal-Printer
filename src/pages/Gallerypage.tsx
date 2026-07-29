import { useState } from "react";

import GalleryHero from "../components/gallery/GalleryHero";
import GalleryFilter, { type GalleryCategory } from "../components/gallery/GalleryFilter";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryCTA from "../components/gallery/GalleryCTA";

import WhatsAppButton from "../components/common/WhatsAppButton";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  return (
    <>
      <main>
        <GalleryHero />
        <GalleryFilter active={activeCategory} onChange={setActiveCategory} />
        <GalleryGrid activeCategory={activeCategory} />
        <GalleryCTA />
      </main>
      <WhatsAppButton />
    </>
  );
};

export default GalleryPage;