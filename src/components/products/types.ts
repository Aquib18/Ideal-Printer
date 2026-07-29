export const categories = [
  "All",
  "Diaries",
  "Notebooks",
  "Calendars",
  "Stationery",
  "Pens",
  "Gift Boxes",
] as const;

export type Category = (typeof categories)[number];

export type ProductCategory = Exclude<Category, "All">;

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: ProductCategory;
  featured?: boolean;
}