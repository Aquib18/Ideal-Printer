

import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import type { Category } from "../products/types";


import Dairy from "../../assets/images/Dairy.png";
import Pen from "../../assets/images/Pen.png";
import Calender from "../../assets/images/Calender.png";
import Notebook from "../../assets/images/Notebook.png";
import Giftbox from "../../assets/images/Giftbox.png";
import Stationary from "../../assets/images/Stationary.png";

const products: {
  title: string;
  category: Category;
  image: string;
}[] = [
  {
    title: "Diaries",
    category: "Diaries",
    image: Dairy,
  },
  {
    title: "Notebooks",
    category: "Notebooks",
    image: Notebook,
  },
  {
    title: "Calendars",
    category: "Calendars",
    image: Calender,
  },
  {
    title: "Stationery",
    category: "Stationery",
    image: Stationary,
  },
  {
    title: "Pens",
    category: "Pens",
    image: Pen,
  },
  {
    title: "Gift Boxes",
    category: "Gift Boxes",
    image: Giftbox,
  },
];
const ProductShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Best Selling Products
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9963E]" />
          </div>

          <button
            onClick={() => navigate("/products")}
            className="hidden items-center gap-2 font-bold text-[#7F5700] transition-all hover:gap-4 md:flex"
          >
            View All Products
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.title}
              onClick={() =>
                navigate("/products", {
                  state: {
                    category: item.category,
                  },
                })
              }
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;