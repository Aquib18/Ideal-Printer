

import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import type { Category } from "../products/types";


import Diary from "../../assets/images/diary5.png";
import Pen from "../../assets/images/Pen.png";
import Calender from "../../assets/images/calender1.png";
// import Notebook from "../../assets/images/Notebook.png";
import Stationary from "../../assets/images/Stationary.png";


import Tshirt from "../../assets/images/Hero5.png";
import IDCard from "../../assets/images/Hero4.png";
import Challanbook from "../../assets/images/challan1.png";
import Billbook from "../../assets/images/Hero3.png";
import Letterhead from "../../assets/images/Letterhead.jpeg";
import Envelop from "../../assets/images/envelop1.jpeg";
import Vnyl from "../../assets/images/vnyl4.jpeg";
import Flex from "../../assets/images/flex1.jpeg";
import VisitingCard from "../../assets/images/Hero1.jpeg";

const products: {
  title: string;
  category: Category;
  image: string;
}[] = [
  {
    title: "Diaries",
    category: "Diaries",
    image: Diary,
  },
    {
    title: "ID Card",
    category: "ID Card",
    image: IDCard,
  },
  // {
  //   title: "Notebooks",
  //   category: "Notebooks",
  //   image: Notebook,
  // },
  {
    title: "Calendars",
    category: "Calendars",
    image: Calender,
  },
    {
    title: "Envelop",
    category: "Envelop",
    image: Envelop,
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
    title: "Bill Book",
    category: "Bill Book",
    image: Billbook,
  },
  {
    title: "Challan Book",
    category: "Challan Book",
    image: Challanbook,
  },
  {
    title: "Letter Head",
    category: "Letter Head",
    image: Letterhead,
  },
  {
    title: "Visiting Card",
    category: "Visiting Card",
    image: VisitingCard,
  },


  {
    title: "Customize Tshirt",
    category: "Customize Tshirt",
    image: Tshirt,
  },
  {
    title: "Vnyl Sticker",
    category: "Vnyl Sticker",
    image: Vnyl,
  },
  {
    title: "Flex Printing",
    category: "Flex Printing",
    image: Flex,
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