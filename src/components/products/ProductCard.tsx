// import { ArrowRight } from "lucide-react";
// import type { Product } from "./types";

// const colors = {
//   primary: "#040505",
//   onPrimary: "#ffffff",
//   secondary: "#7b581f",
//   secondaryFixed: "#ffddb0",
//   secondaryFixedDim: "#c8a165",
//   surfaceContainerLowest: "#ffffff",
//   outlineVariant: "#c4c7c7",
//   onSurfaceVariant: "#444748",
// } as const;

// interface ProductCardProps {
//   product: Product;
//   onEnquire?: (product: Product) => void;
// }

// export default function ProductCard({
//   product,
//   onEnquire,
// }: ProductCardProps) {
//   return (
//     <div
//       className="group rounded-xl overflow-hidden shadow-sm transition-all duration-300"
//       style={{
//         backgroundColor: colors.surfaceContainerLowest,
//         border: `1px solid ${colors.outlineVariant}`,
//       }}
//       onMouseEnter={(e) =>
//         (e.currentTarget.style.borderColor = colors.secondary)
//       }
//       onMouseLeave={(e) =>
//         (e.currentTarget.style.borderColor = colors.outlineVariant)
//       }
//     >
//       {/* Product Image */}
//       <div className="relative h-64 overflow-hidden">
//         <div
//           className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//           style={{
//             backgroundImage: `url('${product.image}')`,
//           }}
//         />

//         {product.featured && (
//           <span
//             className="absolute top-4 left-4 px-3 py-1 rounded uppercase tracking-widest text-xs font-bold"
//             style={{
//               backgroundColor: colors.primary,
//               color: colors.secondaryFixed,
//             }}
//           >
//             Featured
//           </span>
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <h4
//           className="text-xl font-bold mb-2 line-clamp-1"
//           style={{
//             fontFamily: "Georgia, serif",
//             color: colors.primary,
//           }}
//         >
//           {product.title}
//         </h4>

//         <p
//           className="text-base mb-4 line-clamp-2"
//           style={{
//             color: colors.onSurfaceVariant,
//           }}
//         >
//           {product.description}
//         </p>

//         <div className="flex items-center justify-between mt-6">
//           <span
//             className="text-xl font-bold"
//             style={{
//               color: colors.secondaryFixedDim,
//             }}
//           >
//             {product.price}
//           </span>

//           <button
//             onClick={() => onEnquire?.(product)}
//             className="px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-colors"
//             style={{
//               backgroundColor: colors.primary,
//               color: colors.onPrimary,
//             }}
//           >
//             Enquire
//             <ArrowRight size={16} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { ArrowRight } from "lucide-react";
import Card from "../common/Card";
import Button from "../common/Button";
import type { Product } from "./types";

interface ProductCardProps {
  product: Product;
  onEnquire?: (product: Product) => void;
}

export default function ProductCard({
  product,
  onEnquire,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-xl border border-[#c4c7c7] hover:border-[#7b581f]">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        {product.featured && (
          <span className="absolute left-4 top-4 rounded bg-[#040505] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#ffddb0]">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="mb-2 line-clamp-1 font-serif text-xl font-bold text-[#040505]">
          {product.title}
        </h4>

        <p className="mb-4 line-clamp-2 text-base text-[#444748]">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xl font-bold text-[#c8a165]">
            {product.price}
          </span>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => onEnquire?.(product)}
            className="gap-2"
          >
            Enquire
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
}