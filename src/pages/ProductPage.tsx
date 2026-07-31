import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ProductHero from "../components/products/ProductHero";
import ProductSidebar from "../components/products/ProductSidebar";
import ProductGrid from "../components/products/ProductGrid";
import ProductPagination from "../components/products/Pagination";

import { products } from "../components/products/data/products";
import filterCheckboxes from "../components/products/data/filters";

import type { Category, Product } from "../components/products/types";

const ITEMS_PER_PAGE = 6;

interface ProductsCatalogueProps {
  onEnquire?: (product: Product) => void;
}

export default function ProductsCatalogue({
  onEnquire,
}: ProductsCatalogueProps) {
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // One boolean per entry in filterCheckboxes — starts all unchecked
  const [checked, setChecked] = useState<boolean[]>(
    filterCheckboxes.map(() => false)
  );

  const [page, setPage] = useState(1);

  // Open selected category from Home page
  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category as Category);
    }
  }, [location.state]);

  const toggleCheckbox = (index: number) => {
    setChecked((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  // Sidebar checkbox labels that are currently checked
  const checkedCategories = filterCheckboxes.filter((_, i) => checked[i]);

  const filteredProducts = products.filter((product) => {
    const matchesTab =
      activeCategory === "All" || product.category === activeCategory;

    const matchesCheckboxes =
      checkedCategories.length === 0 ||
      checkedCategories.includes(product.category);

    return matchesTab && matchesCheckboxes;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  );

  const visibleProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setPage(1);
  }, [activeCategory, checked]);

  return (
    <div className="bg-[#fbf9f9] text-[#1b1c1c]">
      <ProductHero
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className="mx-auto max-w-[1280px] px-4 py-12 md:px-16">
        <div className="flex flex-col gap-6 lg:flex-row">
          <ProductSidebar
            checked={checked}
            toggleCheckbox={toggleCheckbox}
            filterCheckboxes={filterCheckboxes}
          />

          <div className="flex-1">
            <ProductGrid
              products={visibleProducts}
              onEnquire={onEnquire}
            />

            <ProductPagination
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// import ProductHero from "../components/products/ProductHero";
// import ProductSidebar from "../components/products/ProductSidebar";
// import ProductGrid from "../components/products/ProductGrid";
// import ProductPagination from "../components/products/Pagination";

// import { products } from "../components/products/data/products";
// import filterCheckboxes from "../components/products/data/filters";

// import type { Category, Product } from "../components/products/types";

// const ITEMS_PER_PAGE = 6;

// interface ProductsCatalogueProps {
//   onEnquire?: (product: Product) => void;
// }

// export default function ProductsCatalogue({
//   onEnquire,
// }: ProductsCatalogueProps) {
//   const location = useLocation();

//   const [activeCategory, setActiveCategory] = useState<Category>("All");

//   const [checked, setChecked] = useState<boolean[]>([
//     true,
//     false,
//     false,
//     false,
//     false,
//   ]);

//   const [price, setPrice] = useState(5000);
//   const [page, setPage] = useState(1);

//   // Open selected category from Home page
//   useEffect(() => {
//     if (location.state?.category) {
//       setActiveCategory(location.state.category as Category);
//     }
//   }, [location.state]);

//   const toggleCheckbox = (index: number) => {
//     setChecked((prev) =>
//       prev.map((item, i) => (i === index ? !item : item))
//     );
//   };

//   const filteredProducts =
//     activeCategory === "All"
//       ? products
//       : products.filter(
//           (product) => product.category === activeCategory
//         );

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
//   );

//   const visibleProducts = filteredProducts.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   useEffect(() => {
//     setPage(1);
//   }, [activeCategory]);

//   return (
//     <div className="bg-[#fbf9f9] text-[#1b1c1c]">
//       <ProductHero
//         activeCategory={activeCategory}
//         setActiveCategory={setActiveCategory}
//       />

//       <main className="mx-auto max-w-[1280px] px-4 py-12 md:px-16">
//         <div className="flex flex-col gap-6 lg:flex-row">
//           <ProductSidebar
//             checked={checked}
//             toggleCheckbox={toggleCheckbox}
//             price={price}
//             setPrice={setPrice}
//             filterCheckboxes={filterCheckboxes}
//           />

//           <div className="flex-1">
//             <ProductGrid
//               products={visibleProducts}
//               onEnquire={onEnquire}
//             />

//             <ProductPagination
//               page={page}
//               totalPages={totalPages}
//               setPage={setPage}
//             />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }