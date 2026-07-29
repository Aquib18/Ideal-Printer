import type { Product } from "../types";

export const placeholderImage = (id: number) =>
  `https://picsum.photos/seed/idealprinters-${id}/600/400`;

export const products: Product[] = [
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

  // Diaries
  {
    id: 7,
    title: "Classic Leather Diary",
    description:
      "Full-grain leather cover with ribbon marker and 90gsm cream pages.",
    price: "$38.00",
    category: "Diaries",
    image: placeholderImage(7),
  },
  {
    id: 8,
    title: "Minimalist Kraft Diary",
    description:
      "Uncoated kraft cover with a stitched spine for a clean, understated look.",
    price: "$18.00",
    category: "Diaries",
    image: placeholderImage(8),
  },
  {
    id: 9,
    title: "Pocket Travel Diary",
    description:
      "Compact A6 diary with an elastic closure, built for life on the road.",
    price: "$15.00",
    category: "Diaries",
    image: placeholderImage(9),
  },
  {
    id: 10,
    title: "Vintage Bound Journal Diary",
    description:
      "Antique-finish cover with deckle-edge paper for a handmade feel.",
    price: "$42.00",
    category: "Diaries",
    image: placeholderImage(10),
  },
  {
    id: 11,
    title: "Weekly Planner Diary",
    description:
      "Structured weekly spreads with goal-tracking pages and a monthly overview.",
    price: "$28.00",
    category: "Diaries",
    image: placeholderImage(11),
  },
  {
    id: 12,
    title: "Monogram Leather Diary",
    description:
      "Personalized foil-stamped initials on a full-grain leather cover.",
    price: "$50.00",
    category: "Diaries",
    image: placeholderImage(12),
  },
  {
    id: 13,
    title: "Recycled Paper Diary",
    description:
      "100% post-consumer recycled paper with a soy-ink printed cover.",
    price: "$20.00",
    category: "Diaries",
    image: placeholderImage(13),
  },

  // Notebooks
  {
    id: 14,
    title: "Ruled Softcover Notebook",
    description:
      "Everyday ruled notebook with a flexible softcover and 80gsm paper.",
    price: "$10.00",
    category: "Notebooks",
    image: placeholderImage(14),
  },
  {
    id: 15,
    title: "Hardcover Sketch Notebook",
    description:
      "Heavyweight blank pages built for pencil, ink, and light watercolor work.",
    price: "$24.00",
    category: "Notebooks",
    image: placeholderImage(15),
  },
    {
    id: 16,
    title: "Spiral Bound Notebook Set",
    description:
      "Set of three spiral notebooks that lie flat for easy note-taking.",
    price: "$16.00",
    category: "Notebooks",
    image: placeholderImage(16),
  },
  {
    id: 17,
    title: "Kraft Cover Notebook",
    description:
      "Recycled kraft cover with a rubber band closure and pen loop.",
    price: "$12.00",
    category: "Notebooks",
    image: placeholderImage(17),
  },
  {
    id: 18,
    title: "Premium Leather Notebook",
    description:
      "Refillable leather cover with an interchangeable dot-grid insert.",
    price: "$32.00",
    category: "Notebooks",
    image: placeholderImage(18),
  },
  {
    id: 19,
    title: "Pocket Notebook 3-Pack",
    description:
      "Slim pocket-sized notebooks for quick notes on the go.",
    price: "$9.00",
    category: "Notebooks",
    image: placeholderImage(19),
  },
  {
    id: 20,
    title: "Recycled Fiber Notebook",
    description:
      "Made from reclaimed textile fiber paper with a matte laminate cover.",
    price: "$14.00",
    category: "Notebooks",
    image: placeholderImage(20),
  },

  // Calendars
  {
    id: 21,
    title: "Minimalist Wall Calendar",
    description:
      "Clean typographic monthly grid printed on uncoated matte stock.",
    price: "$18.00",
    category: "Calendars",
    image: placeholderImage(21),
  },
  {
    id: 22,
    title: "Photo Print Calendar",
    description:
      "Full-bleed photography calendar with a spiral-bound easel back.",
    price: "$25.00",
    category: "Calendars",
    image: placeholderImage(22),
  },
  {
    id: 23,
    title: "Weekly Planner Calendar",
    description:
      "Wall-mounted weekly planner with a wipeable laminated surface.",
    price: "$20.00",
    category: "Calendars",
    image: placeholderImage(23),
  },
  {
    id: 24,
    title: "Corporate Branded Calendar",
    description:
      "Fully customizable calendar with your logo on every page.",
    price: "$30.00",
    category: "Calendars",
    image: placeholderImage(24),
  },
  {
    id: 25,
    title: "Mini Desk Calendar",
    description:
      "Compact flip calendar that sits neatly on any desk.",
    price: "$8.00",
    category: "Calendars",
    image: placeholderImage(25),
  },
  {
    id: 26,
    title: "Seasonal Art Calendar",
    description:
      "Limited-run calendar featuring a different illustrator each month.",
    price: "$22.00",
    category: "Calendars",
    image: placeholderImage(26),
  },

  // Stationery
  {
    id: 27,
    title: "Premium Letterhead Set",
    description:
      "100gsm cotton letterhead sheets with a subtle watermark finish.",
    price: "$45.00",
    category: "Stationery",
    image: placeholderImage(27),
  },
  {
    id: 28,
    title: "Custom Envelope Pack",
    description:
      "Pack of 50 envelopes available in a range of finishes and sizes.",
    price: "$20.00",
    category: "Stationery",
    image: placeholderImage(28),
  },
  {
    id: 29,
    title: "Business Card Set",
    description:
      "500 double-sided business cards on premium uncoated stock.",
    price: "$35.00",
    category: "Stationery",
    image: placeholderImage(29),
  },
  {
    id: 30,
    title: "Cotton Paper Notepad",
    description:
      "50-sheet notepad on soft-touch cotton paper with a chipboard back.",
    price: "$15.00",
    category: "Stationery",
    image: placeholderImage(30),
  },
    {
    id: 31,
    title: "Wax Seal Stationery Kit",
    description:
      "Correspondence set with a brass seal stamp and colored wax sticks.",
    price: "$28.00",
    category: "Stationery",
    image: placeholderImage(31),
  },
  {
    id: 32,
    title: "Recycled Kraft Stationery Set",
    description:
      "Envelopes and note cards made from 100% recycled kraft paper.",
    price: "$18.00",
    category: "Stationery",
    image: placeholderImage(32),
  },
  {
    id: 33,
    title: "Embossed Note Cards",
    description:
      "Blind-embossed note card set with matching lined envelopes.",
    price: "$22.00",
    category: "Stationery",
    image: placeholderImage(33),
  },

  // Pens
  {
    id: 34,
    title: "Classic Ballpoint Pen Set",
    description:
      "Set of six smooth-writing ballpoint pens in a compact case.",
    price: "$12.00",
    category: "Pens",
    image: placeholderImage(34),
  },
  {
    id: 35,
    title: "Fountain Pen Deluxe",
    description:
      "Iridium-tipped fountain pen with a brass barrel and piston fill.",
    price: "$55.00",
    category: "Pens",
    image: placeholderImage(35),
  },
  {
    id: 36,
    title: "Rollerball Pen Trio",
    description:
      "Three matte-finish rollerball pens with quick-dry archival ink.",
    price: "$30.00",
    category: "Pens",
    image: placeholderImage(36),
  },
  {
    id: 37,
    title: "Metallic Gel Pen Pack",
    description:
      "Ten-color metallic gel pen pack for notes and illustration.",
    price: "$10.00",
    category: "Pens",
    image: placeholderImage(37),
  },
  {
    id: 38,
    title: "Executive Pen & Case",
    description:
      "Chrome-finish executive pen presented in a fitted hard case.",
    price: "$60.00",
    category: "Pens",
    image: placeholderImage(38),
  },
  {
    id: 39,
    title: "Recycled Wood Pen Set",
    description:
      "Set of two pens turned from reclaimed hardwood offcuts.",
    price: "$16.00",
    category: "Pens",
    image: placeholderImage(39),
  },
  {
    id: 40,
    title: "Calligraphy Pen Kit",
    description:
      "Beginner calligraphy kit with interchangeable nibs and ink cartridges.",
    price: "$25.00",
    category: "Pens",
    image: placeholderImage(40),
  },
  {
    id: 41,
    title: "Signature Series Pen",
    description:
      "Limited-edition pen with a hand-lacquered barrel and gold trim.",
    price: "$48.00",
    category: "Pens",
    image: placeholderImage(41),
  },

  // Gift Boxes
  {
    id: 42,
    title: "Deluxe Stationery Gift Box",
    description:
      "Curated box pairing a notebook, pen, and note card set.",
    price: "$75.00",
    category: "Gift Boxes",
    image: placeholderImage(42),
  },
  {
    id: 43,
    title: "Corporate Welcome Kit",
    description:
      "Branded onboarding kit with a diary, pen, and desk accessories.",
    price: "$90.00",
    category: "Gift Boxes",
    image: placeholderImage(43),
  },
  {
    id: 44,
    title: "Premium Notebook & Pen Duo",
    description:
      "Matching leather notebook and pen presented in a rigid gift box.",
    price: "$65.00",
    category: "Gift Boxes",
    image: placeholderImage(44),
  },
  {
    id: 45,
    title: "Festive Gift Hamper",
    description:
      "Seasonal hamper featuring a calendar, diary, and stationery set.",
    price: "$85.00",
    category: "Gift Boxes",
    image: placeholderImage(45),
  },
  {
    id: 46,
    title: "Minimalist Gift Set",
    description:
      "Pared-back gift set with a kraft notebook and matte black pen.",
    price: "$55.00",
    category: "Gift Boxes",
    image: placeholderImage(46),
  },
];