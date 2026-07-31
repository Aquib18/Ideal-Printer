// src/components/gallery/galleryData.ts
//
// All gallery content lives here, separate from the grid component.
// Images are loaded from src/assets/images/ and mapped to categories below.
// To add a new gallery photo: drop the file in assets/images, then add
// its filename to the relevant category array in CATEGORY_IMAGES.

import type { GalleryCategory } from "./GalleryFilter";

export interface GalleryItem {
  id: string;
  category: Exclude<GalleryCategory, "all">;
  categoryLabel: string;
  title: string;
  image: string;
  aspect: string; // tailwind aspect-* class
}

// Adjust the relative path if this file's location changes.
const imageModules = import.meta.glob(
  "../../assets/images/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;

const imageByFilename: Record<string, string> = {};
for (const [path, url] of Object.entries(imageModules)) {
  const filename = (path.split("/").pop() ?? "").toLowerCase();
  imageByFilename[filename] = url;
}

const resolveImage = (filename: string): string => {
  const url = imageByFilename[filename.toLowerCase()];
  if (!url) {
    console.warn(`Gallery image "${filename}" not found in assets/images`);
    return "";
  }
  return url;
};

interface CategoryMeta {
  category: Exclude<GalleryCategory, "all">;
  categoryLabel: string;
  aspect: string;
  files: string[];
  titles: string[];
}

const CATEGORY_META: CategoryMeta[] = [
  {
    category: "diaries",
    categoryLabel: "Diaries",
    aspect: "aspect-[4/5]",
    files: ["dairy1.png", "diary2.jpeg", "diary3.jpeg", "diary4.jpeg"],
    titles: [
      "Executive Heritage Diary",
      "Classic Leather Diary",
      "Minimalist Kraft Diary",
      "Weekly Planner Diary",
    ],
  },
  {
    category: "calendars",
    categoryLabel: "Calendars",
    aspect: "aspect-[4/3]",
    files: ["calender1.png", "calender2.jpeg", "calender3.jpeg"],
    titles: ["Perspective Wall Calendar", "Studio Desk Calendar", "Corporate Wall Calendar"],
  },
  {
    category: "stationery",
    categoryLabel: "Stationery",
    aspect: "aspect-square",
    files: ["stationary.png"],
    titles: ["Bespoke Corporate Stationery"],
  },
  {
    category: "pens",
    categoryLabel: "Pens",
    aspect: "aspect-square",
    files: ["pen.png"],
    titles: ["Executive Pen Series"],
  },
  {
    category: "billbook",
    categoryLabel: "Bill Book",
    aspect: "aspect-[3/4]",
    files: ["bill1.jpeg", "bill2.jpeg", "bill3.jpeg"],
    titles: ["Duplicate Bill Book", "GST Bill Book", "Custom Branded Bill Book"],
  },
  {
    category: "challanbook",
    categoryLabel: "Challan Book",
    aspect: "aspect-[3/4]",
    files: ["challan1.png", "challan2.jpeg", "challan3.jpeg"],
    titles: ["Delivery Challan Book", "Custom Challan Book", "Triplicate Challan Book"],
  },
  {
    category: "letterhead",
    categoryLabel: "Letter Head",
    aspect: "aspect-[3/4]",
    files: ["letterhead.jpeg", "letter1.jpeg", "letter2.jpeg"],
    titles: ["Premium Letterhead", "Corporate Letterhead", "Minimalist Letterhead"],
  },
  {
    category: "envelop",
    categoryLabel: "Envelop",
    aspect: "aspect-[3/2]",
    files: ["envelop1.jpeg", "envelop2.jpeg", "envelop3.jpeg", "envelop4.jpeg"],
    titles: [
      "Custom Envelope Pack",
      "Corporate Branded Envelope",
      "Premium Cotton Envelope",
      "Bulk Envelope Set",
    ],
  },
  {
    category: "idcard",
    categoryLabel: "ID Card",
    aspect: "aspect-[3/4]",
    files: ["id1.jpeg", "id2.png", "id3.jpeg"],
    titles: ["Employee ID Card", "Student ID Card", "Custom Branded ID Card"],
  },
  {
    category: "vnylsticker",
    categoryLabel: "Vnyl Sticker",
    aspect: "aspect-square",
    files: ["vnyl1.jpeg", "vnyl2.jpeg", "vnyl3.jpeg", "vnyl4.jpeg"],
    titles: [
      "Custom Vinyl Sticker Pack",
      "Branded Logo Sticker",
      "Glossy Vinyl Sticker Set",
      "Matte Vinyl Sticker Set",
    ],
  },
  {
    category: "flexprinting",
    categoryLabel: "Flex Printing",
    aspect: "aspect-[4/3]",
    files: ["flex1.jpeg", "flex2.jpeg", "flex3.jpeg"],
    titles: ["Outdoor Flex Banner", "Indoor Flex Print", "Custom Flex Hoarding"],
  },
  {
    category: "visitingcard",
    categoryLabel: "Visiting Card",
    aspect: "aspect-[3/2]",
    files: ["visitingcard.jpeg", "visiting1.jpg", "visiting2.jpeg", "visiting3.jpeg"],
    titles: [
      "Classic Visiting Card",
      "Matte Finish Visiting Card",
      "Glossy Visiting Card",
      "Textured Cotton Visiting Card",
    ],
  },
];

function buildItems(): GalleryItem[] {
  const items: GalleryItem[] = [];
  for (const meta of CATEGORY_META) {
    meta.files.forEach((file, index) => {
      const title = meta.titles[index] ?? `${meta.categoryLabel} ${index + 1}`;
      items.push({
        id: `${meta.category}-${index + 1}`,
        category: meta.category,
        categoryLabel: meta.categoryLabel,
        title,
        image: resolveImage(file),
        aspect: meta.aspect,
      });
    });
  }
  return items;
}

export const ITEMS: GalleryItem[] = buildItems();