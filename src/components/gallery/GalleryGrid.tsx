// // src/components/gallery/GalleryGrid.tsx

// import React from "react";
// import Container from "../common/Container";
// import type { GalleryCategory } from "./GalleryFilter";

// interface GalleryItem {
//   id: string;
//   category: Exclude<GalleryCategory, "all">;
//   categoryLabel: string;
//   title: string;
//   image: string;
//   aspect: string; // tailwind aspect-* class
// }

// const ITEMS: GalleryItem[] = [
//   {
//     id: "royal-gold-suite",
//     category: "wedding",
//     categoryLabel: "Wedding Cards",
//     title: "Royal Gold Suite",
//     aspect: "aspect-[4/5]",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAJHStJZLuy9hjaFOYvw18VSbqeZjXoN2GU4OLSiYtQxanTW52xxdZOuS6DE-HUFaoIlvUX8L5kJRxN-znYYDjbPsr5bIA0x-Pg3ukYRvRkjWBC6zw87YlHVxAG3m1uokd3poabDAfQvNBT0oTidumUeIfj8jn5ivYeo8RMe8nPfKG1gUnjRP7yF7jEtoXPwzDqFAfg1BWYJSXleKS8v3NmiRk0uIIUTVzDWoTJ84afANCqTFY6Jpsq",
//   },
//   {
//     id: "executive-edge",
//     category: "business",
//     categoryLabel: "Business Cards",
//     title: "Executive Edge",
//     aspect: "aspect-[3/2]",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBIg_15Hgs_tZfoq3aju7sa_5Y1PZD3l8M_bNWfPgO50aCjpdHQUt32sAKNh__GEwFBxnzeBfAeqAaPx5A5z_z8knEa437PHrOYX9P5il-W_tmt-oaPKndOi7Jpa2j43RHL7vpLCIgd9XUQoRvMJw2TFlpcouVAMBBmepKHjgxkM9hYtplvLKVi0n1vAzJUQT9WGC1yyVdB8DYB6Xosw7NLSbXoJvsofmfcCvIDC9gVTRAWRy9Au069",
//   },
//   {
//     id: "aura-cosmetics-box",
//     category: "packaging",
//     categoryLabel: "Packaging",
//     title: "Aura Cosmetics Box",
//     aspect: "aspect-square",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuA6EvAVu1JicZey8NzAAjhElpOhWgOKpDdfLj0ItZnY9mhJAiy8qQ5OieZqVjBJSYlqNzvHhrgTL4L0j-cZUUAssCHKF_vTG_ZvdxdZSDmn9J3i8oWD_g9nNFBbC0x4Ted4wErvRIBMjiyK76J8NT-iGmLUCJ2We2Aw2u_uiAKAK4B1oatRvQ2zsBA1EaXvBVMRh8eEjFVN9bFQUcd6NDaKCk3JzyUiVykPCMQAy5-JbeLZ-N5pDUFq",
//   },
//   {
//     id: "metro-mural-vinyl",
//     category: "large",
//     categoryLabel: "Large Format",
//     title: "Metro Mural Vinyl",
//     aspect: "aspect-[4/3]",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCQRpoNNT73olbp5NUjIwBISnpnkRXxBKww0eUfc1IMlKx-eqS5txe2sc6i6RhKYbGgYDcZ-c64GU2BLxXx8N2uGj3JYjTfBFH3o_BeIQFHiu9D3GKrMGWlBcJWpez4FCEbJzhghiU7RHglvB_C1CZ41asGdEe4QpwQLE54rtr_pQFPQ2z_nhz2orikKD9bhrLblcTY_TvPSkxJKcRuWcF9kYhIAMFphFvdo46_amexNI-sU-vPlufH",
//   },
//   {
//     id: "fiscal-annual-2024",
//     category: "corporate",
//     categoryLabel: "Corporate Printing",
//     title: "Fiscal Annual 2024",
//     aspect: "aspect-square",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuA-rYu-HwS4snVKZ9Fx9u5-OfZnCmGxl3CcKSfztAxbtmxXLxkXnS96C3H6BvF_F86yYeKwHqCkznlJ-4mMTHRonLlVXGF7hZekjfSYGpQfGe9F_PFh7nhrOCVIu7bDUYqkoDuiLZFHnDIaqRRpakyrc62mbvBQza-ESugufojtNHt1mC4DFDwvC-9cIRkmmfb2GxoeR4rc8fbsoPDZZC-loRca_XqDRXBAgCV5eqBskIxe3tamQgha",
//   },
//   {
//     id: "emerald-and-vellum",
//     category: "wedding",
//     categoryLabel: "Wedding Cards",
//     title: "Emerald & Vellum",
//     aspect: "aspect-[3/4]",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCPdONsmskRMlSP9Lo004FaiQnZty3vEYMiFcMYl2uJXZ7bBpOEKpp3eqy_zdXtaUhIbsx4Puw7ro-8Qc56heOh08MuBJAh8usBk9smflg_ZgMBjrg2uc3etAXSvKq2-Rs-VAi0kDldDmQh5HoREWcCj9cw4ni2_JzYYMmE5rN-74dj0hZhBVQ14Pbah72eqpwdtK3zdfvZBt4Zgy4ai78-PpUFrjtYIO8Oc02_Zf4RK8zORfTkc2-H",
//   },
//   {
//     id: "reserve-label-series",
//     category: "packaging",
//     categoryLabel: "Packaging",
//     title: "Reserve Label Series",
//     aspect: "aspect-[4/5]",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuD74DlD8A6YbEa9uAG79cgMMNW0_-w3ydWrwHBnzRaq_cxyOxg8HEL94JF_qVR0nKCR4qBjDnaJPWZ_9pWNl_tT_w7wlMQ3hswMh8fhtHKZkzYlRe3iqRuV-SgVrdTLJCrw_PTW18lLNzDJL0iAlAZksxRQ6qor3x8eslAoPel1IzwZXRob8G94n-YC-Wl0F_WvQsq7I6x1n8hRqn2YBRYAxBcn4ipuhCx9SOyXIC0XbEjRa5bsg21l",
//   },
//   {
//   id: "premium-brochure",
//   category: "corporate",
//   categoryLabel: "Corporate Printing",
//   title: "Premium Company Brochure",
//   aspect: "aspect-[4/5]",
//   image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
// },
// {
//   id: "modern-business-card",
//   category: "business",
//   categoryLabel: "Business Cards",
//   title: "Modern Business Card",
//   aspect: "aspect-square",
//   image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
// },
// {
//   id: "luxury-invitation",
//   category: "wedding",
//   categoryLabel: "Wedding Cards",
//   title: "Luxury Wedding Invitation",
//   aspect: "aspect-[3/4]",
//   image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
// },
// {
//   id: "food-package",
//   category: "packaging",
//   categoryLabel: "Packaging",
//   title: "Food Packaging Box",
//   aspect: "aspect-[4/3]",
//   image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",
// },
// {
//   id: "banner-print",
//   category: "large",
//   categoryLabel: "Large Format",
//   title: "Outdoor Banner",
//   aspect: "aspect-[4/5]",
//   image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
// },
// ];

// interface GalleryGridProps {
//   activeCategory: GalleryCategory;
// }

// /**
//  * GalleryGrid
//  * Masonry-style portfolio grid. Filters ITEMS down to `activeCategory`
//  * (as set by GalleryFilter) and animates items in/out on change.
//  */
// const GalleryGrid: React.FC<GalleryGridProps> = ({ activeCategory }) => {
//   const visibleItems =
//     activeCategory === "all"
//       ? ITEMS
//       : ITEMS.filter((item) => item.category === activeCategory);

//   return (
//     <section className="py-[120px]">
//       <Container>
//         <h2 className="mb-16 text-3xl font-extrabold tracking-wide text-[#1E1E1E] md:text-4xl">
//           Portfolio Showcase
//           <span className="mt-2 block h-1 w-[60px] bg-[#C9963E]" />
//         </h2>

//         <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
//         {visibleItems.map((item) => (
//           <div
//             key={item.id}
//             className="group relative mb-6 overflow-hidden rounded-xl border-t-4 border-[#C9963E] bg-white shadow-sm transition-all duration-500 [break-inside:avoid] hover:-translate-y-1 hover:shadow-lg"
//           >
//             <div className={`overflow-hidden ${item.aspect}`}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#1E1E1E]/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//               <span className="mb-2 w-fit bg-[#C9963E] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
//                 {item.categoryLabel}
//               </span>
//               <h3 className="text-xl font-bold text-white">{item.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {visibleItems.length === 0 && (
//         <p className="py-16 text-center text-[#666666]">
//           No projects in this category yet.
//         </p>
//       )}

//       <div className="mt-20 flex justify-center">
//         <button
//           type="button"
//           className="rounded-xl border-2 border-[#C9963E] px-10 py-4 text-sm font-semibold uppercase tracking-widest text-[#C9963E] transition-all duration-300 hover:bg-[#C9963E] hover:text-white"
//         >
//           Load More Projects
//         </button>
//       </div>
//       </Container>
//     </section>
//   );
// };

// export default GalleryGrid;


// src/components/gallery/GalleryGrid.tsx

import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import type { GalleryCategory } from "./GalleryFilter";
import { ITEMS } from "./galleryData";

const PAGE_SIZE = 9; // how many cards to reveal per "Load More" click

interface GalleryGridProps {
  activeCategory: GalleryCategory;
}

/**
 * GalleryGrid
 * Masonry-style portfolio grid. Filters ITEMS down to `activeCategory`
 * and only renders the first `visibleCount` of them — "Load More
 * Projects" reveals another PAGE_SIZE each click. Switching category
 * resets back to the first page so you're not stuck deep in a filtered
 * list showing nothing.
 */
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