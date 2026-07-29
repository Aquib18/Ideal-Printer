import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// ---- Design tokens (from the original Material-style theme) ----
const colors = {
  primary: "#040505",
  primaryContainer: "#1e1e1e",
  onPrimary: "#ffffff",
  secondary: "#7b581f",
  secondaryFixed: "#ffddb0",
  secondaryFixedDim: "#c8a165",
  secondaryContainer: "#ffcf8b",
  onSecondaryFixed: "#291800",
  surface: "#fbf9f9",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#f5f3f3",
  surfaceContainerHigh: "#e9e8e7",
  onSurface: "#1b1c1c",
  onSurfaceVariant: "#444748",
  outline: "#747878",
  outlineVariant: "#c4c7c7",
} as const;

const categories = ["All", "Diaries", "Notebooks", "Calendars", "Stationery", "Pens", "Gift Boxes"] as const;
type Category = (typeof categories)[number];
type ProductCategory = Exclude<Category, "All">;

const filterCheckboxes = [
  "Premium Corporate Diaries",
  "Leather Bound Notebooks",
  "Executive Wall Calendars",
  "Custom Desktop Calendars",
  "Signature Pens & Sets",
] as const;

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
  image: string;
  category: ProductCategory;
}

// Placeholder photo helper for the added catalogue items (deterministic per id).
const placeholderImage = (id: number) => `https://picsum.photos/seed/idealprinters-${id}/600/400`;

const products: Product[] = [
  {
    id: 1,
    title: "Executive Heritage Diary",
    description:
      "Premium 2024 leather-bound planner with archival-grade paper and gold-edged pages.",
    price: "$45.00",
    featured: true,
    category: "Diaries",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYwRmtwj0ot0_i3NLs1DdT1dZqeib4Nl_ijylMktX0rAuXqRTliDKggX4GapYxgJcYbspq-1QzGDexUtIp19gWztqYtlwlSHxgUvqdnsZsw9gLQd248dxB-II7jBB9lZeenxsbOeUIrgH6ttGL9Gs3jFZPum16qTlcwk4sVAdNB2AsCk8_4UWAtYltQdatzIYf71JBY7yv2RpVpSrvur0kblYQn6fv-dD3TreWmMQHjnqSMeH_Jb035V1NGrMxfVAgEaQ_Fz4fe7GR",
  },
  {
    id: 2,
    title: "Industrial Grid Notebook",
    description:
      "Linen cover with 120gsm dot-grid paper, perfect for architectural sketches and meeting notes.",
    price: "$22.50",
    category: "Notebooks",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9ZlrBv1g7tRRh_sh6S_qbXVTLB1zXd6ZDTxhonB9WYd5pkDwbgYrXSRnl7lnLcJJZCl8k7tRk2ehIEjf9_JDPu8Eplm8k93gFGXymashGBf4XTBWF4b3__PihSG5LCgZhfonaePwOz7My6Vwkd99u9yKrB1O4j9x8aCm41v-fQ8kPFQvH87j49ZJLdJ7fTD9exf6alr_gazGk_3mKZi3TDkq5oRDA5k90UfseOZ2HzpRB0D-SYzSEiiVjVNI_oiGItCpIau46LP8i",
  },
  {
    id: 3,
    title: "Perspective Wall Calendar",
    description:
      "A3 oversized format featuring matte art paper and industrial-grade twin-loop wire binding.",
    price: "$35.00",
    category: "Calendars",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAXBFTcJXt87Q5Q4uNr9E1_gm5ItqUUVHzO-wcVH-2qkDqvICL3hPMGa7fHOm6R_4VynJB8ByZ2TIoZ5iASTpa2o3GleHVJBnU2I0Az-Tl9rWA6HTiZktdnfvEvtMrh4-j39V16nNrE5ne6XeiJNDx895rsiSgnDmG4KRIRHg0B0tmwj3dUUi54AIF4geO8IF-IQRo23ALIwdzae18HKxMzUnrYDtHj5RvzpjpI_qpPg2iLIr7aR5w7P7BFFygz8YkZ6brOFMEvHDC",
  },
  {
    id: 4,
    title: "The Signature Gift Set",
    description:
      "Complete executive gift suite including fountain pen, business card holder, and premium box.",
    price: "$120.00",
    category: "Gift Boxes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5hYoCSzTbX8MTKne1pEALw-3cRzEUxoUpqwhnpdL-4naIRY5ABaNlv23GeJYb6cBFqYtvi9O-VGXpl5IiORMX5G0C_eM9yP9TCo4l9mtOQpeOgyZZRcBUidCbV0SWKIuP2U7sAe0eTLHGdKgC9VtLG05gGEqoX4aaqTitRlbYTXGhlWu09SNFy9do0GzdQ6HoADALZMOr_mpqGdKWLNMtpT_Xl6SO18FIEtaOWp4DytM5W3ljvL_vf-qOVgUih8knw0goZfvVmRfI",
  },
  {
    id: 5,
    title: "Bespoke Corporate Stationery",
    description:
      "Fully customizable letterheads, envelopes, and business cards on premium 100% cotton stock.",
    price: "Custom Quote",
    category: "Stationery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKZJjN7TdSRUTzSacWEDj0cJUTHMu9M-4JNhEh_mzZ-VZmASPCTFDoUfvP-3QZajSCozjc9UcEJopQFI8J9k4aHQdlQAZUFBZF7v76-QDxf2ciHmcHJmxDcbdVe3T86CaPf-09XP6GaZ3t8Z373uQv9sDZeBW5nus4AYg6djUSRYPArrRckhzVgbprg13KzYTwlSKgp5orJpvxG-3zBlsoTccVjpOShpzncHFJsZAieyg2sgwZP26JALpX35Byb6apE3Yl4owco88B",
  },
  {
    id: 6,
    title: "Blueprints Desktop Calendar",
    description:
      "Heavyweight triangular tent cards with vibrant UV-cured digital printing for lasting durability.",
    price: "$12.00",
    category: "Calendars",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4ibVaFfKu70jCXBzw-9m7xCUnpsDE-U8L7UnnlhoHdigqUjSaflESALVlXem-J5wvgOEMxvypTU2IShtQAvpQgrbm7LxxkIEI7BU-Fv_qu9XZzEaIhRPXIYmiediSheRe89UBvdj-e8a7KlyJNgug3IyrtbAdpfW8qMZtjyPslKEf602tze69dg4iOkC99i7YdqLOnplc0w2nlUl1xiR5WDmgiHsqQaBrjCvPNgRVI3DMC_l3IgmYDWNhU3mykbVOU__Enhp4MUeq",
  },

  // ---- Diaries (7 more) ----
  { id: 7, title: "Classic Leather Diary", description: "Full-grain leather cover with ribbon marker and 90gsm cream pages.", price: "$38.00", category: "Diaries", image: placeholderImage(7) },
  { id: 8, title: "Minimalist Kraft Diary", description: "Uncoated kraft cover with a stitched spine for a clean, understated look.", price: "$18.00", category: "Diaries", image: placeholderImage(8) },
  { id: 9, title: "Pocket Travel Diary", description: "Compact A6 diary with an elastic closure, built for life on the road.", price: "$15.00", category: "Diaries", image: placeholderImage(9) },
  { id: 10, title: "Vintage Bound Journal Diary", description: "Antique-finish cover with deckle-edge paper for a handmade feel.", price: "$42.00", category: "Diaries", image: placeholderImage(10) },
  { id: 11, title: "Weekly Planner Diary", description: "Structured weekly spreads with goal-tracking pages and a monthly overview.", price: "$28.00", category: "Diaries", image: placeholderImage(11) },
  { id: 12, title: "Monogram Leather Diary", description: "Personalized foil-stamped initials on a full-grain leather cover.", price: "$50.00", category: "Diaries", image: placeholderImage(12) },
  { id: 13, title: "Recycled Paper Diary", description: "100% post-consumer recycled paper with a soy-ink printed cover.", price: "$20.00", category: "Diaries", image: placeholderImage(13) },

  // ---- Notebooks (7 more) ----
  { id: 14, title: "Ruled Softcover Notebook", description: "Everyday ruled notebook with a flexible softcover and 80gsm paper.", price: "$10.00", category: "Notebooks", image: placeholderImage(14) },
  { id: 15, title: "Hardcover Sketch Notebook", description: "Heavyweight blank pages built for pencil, ink, and light watercolor work.", price: "$24.00", category: "Notebooks", image: placeholderImage(15) },
  { id: 16, title: "Spiral Bound Notebook Set", description: "Set of three spiral notebooks that lie flat for easy note-taking.", price: "$16.00", category: "Notebooks", image: placeholderImage(16) },
  { id: 17, title: "Kraft Cover Notebook", description: "Recycled kraft cover with a rubber band closure and pen loop.", price: "$12.00", category: "Notebooks", image: placeholderImage(17) },
  { id: 18, title: "Premium Leather Notebook", description: "Refillable leather cover with an interchangeable dot-grid insert.", price: "$32.00", category: "Notebooks", image: placeholderImage(18) },
  { id: 19, title: "Pocket Notebook 3-Pack", description: "Slim pocket-sized notebooks for quick notes on the go.", price: "$9.00", category: "Notebooks", image: placeholderImage(19) },
  { id: 20, title: "Recycled Fiber Notebook", description: "Made from reclaimed textile fiber paper with a matte laminate cover.", price: "$14.00", category: "Notebooks", image: placeholderImage(20) },

  // ---- Calendars (6 more) ----
  { id: 21, title: "Minimalist Wall Calendar", description: "Clean typographic monthly grid printed on uncoated matte stock.", price: "$18.00", category: "Calendars", image: placeholderImage(21) },
  { id: 22, title: "Photo Print Calendar", description: "Full-bleed photography calendar with a spiral-bound easel back.", price: "$25.00", category: "Calendars", image: placeholderImage(22) },
  { id: 23, title: "Weekly Planner Calendar", description: "Wall-mounted weekly planner with a wipeable laminated surface.", price: "$20.00", category: "Calendars", image: placeholderImage(23) },
  { id: 24, title: "Corporate Branded Calendar", description: "Fully customizable calendar with your logo on every page.", price: "$30.00", category: "Calendars", image: placeholderImage(24) },
  { id: 25, title: "Mini Desk Calendar", description: "Compact flip calendar that sits neatly on any desk.", price: "$8.00", category: "Calendars", image: placeholderImage(25) },
  { id: 26, title: "Seasonal Art Calendar", description: "Limited-run calendar featuring a different illustrator each month.", price: "$22.00", category: "Calendars", image: placeholderImage(26) },

  // ---- Stationery (7 more) ----
  { id: 27, title: "Premium Letterhead Set", description: "100gsm cotton letterhead sheets with a subtle watermark finish.", price: "$45.00", category: "Stationery", image: placeholderImage(27) },
  { id: 28, title: "Custom Envelope Pack", description: "Pack of 50 envelopes available in a range of finishes and sizes.", price: "$20.00", category: "Stationery", image: placeholderImage(28) },
  { id: 29, title: "Business Card Set", description: "500 double-sided business cards on premium uncoated stock.", price: "$35.00", category: "Stationery", image: placeholderImage(29) },
  { id: 30, title: "Cotton Paper Notepad", description: "50-sheet notepad on soft-touch cotton paper with a chipboard back.", price: "$15.00", category: "Stationery", image: placeholderImage(30) },
  { id: 31, title: "Wax Seal Stationery Kit", description: "Correspondence set with a brass seal stamp and colored wax sticks.", price: "$28.00", category: "Stationery", image: placeholderImage(31) },
  { id: 32, title: "Recycled Kraft Stationery Set", description: "Envelopes and note cards made from 100% recycled kraft paper.", price: "$18.00", category: "Stationery", image: placeholderImage(32) },
  { id: 33, title: "Embossed Note Cards", description: "Blind-embossed note card set with matching lined envelopes.", price: "$22.00", category: "Stationery", image: placeholderImage(33) },

  // ---- Pens (8 new) ----
  { id: 34, title: "Classic Ballpoint Pen Set", description: "Set of six smooth-writing ballpoint pens in a compact case.", price: "$12.00", category: "Pens", image: placeholderImage(34) },
  { id: 35, title: "Fountain Pen Deluxe", description: "Iridium-tipped fountain pen with a brass barrel and piston fill.", price: "$55.00", category: "Pens", image: placeholderImage(35) },
  { id: 36, title: "Rollerball Pen Trio", description: "Three matte-finish rollerball pens with quick-dry archival ink.", price: "$30.00", category: "Pens", image: placeholderImage(36) },
  { id: 37, title: "Metallic Gel Pen Pack", description: "Ten-color metallic gel pen pack for notes and illustration.", price: "$10.00", category: "Pens", image: placeholderImage(37) },
  { id: 38, title: "Executive Pen & Case", description: "Chrome-finish executive pen presented in a fitted hard case.", price: "$60.00", category: "Pens", image: placeholderImage(38) },
  { id: 39, title: "Recycled Wood Pen Set", description: "Set of two pens turned from reclaimed hardwood offcuts.", price: "$16.00", category: "Pens", image: placeholderImage(39) },
  { id: 40, title: "Calligraphy Pen Kit", description: "Beginner calligraphy kit with interchangeable nibs and ink cartridges.", price: "$25.00", category: "Pens", image: placeholderImage(40) },
  { id: 41, title: "Signature Series Pen", description: "Limited-edition pen with a hand-lacquered barrel and gold trim.", price: "$48.00", category: "Pens", image: placeholderImage(41) },

  // ---- Gift Boxes (5 more) ----
  { id: 42, title: "Deluxe Stationery Gift Box", description: "Curated box pairing a notebook, pen, and note card set.", price: "$75.00", category: "Gift Boxes", image: placeholderImage(42) },
  { id: 43, title: "Corporate Welcome Kit", description: "Branded onboarding kit with a diary, pen, and desk accessories.", price: "$90.00", category: "Gift Boxes", image: placeholderImage(43) },
  { id: 44, title: "Premium Notebook & Pen Duo", description: "Matching leather notebook and pen presented in a rigid gift box.", price: "$65.00", category: "Gift Boxes", image: placeholderImage(44) },
  { id: 45, title: "Festive Gift Hamper", description: "Seasonal hamper featuring a calendar, diary, and stationery set.", price: "$85.00", category: "Gift Boxes", image: placeholderImage(45) },
  { id: 46, title: "Minimalist Gift Set", description: "Pared-back gift set with a kraft notebook and matte black pen.", price: "$55.00", category: "Gift Boxes", image: placeholderImage(46) },
];

const ITEMS_PER_PAGE = 6;

/** Builds a compact page-number list with ellipses, e.g. [1, 2, 3, "...", 12] */
function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set<number>([1, total, current, current - 1, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const result: (number | "...")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) result.push("...");
    result.push(p);
  });
  return result;
}

export interface CatalogueSectionProps {
  /** Called when the user clicks "Enquire" on a product card. */
  onEnquire?: (product: Product) => void;
}

export default function CatalogueSection({ onEnquire }: CatalogueSectionProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [checked, setChecked] = useState<boolean[]>([true, false, false, false, false]);
  const [price, setPrice] = useState<number>(5000);
  const [page, setPage] = useState<number>(1);

  const toggleCheckbox = (idx: number) => {
    setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  // Only the products matching the active category are shown.
  const filteredProducts =
    activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const visibleProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Reset to page 1 whenever the category changes so pagination stays in sync.
  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface }}>
      {/* Page Header & Category Tabs */}
      <section className="py-16" style={{ backgroundColor: colors.primaryContainer }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <h1
            className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
            style={{ fontFamily: "Georgia, serif", color: colors.secondaryFixed }}
          >
            Our Catalogue
          </h1>
          <div className="flex flex-wrap gap-4 overflow-x-auto pb-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-8 py-3 rounded-full text-sm font-semibold border transition-all"
                  style={
                    isActive
                      ? {
                          backgroundColor: colors.secondaryContainer,
                          color: colors.onSecondaryFixed,
                          borderColor: colors.secondary,
                        }
                      : {
                          backgroundColor: "transparent",
                          color: colors.secondaryFixed,
                          borderColor: colors.outline,
                        }
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1280px] mx-auto px-4 md:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-28 space-y-10">
              <div>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-6 pb-2"
                  style={{ color: colors.primary, borderBottom: `1px solid ${colors.secondaryContainer}` }}
                >
                  Categories
                </h3>
                <div className="space-y-3">
                  {filterCheckboxes.map((label, idx) => (
                    <label key={label} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={checked[idx]}
                        onChange={() => toggleCheckbox(idx)}
                        className="w-5 h-5 rounded"
                        style={{ accentColor: colors.secondary }}
                      />
                      <span
                        className="text-base transition-colors group-hover:opacity-70"
                        style={{ color: colors.onSurface }}
                      >
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-6 pb-2"
                  style={{ color: colors.primary, borderBottom: `1px solid ${colors.secondaryContainer}` }}
                >
                  Price Range
                </h3>
                <div className="px-2">
                  <input
                    type="range"
                    min={0}
                    max={5000}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full"
                    style={{ accentColor: colors.secondary }}
                  />
                  <div
                    className="flex justify-between mt-4 text-sm"
                    style={{ color: colors.onSurfaceVariant }}
                  >
                    <span>$0</span>
                    <span>{price >= 5000 ? "$5,000+" : `$${price}`}</span>
                  </div>
                </div>
              </div>

              <div
                className="p-6 rounded-xl"
                style={{ backgroundColor: colors.surfaceContainerLow, borderLeft: `4px solid ${colors.secondary}` }}
              >
                <p className="text-sm italic leading-relaxed" style={{ color: colors.onSurfaceVariant }}>
                  Looking for bulk custom branding? Contact our industrial experts for specialized quotes.
                </p>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {visibleProducts.length === 0 ? (
              <div
                className="rounded-xl p-16 text-center"
                style={{ border: `1px dashed ${colors.outlineVariant}`, color: colors.onSurfaceVariant }}
              >
                No products in this category yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {visibleProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group rounded-xl overflow-hidden shadow-sm transition-all duration-300"
                    style={{
                      backgroundColor: colors.surfaceContainerLowest,
                      border: `1px solid ${colors.outlineVariant}`,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = colors.secondary)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = colors.outlineVariant)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${product.image}')` }}
                      />
                      {product.featured && (
                        <span
                          className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded uppercase tracking-widest"
                          style={{ backgroundColor: colors.primary, color: colors.secondaryFixed }}
                        >
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h4
                        className="text-xl font-bold mb-2 line-clamp-1"
                        style={{ fontFamily: "Georgia, serif", color: colors.primary }}
                      >
                        {product.title}
                      </h4>
                      <p className="text-base mb-4 line-clamp-2" style={{ color: colors.onSurfaceVariant }}>
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-6">
                        <span className="text-xl font-bold" style={{ color: colors.secondaryFixedDim }}>
                          {product.price}
                        </span>
                        <button
                          onClick={() => onEnquire?.(product)}
                          className="px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors hover:opacity-90"
                          style={{ backgroundColor: colors.primary, color: colors.onPrimary }}
                        >
                          Enquire <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2 flex-wrap">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-12 h-12 flex items-center justify-center rounded-lg transition-colors hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ border: `1px solid ${colors.outlineVariant}` }}
                  aria-label="Previous page"
                >
                  <ChevronLeft size={20} />
                </button>

                {getPageNumbers(page, totalPages).map((n, i) =>
                  n === "..." ? (
                    <span key={`ellipsis-${i}`} className="px-2">
                      ...
                    </span>
                  ) : (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className="w-12 h-12 flex items-center justify-center rounded-lg font-bold transition-colors"
                      style={
                        page === n
                          ? { backgroundColor: colors.primary, color: colors.onPrimary }
                          : { border: `1px solid ${colors.outlineVariant}` }
                      }
                    >
                      {n}
                    </button>
                  )
                )}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-12 h-12 flex items-center justify-center rounded-lg transition-colors hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ border: `1px solid ${colors.outlineVariant}` }}
                  aria-label="Next page"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}