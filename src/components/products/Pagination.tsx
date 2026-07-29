import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPageNumbers } from "./utils/pagination";

const colors = {
  primary: "#040505",
  onPrimary: "#ffffff",
  outlineVariant: "#c4c7c7",
} as const;

interface ProductPaginationProps {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductPagination({
  page,
  totalPages,
  setPage,
}: ProductPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex items-center justify-center gap-2 flex-wrap">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="w-12 h-12 flex items-center justify-center rounded-lg border disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          borderColor: colors.outlineVariant,
        }}
      >
        <ChevronLeft size={20} />
      </button>

      {getPageNumbers(page, totalPages).map((item, index) =>
        item === "..." ? (
          <span key={index}>...</span>
        ) : (
          <button
            key={item}
            onClick={() => setPage(item)}
            className="w-12 h-12 rounded-lg font-bold"
            style={
              page === item
                ? {
                    backgroundColor: colors.primary,
                    color: colors.onPrimary,
                  }
                : {
                    border: `1px solid ${colors.outlineVariant}`,
                  }
            }
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="w-12 h-12 flex items-center justify-center rounded-lg border disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          borderColor: colors.outlineVariant,
        }}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}