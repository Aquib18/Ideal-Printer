// import { categories } from "./data/categories";
// import type { Category } from "./types";

// const colors = {
//   primary: "#040505",
//   primaryContainer: "#1e1e1e",
//   secondary: "#7b581f",
//   secondaryFixed: "#ffddb0",
//   secondaryContainer: "#ffcf8b",
//   onSecondaryFixed: "#291800",
//   outline: "#747878",
// } as const;

// interface ProductHeroProps {
//   activeCategory: Category;
//   setActiveCategory: (category: Category) => void;
// }

// export default function ProductHero({
//   activeCategory,
//   setActiveCategory,
// }: ProductHeroProps) {
//   return (
//     <section
//       className="py-16"
//       style={{ backgroundColor: colors.primaryContainer }}
//     >
//       <div className="max-w-[1280px] mx-auto px-4 md:px-16">
//         <h1
//           className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
//           style={{
//             fontFamily: "Georgia, serif",
//             color: colors.secondaryFixed,
//           }}
//         >
//           Our Catalogue
//         </h1>

//         <div className="flex flex-wrap gap-4 overflow-x-auto pb-4">
//           {categories.map((cat) => {
//             const isActive = activeCategory === cat;

//             return (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className="px-8 py-3 rounded-full text-sm font-semibold border transition-all"
//                 style={
//                   isActive
//                     ? {
//                         backgroundColor: colors.secondaryContainer,
//                         color: colors.onSecondaryFixed,
//                         borderColor: colors.secondary,
//                       }
//                     : {
//                         backgroundColor: "transparent",
//                         color: colors.secondaryFixed,
//                         borderColor: colors.outline,
//                       }
//                 }
//               >
//                 {cat}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import Container from "../common/Container";
import { categories } from "./data/categories";
import type { Category } from "./types";

interface ProductHeroProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

export default function ProductHero({
  activeCategory,
  setActiveCategory,
}: ProductHeroProps) {
  return (
    <section className="bg-[#1e1e1e] py-16">
      <Container className="max-w-[1280px]">
        <h1 className="mb-8 font-serif text-4xl font-bold tracking-tight text-[#d1a564] md:text-5xl">
          Our Catalogue
        </h1>

        <div className="flex flex-wrap gap-4 overflow-x-auto pb-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-8 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#7b581f] bg-[#d1a564] text-[#291800]"
                    : "border-[#747878] bg-transparent text-[#d1a564] hover:border-[#7b581f] hover:bg-[#d1a564] hover:text-[#291800]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}