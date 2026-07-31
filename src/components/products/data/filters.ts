import type { ProductCategory } from "../types";

const filterCheckboxes: readonly ProductCategory[] = [
  "Diaries",
  "Calendars",
  "Stationery",
  "Pens",
  "Customize Tshirt",
  "Bill Book",
  "Challan Book",
  "Letter Head",
  "Envelop",
  "ID Card",
  "Vnyl Sticker",
  "Flex Printing",
  "Visiting Card",
] as const;

export default filterCheckboxes;