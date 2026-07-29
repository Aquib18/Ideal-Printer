interface ProductSidebarProps {
  checked: boolean[];
  toggleCheckbox: (index: number) => void;
  price: number;
  setPrice: (price: number) => void;
  filterCheckboxes: readonly string[];
}

const colors = {
  primary: "#040505",
  secondary: "#7b581f",
  surfaceContainerLow: "#f5f3f3",
  secondaryContainer: "#ffcf8b",
  onSurface: "#1b1c1c",
  onSurfaceVariant: "#444748",
} as const;

export default function ProductSidebar({
  checked,
  toggleCheckbox,
  price,
  setPrice,
  filterCheckboxes,
}: ProductSidebarProps) {
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="lg:sticky lg:top-28 space-y-10">
        {/* Categories */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-6 pb-2"
            style={{
              color: colors.primary,
              borderBottom: `1px solid ${colors.secondaryContainer}`,
            }}
          >
            Categories
          </h3>

          <div className="space-y-3">
            {filterCheckboxes.map((label, index) => (
              <label
                key={label}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => toggleCheckbox(index)}
                  className="w-5 h-5 rounded"
                  style={{
                    accentColor: colors.secondary,
                  }}
                />

                <span
                  className="text-base transition-colors group-hover:opacity-70"
                  style={{
                    color: colors.onSurface,
                  }}
                >
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-6 pb-2"
            style={{
              color: colors.primary,
              borderBottom: `1px solid ${colors.secondaryContainer}`,
            }}
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
              style={{
                accentColor: colors.secondary,
              }}
            />

            <div
              className="flex justify-between mt-4 text-sm"
              style={{
                color: colors.onSurfaceVariant,
              }}
            >
              <span>$0</span>

              <span>
                {price >= 5000 ? "$5,000+" : `$${price}`}
              </span>
            </div>
          </div>
        </div>

        {/* Quote Card */}
        <div
          className="p-6 rounded-xl"
          style={{
            backgroundColor: colors.surfaceContainerLow,
            borderLeft: `4px solid ${colors.secondary}`,
          }}
        >
          <p
            className="text-sm italic leading-relaxed"
            style={{
              color: colors.onSurfaceVariant,
            }}
          >
            Looking for bulk custom branding? Contact our industrial
            experts for specialized quotes.
          </p>
        </div>
      </div>
    </aside>
  );
}