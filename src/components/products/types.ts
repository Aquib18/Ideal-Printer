export const categories = [
  "All",
  "Diaries",
  "Notebooks",
  "Calendars",
  "Stationery",
  "Pens",


  "Customize Tshirt",
  "Gift Boxes",
  "Bill Book",
  "Challan Book",
  "Letter Head",
  "Envelop",
  "ID Card",
  "Vnyl Sticker",
  "Flex Printing",
  "Visiting Card"

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