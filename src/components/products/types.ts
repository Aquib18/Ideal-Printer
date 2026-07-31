// export const categories = [
//   "All",
//   "Diaries",
//   "Notebooks",
//   "Calendars",
//   "Stationery",
//   "Pens",


//   "Customize Tshirt",
//   "Gift Boxes",
//   "Bill Book",
//   "Challan Book",
//   "Letter Head",
//   "Envelop",
//   "ID Card",
//   "Vnyl Sticker",
//   "Flex Printing",
//   "Visiting Card"

// ] as const;

// export type Category = (typeof categories)[number];

// export type ProductCategory = Exclude<Category, "All">;

// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   category: Category; // was: string
//   featured?: boolean;
//   image: string;
// }
export type Category =
  | "All"
  | "Diaries"
  | "Notebooks"
  | "Calendars"
  | "Stationery"
  | "Pens"
  | "Customize Tshirt"
  | "Gift Boxes"
  | "Bill Book"
  | "Challan Book"
  | "Letter Head"
  | "Envelop"
  | "ID Card"
  | "Vnyl Sticker"
  | "Flex Printing"
  | "Visiting Card";

// A product can be tagged with any real category, just never "All"
export type ProductCategory = Exclude<Category, "All">;

export interface Product {
  id: number;
  title: string;
  description: string;
  category: ProductCategory; // was: Category
  featured?: boolean;
  image: string;
}