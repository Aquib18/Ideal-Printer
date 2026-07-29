// src/components/gallery/galleryData.ts
//
// All gallery content lives here, separate from the grid component.
// To add a real project: just push a new object onto ITEMS (or edit
// BASE_ITEMS below) — no need to touch GalleryGrid.tsx at all.

import type { GalleryCategory } from "./GalleryFilter";

export interface GalleryItem {
  id: string;
  category: Exclude<GalleryCategory, "all">;
  categoryLabel: string;
  title: string;
  image: string;
  aspect: string; // tailwind aspect-* class
}

// The real, unique photos/categories we have right now.
const BASE_ITEMS: Omit<GalleryItem, "id">[] = [
  {
    category: "wedding",
    categoryLabel: "Wedding Cards",
    title: "Royal Gold Suite",
    aspect: "aspect-[4/5]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJHStJZLuy9hjaFOYvw18VSbqeZjXoN2GU4OLSiYtQxanTW52xxdZOuS6DE-HUFaoIlvUX8L5kJRxN-znYYDjbPsr5bIA0x-Pg3ukYRvRkjWBC6zw87YlHVxAG3m1uokd3poabDAfQvNBT0oTidumUeIfj8jn5ivYeo8RMe8nPfKG1gUnjRP7yF7jEtoXPwzDqFAfg1BWYJSXleKS8v3NmiRk0uIIUTVzDWoTJ84afANCqTFY6Jpsq",
  },
  {
    category: "business",
    categoryLabel: "Business Cards",
    title: "Executive Edge",
    aspect: "aspect-[3/2]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIg_15Hgs_tZfoq3aju7sa_5Y1PZD3l8M_bNWfPgO50aCjpdHQUt32sAKNh__GEwFBxnzeBfAeqAaPx5A5z_z8knEa437PHrOYX9P5il-W_tmt-oaPKndOi7Jpa2j43RHL7vpLCIgd9XUQoRvMJw2TFlpcouVAMBBmepKHjgxkM9hYtplvLKVi0n1vAzJUQT9WGC1yyVdB8DYB6Xosw7NLSbXoJvsofmfcCvIDC9gVTRAWRy9Au069",
  },
  {
    category: "packaging",
    categoryLabel: "Packaging",
    title: "Aura Cosmetics Box",
    aspect: "aspect-square",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6EvAVu1JicZey8NzAAjhElpOhWgOKpDdfLj0ItZnY9mhJAiy8qQ5OieZqVjBJSYlqNzvHhrgTL4L0j-cZUUAssCHKF_vTG_ZvdxdZSDmn9J3i8oWD_g9nNFBbC0x4Ted4wErvRIBMjiyK76J8NT-iGmLUCJ2We2Aw2u_uiAKAK4B1oatRvQ2zsBA1EaXvBVMRh8eEjFVN9bFQUcd6NDaKCk3JzyUiVykPCMQAy5-JbeLZ-N5pDUFq",
  },
  {
    category: "large",
    categoryLabel: "Large Format",
    title: "Metro Mural Vinyl",
    aspect: "aspect-[4/3]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQRpoNNT73olbp5NUjIwBISnpnkRXxBKww0eUfc1IMlKx-eqS5txe2sc6i6RhKYbGgYDcZ-c64GU2BLxXx8N2uGj3JYjTfBFH3o_BeIQFHiu9D3GKrMGWlBcJWpez4FCEbJzhghiU7RHglvB_C1CZ41asGdEe4QpwQLE54rtr_pQFPQ2z_nhz2orikKD9bhrLblcTY_TvPSkxJKcRuWcF9kYhIAMFphFvdo46_amexNI-sU-vPlufH",
  },
  {
    category: "corporate",
    categoryLabel: "Corporate Printing",
    title: "Fiscal Annual 2024",
    aspect: "aspect-square",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-rYu-HwS4snVKZ9Fx9u5-OfZnCmGxl3CcKSfztAxbtmxXLxkXnS96C3H6BvF_F86yYeKwHqCkznlJ-4mMTHRonLlVXGF7hZekjfSYGpQfGe9F_PFh7nhrOCVIu7bDUYqkoDuiLZFHnDIaqRRpakyrc62mbvBQza-ESugufojtNHt1mC4DFDwvC-9cIRkmmfb2GxoeR4rc8fbsoPDZZC-loRca_XqDRXBAgCV5eqBskIxe3tamQgha",
  },
  {
    category: "wedding",
    categoryLabel: "Wedding Cards",
    title: "Emerald & Vellum",
    aspect: "aspect-[3/4]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPdONsmskRMlSP9Lo004FaiQnZty3vEYMiFcMYl2uJXZ7bBpOEKpp3eqy_zdXtaUhIbsx4Puw7ro-8Qc56heOh08MuBJAh8usBk9smflg_ZgMBjrg2uc3etAXSvKq2-Rs-VAi0kDldDmQh5HoREWcCj9cw4ni2_JzYYMmE5rN-74dj0hZhBVQ14Pbah72eqpwdtK3zdfvZBt4Zgy4ai78-PpUFrjtYIO8Oc02_Zf4RK8zORfTkc2-H",
  },
  {
    category: "packaging",
    categoryLabel: "Packaging",
    title: "Reserve Label Series",
    aspect: "aspect-[4/5]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD74DlD8A6YbEa9uAG79cgMMNW0_-w3ydWrwHBnzRaq_cxyOxg8HEL94JF_qVR0nKCR4qBjDnaJPWZ_9pWNl_tT_w7wlMQ3hswMh8fhtHKZkzYlRe3iqRuV-SgVrdTLJCrw_PTW18lLNzDJL0iAlAZksxRQ6qor3x8eslAoPel1IzwZXRob8G94n-YC-Wl0F_WvQsq7I6x1n8hRqn2YBRYAxBcn4ipuhCx9SOyXIC0XbEjRa5bsg21l",
  },
];

const TARGET_COUNT = 40;

/**
 * Generates 40 gallery entries by cycling through BASE_ITEMS.
 * This is a stand-in until real project photos/titles are added —
 * replace this generated list with real entries whenever you like,
 * or just keep appending real objects onto BASE_ITEMS above and this
 * will pick them up automatically.
 */
function buildItems(): GalleryItem[] {
  const items: GalleryItem[] = [];
  for (let i = 0; i < TARGET_COUNT; i++) {
    const base = BASE_ITEMS[i % BASE_ITEMS.length];
    const repeatNumber = Math.floor(i / BASE_ITEMS.length) + 1;
    items.push({
      ...base,
      id: `${base.title.toLowerCase().replace(/\s+/g, "-")}-${i + 1}`,
      title: repeatNumber > 1 ? `${base.title} ${repeatNumber}` : base.title,
    });
  }
  return items;
}

export const ITEMS: GalleryItem[] = buildItems();