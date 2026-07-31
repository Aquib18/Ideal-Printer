import type { Product, ProductCategory } from "../types";

const imageModules = import.meta.glob(
  "../../../assets/images/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;

const imageByFilename: Record<string, string> = {};
for (const [path, url] of Object.entries(imageModules)) {
  const filename = (path.split("/").pop() ?? "").toLowerCase();
  imageByFilename[filename] = url;
}

const categoryImageOrder: Record<string, string[]> = {
  Diaries: ["dairy1.png", "diary2.jpeg", "diary3.jpeg", "diary4.jpeg"],
  Calendars: ["calender1.png","calender2.jpeg", "calender3.jpeg", "calender2.jpeg"],
  Stationery: ["stationary.png"],
  Pens: ["pen.png"],
  "Customize Tshirt": [], // no image uploaded yet
  "Bill Book": ["bill1.jpeg","bill2.jpeg","bill3.jpeg","bill3.jpeg"],
  "Challan Book": ["challan1.png","challan2.jpeg","challan3.jpeg","challan1.png"],
  "Letter Head": ["letterhead.jpeg", "letter1.jpeg","letter2.jpeg","letter2.jpeg"],
  Envelop: ["envelop1.jpeg","envelop2.jpeg","envelop3.jpeg","envelop4.jpeg"],
  "ID Card": ["id1.jpeg","id3.jpeg","id2.png","id3.jpeg"],
  "Vnyl Sticker": ["vnyl1.jpeg","vnyl2.jpeg","vnyl3.jpeg","vnyl4.jpeg", ],
  "Flex Printing": ["flex1.jpeg","flex2.jpeg","flex3.jpeg","flex1.jpeg",],
  "Visiting Card": ["visitingcard.jpeg", "visiting1.jpg","visiting2.jpeg","visiting3.jpeg"],
};

const getProductImage = (category: string, n: number): string => {
  const list = categoryImageOrder[category] ?? [];
  if (list.length === 0) {
    console.warn(`No images configured for category "${category}"`);
    return "";
  }
  const filename = list[(n - 1) % list.length].toLowerCase();
  const url = imageByFilename[filename];
  if (!url) {
    console.warn(`Image "${filename}" not found for category "${category}"`);
    return "";
  }
  return url;
};

interface ProductSeed {
  category: ProductCategory;
  items: { title: string; description: string }[];
}

const seedData: ProductSeed[] = [
  {
    category: "Diaries",
    items: [
      {
        title: "Executive Heritage Diary",
        description:
          "Premium leather-bound planner with archival-grade paper and gold-edged pages.",
      },
      {
        title: "Classic Leather Diary",
        description:
          "Full-grain leather cover with ribbon marker and 90gsm cream pages.",
      },
      {
        title: "Minimalist Kraft Diary",
        description:
          "Uncoated kraft cover with a stitched spine for a clean, understated look.",
      },
      {
        title: "Weekly Planner Diary",
        description:
          "Structured weekly spreads with goal-tracking pages and a monthly overview.",
      },
    ],
  },
  {
    category: "Calendars",
    items: [
      {
        title: "Perspective Wall Calendar",
        description:
          "A3 oversized format featuring matte art paper and industrial-grade twin-loop wire binding.",
      },
      {
        title: "Minimalist Wall Calendar",
        description:
          "Clean typographic monthly grid printed on uncoated matte stock.",
      },
      {
        title: "Photo Print Calendar",
        description:
          "Full-bleed photography calendar with a spiral-bound easel back.",
      },
      {
        title: "Mini Desk Calendar",
        description: "Compact flip calendar that sits neatly on any desk.",
      },
    ],
  },
  {
    category: "Stationery",
    items: [
      {
        title: "Bespoke Corporate Stationery",
        description:
          "Fully customizable letterheads, envelopes, and business cards on premium 100% cotton stock.",
      },
      {
        title: "Premium Letterhead Set",
        description:
          "100gsm cotton letterhead sheets with a subtle watermark finish.",
      },
      {
        title: "Business Card Set",
        description: "Double-sided business cards on premium uncoated stock.",
      },
      {
        title: "Embossed Note Cards",
        description:
          "Blind-embossed note card set with matching lined envelopes.",
      },
    ],
  },
  {
    category: "Pens",
    items: [
      {
        title: "Classic Ballpoint Pen Set",
        description: "Set of six smooth-writing ballpoint pens in a compact case.",
      },
      {
        title: "Fountain Pen Deluxe",
        description:
          "Iridium-tipped fountain pen with a brass barrel and piston fill.",
      },
      {
        title: "Metallic Gel Pen Pack",
        description: "Ten-color metallic gel pen pack for notes and illustration.",
      },
      {
        title: "Executive Pen & Case",
        description: "Chrome-finish executive pen presented in a fitted hard case.",
      },
    ],
  },
  {
    category: "Customize Tshirt",
    items: [
      {
        title: "Custom Print T-Shirt",
        description: "Full-color custom prints on premium combed cotton fabric.",
      },
      {
        title: "Corporate Logo T-Shirt",
        description: "Branded team wear with durable screen-printed logos.",
      },
      {
        title: "Event Special T-Shirt",
        description: "Bulk-order tees designed for events and giveaways.",
      },
      {
        title: "Photo Print T-Shirt",
        description: "High-resolution photo prints on soft cotton blend tees.",
      },
    ],
  },
  {
    category: "Bill Book",
    items: [
      {
        title: "Duplicate Bill Book",
        description: "Carbonless duplicate bill book for everyday billing.",
      },
      {
        title: "Triplicate Bill Book",
        description: "Three-part carbonless bill book for detailed record-keeping.",
      },
      {
        title: "Custom Branded Bill Book",
        description: "Bill book printed with your business name and logo.",
      },
      {
        title: "GST Bill Book",
        description: "GST-compliant format with pre-printed tax fields.",
      },
    ],
  },
  {
    category: "Challan Book",
    items: [
      {
        title: "Delivery Challan Book",
        description: "Standard delivery challan book with duplicate copies.",
      },
      {
        title: "Custom Challan Book",
        description: "Branded challan book tailored to your business format.",
      },
      {
        title: "Triplicate Challan Book",
        description: "Three-part challan book for multi-party record tracking.",
      },
      {
        title: "Bulk Challan Book Set",
        description: "Pack of multiple challan books for high-volume use.",
      },
    ],
  },
  {
    category: "Letter Head",
    items: [
      {
        title: "Premium Letterhead",
        description: "100gsm cotton stock letterhead with subtle watermark finish.",
      },
      {
        title: "Corporate Letterhead",
        description: "Branded letterhead printed with your company identity.",
      },
      {
        title: "Minimalist Letterhead",
        description: "Clean, understated design on premium uncoated paper.",
      },
      {
        title: "Bulk Letterhead Pack",
        description: "Cost-effective bulk printing for everyday correspondence.",
      },
    ],
  },
  {
    category: "Envelop",
    items: [
      {
        title: "Custom Envelope Pack",
        description: "Pack of envelopes available in a range of finishes and sizes.",
      },
      {
        title: "Corporate Branded Envelope",
        description: "Envelopes printed with your business logo and address.",
      },
      {
        title: "Premium Cotton Envelope",
        description: "Soft-touch cotton paper envelopes for formal correspondence.",
      },
      {
        title: "Bulk Envelope Set",
        description: "Economical bulk pack for everyday mailing needs.",
      },
    ],
  },
  {
    category: "ID Card",
    items: [
      {
        title: "Employee ID Card",
        description: "PVC ID card with photo, name, and designation printing.",
      },
      {
        title: "Student ID Card",
        description: "Durable laminated ID card for schools and colleges.",
      },
      {
        title: "Custom Branded ID Card",
        description:
          "Fully customizable ID card with your organization's branding.",
      },
      {
        title: "Event Access ID Card",
        description: "Quick-turnaround ID cards for events and conferences.",
      },
    ],
  },
  {
    category: "Vnyl Sticker",
    items: [
      {
        title: "Custom Vinyl Sticker Pack",
        description: "Weatherproof vinyl stickers cut to any custom shape.",
      },
      {
        title: "Branded Logo Sticker",
        description: "Durable vinyl stickers printed with your logo.",
      },
      {
        title: "Glossy Vinyl Sticker Set",
        description: "High-gloss finish stickers for vibrant, sharp prints.",
      },
      {
        title: "Matte Vinyl Sticker Set",
        description: "Matte-finish vinyl stickers for a subtle, premium look.",
      },
    ],
  },
  {
    category: "Flex Printing",
    items: [
      {
        title: "Outdoor Flex Banner",
        description: "Weather-resistant flex banner for outdoor advertising.",
      },
      {
        title: "Indoor Flex Print",
        description: "High-resolution flex printing for indoor displays.",
      },
      {
        title: "Custom Flex Hoarding",
        description: "Large-format flex printing for hoardings and signage.",
      },
      {
        title: "Event Flex Backdrop",
        description: "Vibrant flex backdrop printing for events and photoshoots.",
      },
    ],
  },
  {
    category: "Visiting Card",
    items: [
      {
        title: "Classic Visiting Card",
        description: "Double-sided visiting cards on premium card stock.",
      },
      {
        title: "Matte Finish Visiting Card",
        description: "Soft-touch matte lamination for a premium feel.",
      },
      {
        title: "Glossy Visiting Card",
        description: "Vibrant glossy finish for eye-catching visiting cards.",
      },
      {
        title: "Textured Cotton Visiting Card",
        description: "Premium cotton stock with a subtle textured finish.",
      },
    ],
  },
];

export const products: Product[] = seedData.flatMap((group, groupIndex) =>
  group.items.map((item, itemIndex) => ({
    id: groupIndex * 4 + itemIndex + 1,
    title: item.title,
    description: item.description,
    category: group.category,
    featured: groupIndex === 0 && itemIndex === 0,
    image: getProductImage(group.category, itemIndex + 1),
  }))
);
// import type { Product } from "../types";

// // Eagerly import every image in src/assets/images.
// // This file lives at src/components/products/data/products.ts,
// // so we go up 3 levels to reach src/, then into assets/images.
// const imageModules = import.meta.glob(
//   "../../../assets/images/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}",
//   { eager: true, import: "default" }
// ) as Record<string, string>;

// // Flatten into { lowercase filename : resolved url }
// const imageFiles = Object.entries(imageModules).map(([path, url]) => ({
//   name: (path.split("/").pop() ?? "").toLowerCase(),
//   url,
// }));


// const categoryKeywords: Record<string, string[]> = {
//   Diaries: ["diary"], // keeping "dairy" too in case any old files remain
//   Calendars: ["calender", "calendar"],
//   Stationery: ["stationery"],
//   Pens: ["pen"],
//   "Customize Tshirt": ["tshirt"],
//   "Bill Book": ["billbook", "cespabill", "hondabill"],
//   "Challan Book": ["challanbook", "hondachallanbook", "challan"],
//   "Letter Head": ["letter"],
//   Envelop: ["envelop", "envelp", "envelope"],
//   "ID Card": ["idcard", "cespaid"],
//   "Vnyl Sticker": ["vnyl", "vinyl"],
//   "Flex Printing": ["flex"],
//   "Visiting Card": ["visiting"],
// };

// const findImagesForCategory = (category: string): string[] => {
//   const keywords = categoryKeywords[category] ?? [];
//   return imageFiles
//     .filter((f) => keywords.some((kw) => f.name.includes(kw)))
//     .map((f) => f.url);
// };


// const getProductImage = (category: string, n: number): string => {
//   const matches = findImagesForCategory(category);
//   if (matches.length === 0) {
//     console.warn(`No images matched for category "${category}"`);
//     return "";
//   }
//   return matches[(n - 1) % matches.length];
// };

// interface ProductSeed {
//   category: string;
//   items: { title: string; description: string }[];
// }

// const seedData: ProductSeed[] = [
//   {
//     category: "Diaries",
//     items: [
//       {
//         title: "Executive Heritage Diary",
//         description:
//           "Premium leather-bound planner with archival-grade paper and gold-edged pages.",
//       },
//       {
//         title: "Classic Leather Diary",
//         description:
//           "Full-grain leather cover with ribbon marker and 90gsm cream pages.",
//       },
//       {
//         title: "Minimalist Kraft Diary",
//         description:
//           "Uncoated kraft cover with a stitched spine for a clean, understated look.",
//       },
//       {
//         title: "Weekly Planner Diary",
//         description:
//           "Structured weekly spreads with goal-tracking pages and a monthly overview.",
//       },
//     ],
//   },
//   {
//     category: "Calendars",
//     items: [
//       {
//         title: "Perspective Wall Calendar",
//         description:
//           "A3 oversized format featuring matte art paper and industrial-grade twin-loop wire binding.",
//       },
//       {
//         title: "Minimalist Wall Calendar",
//         description:
//           "Clean typographic monthly grid printed on uncoated matte stock.",
//       },
//       {
//         title: "Photo Print Calendar",
//         description:
//           "Full-bleed photography calendar with a spiral-bound easel back.",
//       },
//       {
//         title: "Mini Desk Calendar",
//         description: "Compact flip calendar that sits neatly on any desk.",
//       },
//     ],
//   },
//   {
//     category: "Stationery",
//     items: [
//       {
//         title: "Bespoke Corporate Stationery",
//         description:
//           "Fully customizable letterheads, envelopes, and business cards on premium 100% cotton stock.",
//       },
//       {
//         title: "Premium Letterhead Set",
//         description:
//           "100gsm cotton letterhead sheets with a subtle watermark finish.",
//       },
//       {
//         title: "Business Card Set",
//         description: "Double-sided business cards on premium uncoated stock.",
//       },
//       {
//         title: "Embossed Note Cards",
//         description:
//           "Blind-embossed note card set with matching lined envelopes.",
//       },
//     ],
//   },
//   {
//     category: "Pens",
//     items: [
//       {
//         title: "Classic Ballpoint Pen Set",
//         description: "Set of six smooth-writing ballpoint pens in a compact case.",
//       },
//       {
//         title: "Fountain Pen Deluxe",
//         description:
//           "Iridium-tipped fountain pen with a brass barrel and piston fill.",
//       },
//       {
//         title: "Metallic Gel Pen Pack",
//         description: "Ten-color metallic gel pen pack for notes and illustration.",
//       },
//       {
//         title: "Executive Pen & Case",
//         description: "Chrome-finish executive pen presented in a fitted hard case.",
//       },
//     ],
//   },
//   {
//     category: "Customize Tshirt",
//     items: [
//       {
//         title: "Custom Print T-Shirt",
//         description: "Full-color custom prints on premium combed cotton fabric.",
//       },
//       {
//         title: "Corporate Logo T-Shirt",
//         description: "Branded team wear with durable screen-printed logos.",
//       },
//       {
//         title: "Event Special T-Shirt",
//         description: "Bulk-order tees designed for events and giveaways.",
//       },
//       {
//         title: "Photo Print T-Shirt",
//         description: "High-resolution photo prints on soft cotton blend tees.",
//       },
//     ],
//   },
//   {
//     category: "Bill Book",
//     items: [
//       {
//         title: "Duplicate Bill Book",
//         description: "Carbonless duplicate bill book for everyday billing.",
//       },
//       {
//         title: "Triplicate Bill Book",
//         description: "Three-part carbonless bill book for detailed record-keeping.",
//       },
//       {
//         title: "Custom Branded Bill Book",
//         description: "Bill book printed with your business name and logo.",
//       },
//       {
//         title: "GST Bill Book",
//         description: "GST-compliant format with pre-printed tax fields.",
//       },
//     ],
//   },
//   {
//     category: "Challan Book",
//     items: [
//       {
//         title: "Delivery Challan Book",
//         description: "Standard delivery challan book with duplicate copies.",
//       },
//       {
//         title: "Custom Challan Book",
//         description: "Branded challan book tailored to your business format.",
//       },
//       {
//         title: "Triplicate Challan Book",
//         description: "Three-part challan book for multi-party record tracking.",
//       },
//       {
//         title: "Bulk Challan Book Set",
//         description: "Pack of multiple challan books for high-volume use.",
//       },
//     ],
//   },
//   {
//     category: "Letter Head",
//     items: [
//       {
//         title: "Premium Letterhead",
//         description: "100gsm cotton stock letterhead with subtle watermark finish.",
//       },
//       {
//         title: "Corporate Letterhead",
//         description: "Branded letterhead printed with your company identity.",
//       },
//       {
//         title: "Minimalist Letterhead",
//         description: "Clean, understated design on premium uncoated paper.",
//       },
//       {
//         title: "Bulk Letterhead Pack",
//         description: "Cost-effective bulk printing for everyday correspondence.",
//       },
//     ],
//   },
//   {
//     category: "Envelop",
//     items: [
//       {
//         title: "Custom Envelope Pack",
//         description: "Pack of envelopes available in a range of finishes and sizes.",
//       },
//       {
//         title: "Corporate Branded Envelope",
//         description: "Envelopes printed with your business logo and address.",
//       },
//       {
//         title: "Premium Cotton Envelope",
//         description: "Soft-touch cotton paper envelopes for formal correspondence.",
//       },
//       {
//         title: "Bulk Envelope Set",
//         description: "Economical bulk pack for everyday mailing needs.",
//       },
//     ],
//   },
//   {
//     category: "ID Card",
//     items: [
//       {
//         title: "Employee ID Card",
//         description: "PVC ID card with photo, name, and designation printing.",
//       },
//       {
//         title: "Student ID Card",
//         description: "Durable laminated ID card for schools and colleges.",
//       },
//       {
//         title: "Custom Branded ID Card",
//         description:
//           "Fully customizable ID card with your organization's branding.",
//       },
//       {
//         title: "Event Access ID Card",
//         description: "Quick-turnaround ID cards for events and conferences.",
//       },
//     ],
//   },
//   {
//     category: "Vnyl Sticker",
//     items: [
//       {
//         title: "Custom Vinyl Sticker Pack",
//         description: "Weatherproof vinyl stickers cut to any custom shape.",
//       },
//       {
//         title: "Branded Logo Sticker",
//         description: "Durable vinyl stickers printed with your logo.",
//       },
//       {
//         title: "Glossy Vinyl Sticker Set",
//         description: "High-gloss finish stickers for vibrant, sharp prints.",
//       },
//       {
//         title: "Matte Vinyl Sticker Set",
//         description: "Matte-finish vinyl stickers for a subtle, premium look.",
//       },
//     ],
//   },
//   {
//     category: "Flex Printing",
//     items: [
//       {
//         title: "Outdoor Flex Banner",
//         description: "Weather-resistant flex banner for outdoor advertising.",
//       },
//       {
//         title: "Indoor Flex Print",
//         description: "High-resolution flex printing for indoor displays.",
//       },
//       {
//         title: "Custom Flex Hoarding",
//         description: "Large-format flex printing for hoardings and signage.",
//       },
//       {
//         title: "Event Flex Backdrop",
//         description: "Vibrant flex backdrop printing for events and photoshoots.",
//       },
//     ],
//   },
//   {
//     category: "Visiting Card",
//     items: [
//       {
//         title: "Classic Visiting Card",
//         description: "Double-sided visiting cards on premium card stock.",
//       },
//       {
//         title: "Matte Finish Visiting Card",
//         description: "Soft-touch matte lamination for a premium feel.",
//       },
//       {
//         title: "Glossy Visiting Card",
//         description: "Vibrant glossy finish for eye-catching visiting cards.",
//       },
//       {
//         title: "Textured Cotton Visiting Card",
//         description: "Premium cotton stock with a subtle textured finish.",
//       },
//     ],
//   },
// ];

// export const products: Product[] = seedData.flatMap((group, groupIndex) =>
//   group.items.map((item, itemIndex) => ({
//     id: groupIndex * 4 + itemIndex + 1,
//     title: item.title,
//     description: item.description,
//     category: group.category,
//     featured: groupIndex === 0 && itemIndex === 0,
//     image: getProductImage(group.category, itemIndex + 1),
//   }))
// );