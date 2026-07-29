import ProductCard from "./ProductCard";
import type { Product } from "./types";

const colors = {
  outlineVariant: "#c4c7c7",
  onSurfaceVariant: "#444748",
} as const;

interface ProductGridProps {
  products: Product[];
  onEnquire?: (product: Product) => void;
}

export default function ProductGrid({
  products,
  onEnquire,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div
        className="rounded-xl p-16 text-center"
        style={{
          border: `1px dashed ${colors.outlineVariant}`,
          color: colors.onSurfaceVariant,
        }}
      >
        No products in this category yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEnquire={onEnquire}
        />
      ))}
    </div>
  );
}