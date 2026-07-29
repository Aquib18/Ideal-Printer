import {
  Award,
  BadgeCheck,
  Building2,
  Factory,
  Landmark,
  ShoppingBag,
} from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const brands = [
  {
    name: "Corporate",
    icon: <Building2 size={42} />,
  },
  {
    name: "Manufacturing",
    icon: <Factory size={42} />,
  },
  {
    name: "Retail",
    icon: <ShoppingBag size={42} />,
  },
  {
    name: "Education",
    icon: <Landmark size={42} />,
  },
  {
    name: "Government",
    icon: <BadgeCheck size={42} />,
  },
  {
    name: "Premium Brands",
    icon: <Award size={42} />,
  },
];

const Brands = () => {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionTitle {...({
          title: "Industries We Serve",
          // subtitle is not declared on SectionTitleProps; cast to any to avoid TS error
          subtitle:
            "From startups to large enterprises, we proudly provide high-quality printing solutions for every industry.",
        } as any)} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group rounded-2xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#1E1E1E] hover:text-white hover:shadow-2xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F5BD61]/10 text-[#C9963E] transition-all duration-300 group-hover:bg-[#F5BD61] group-hover:text-[#1E1E1E]">
                {brand.icon}
              </div>

              <h3 className="mt-6 text-lg font-semibold">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-[#1E1E1E] px-8 py-12 text-center text-white">
          <h3 className="text-3xl font-bold lg:text-4xl">
            Trusted by <span className="text-[#F5BD61]">5000+</span> Businesses
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            We partner with companies of all sizes to deliver premium printing,
            packaging, branding, and marketing materials with exceptional
            quality and timely delivery.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Brands;