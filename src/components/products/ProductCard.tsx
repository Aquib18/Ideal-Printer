import { ArrowRight } from "lucide-react";
import Card from "../common/Card";
import Button from "../common/Button";
import type { Product } from "./types";
import { openWhatsApp } from "../../utils/whatsapp";

interface ProductCardProps {
  product: Product;
  onEnquire?: (product: Product) => void;
}

export default function ProductCard({ product, onEnquire }: ProductCardProps) {
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
            {/* {product.price} */}
          </span>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              openWhatsApp(
                `Hello, Ideal Printers. I'm interested in the "${product.title}" product. Please share more details.`,
              );
              onEnquire?.(product);
            }}
            className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Enquire
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
