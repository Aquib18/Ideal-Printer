

import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ScrollText, Droplet } from "lucide-react";
import Hero1 from "../../assets/images/Hero1.jpg";
interface Slide {
  id: string;
  titleLine1: string;
  titleLine2: string;
  caption: string;
  image: string;
}

const SLIDES: Slide[] = [
  {
    id: "business-cards",
    titleLine1: "World Class Prints",
    titleLine2: "Proudly Made in India",
    caption: "Ideal Printers | Elevating your brand with luxury printing.",
    image: Hero1,
  },
  {
    id: "packaging",
    titleLine1: "Premium Packaging",
    titleLine2: "Crafted to Perfection",
    caption: "Ideal Printers | Luxury boxes that make your product unforgettable.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6EvAVu1JicZey8NzAAjhElpOhWgOKpDdfLj0ItZnY9mhJAiy8qQ5OieZqVjBJSYlqNzvHhrgTL4L0j-cZUUAssCHKF_vTG_ZvdxdZSDmn9J3i8oWD_g9nNFBbC0x4Ted4wErvRIBMjiyK76J8NT-iGmLUCJ2We2Aw2u_uiAKAK4B1oatRvQ2zsBA1EaXvBVMRh8eEjFVN9bFQUcd6NDaKCk3JzyUiVykPCMQAy5-JbeLZ-N5pDUFq",
  },
  {
    id: "wedding-cards",
    titleLine1: "Wedding Invitations",
    titleLine2: "Timeless Elegance",
    caption: "Ideal Printers | Crafting the first chapter of your story.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJHStJZLuy9hjaFOYvw18VSbqeZjXoN2GU4OLSiYtQxanTW52xxdZOuS6DE-HUFaoIlvUX8L5kJRxN-znYYDjbPsr5bIA0x-Pg3ukYRvRkjWBC6zw87YlHVxAG3m1uokd3poabDAfQvNBT0oTidumUeIfj8jn5ivYeo8RMe8nPfKG1gUnjRP7yF7jEtoXPwzDqFAfg1BWYJSXleKS8v3NmiRk0uIIUTVzDWoTJ84afANCqTFY6Jpsq",
  },
  {
    id: "corporate",
    titleLine1: "Corporate Branding",
    titleLine2: "Professional Excellence",
    caption: "Ideal Printers | Reports and materials that command respect.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-rYu-HwS4snVKZ9Fx9u5-OfZnCmGxl3CcKSfztAxbtmxXLxkXnS96C3H6BvF_F86yYeKwHqCkznlJ-4mMTHRonLlVXGF7hZekjfSYGpQfGe9F_PFh7nhrOCVIu7bDUYqkoDuiLZFHnDIaqRRpakyrc62mbvBQza-ESugufojtNHt1mC4DFDwvC-9cIRkmmfb2GxoeR4rc8fbsoPDZZC-loRca_XqDRXBAgCV5eqBskIxe3tamQgha",
  },
  {
    id: "large-format",
    titleLine1: "Large Format Printing",
    titleLine2: "Bold & Vibrant",
    caption: "Ideal Printers | Big impressions for every event and space.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQRpoNNT73olbp5NUjIwBISnpnkRXxBKww0eUfc1IMlKx-eqS5txe2sc6i6RhKYbGgYDcZ-c64GU2BLxXx8N2uGj3JYjTfBFH3o_BeIQFHiu9D3GKrMGWlBcJWpez4FCEbJzhghiU7RHglvB_C1CZ41asGdEe4QpwQLE54rtr_pQFPQ2z_nhz2orikKD9bhrLblcTY_TvPSkxJKcRuWcF9kYhIAMFphFvdo46_amexNI-sU-vPlufH",
  },
];

const AUTOPLAY_MS = 3000;

/**
 * HeroSlider
 * Editorial-style banner: serif headings, a faint decorative
 * scroll/droplet motif in the background, and left-aligned dot
 * indicators under the text column. Auto-advances every 3 seconds;
 * arrows and dots let the user jump manually and reset the timer.
 */
const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      {/* Decorative line-art motifs */}
      <ScrollText
        size={100}
        strokeWidth={1}
        className="pointer-events-none absolute left-6 top-10 hidden text-gray-200 md:block"
      />
      <Droplet
        size={70}
        strokeWidth={1}
        className="pointer-events-none absolute bottom-10 left-10 hidden text-gray-200 md:block"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-16">
        {/* Slide viewport */}
        <div className="relative h-[440px] md:h-[480px]">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className={`absolute inset-0 grid grid-cols-1 items-center gap-8 transition-opacity duration-700 ease-in-out md:grid-cols-2 md:gap-14 ${
                i === index
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              {/* Text */}
              <div className="relative z-10 flex h-full flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold leading-tight text-[#1E1E1E] md:text-5xl">
                  {slide.titleLine1}
                </h2>
                <h2 className="font-serif text-3xl font-bold leading-tight text-[#C9963E] md:text-5xl">
                  {slide.titleLine2}
                </h2>
                <div className="mt-6 h-[2px] w-40 bg-[#C9963E]" />
                <p className="mt-4 font-serif text-base text-[#4f4537]">
                  {slide.caption}
                </p>
              </div>

              {/* Image */}
              <div className="h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={slide.image}
                  alt={slide.titleLine1}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d3c4b2] bg-white text-[#1E1E1E] shadow-sm transition-colors hover:bg-[#C9963E] hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d3c4b2] bg-white text-[#1E1E1E] shadow-sm transition-colors hover:bg-[#C9963E] hover:text-white"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dot indicators — aligned under the text column, not centered */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
          <div className="flex gap-2">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-[#C9963E]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;