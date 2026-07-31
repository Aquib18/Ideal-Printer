interface ProductSidebarProps {
  checked: boolean[];
  toggleCheckbox: (index: number) => void;
  filterCheckboxes: readonly string[];
}

export default function ProductSidebar({
  checked,
  toggleCheckbox,
  filterCheckboxes,
}: ProductSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-72">
      <div className="space-y-10 lg:sticky lg:top-28">
        {/* Categories */}
        <div>
          <h3 className="mb-6 border-b border-[#ffcf8b] pb-2 text-xs font-bold uppercase tracking-widest text-[#040505]">
            Categories
          </h3>

          <div className="space-y-3">
            {filterCheckboxes.map((label, index) => (
              <label
                key={label}
                className="group flex cursor-pointer items-center gap-3"
              >
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => toggleCheckbox(index)}
                  className="h-5 w-5 cursor-pointer rounded accent-[#7b581f]"
                />

                <span className="text-base text-[#1b1c1c] transition-colors duration-300 group-hover:text-[#7b581f]">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Quote Card */}
        <div className="rounded-xl border-l-4 border-[#7b581f] bg-[#f5f3f3] p-6">
          <p className="text-sm italic leading-relaxed text-[#444748]">
            Looking for bulk custom branding? Contact our industrial
            experts for specialized quotes.
          </p>
        </div>
      </div>
    </aside>
  );
}