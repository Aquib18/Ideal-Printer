
import {
  Printer,
  Monitor,
  LayoutGrid,
  Package,
  Gift,
  Building2,
  // ArrowRight,
} from "lucide-react";
import Container from "../common/Container";

const services = [
  {
    icon: Printer,
    title: "Offset Printing",
    description:
      "High-volume precision for magazines, brochures, and commercial catalogs with unmatched color fidelity.",
  },
  {
    icon: Monitor,
    title: "Digital Printing",
    description:
      "Quick turnaround and high-quality digital outputs for short-run projects and personalized marketing materials.",
  },
  {
    icon: LayoutGrid,
    title: "Large Format",
    description:
      "Massive impact through banners, posters, and architectural wraps that demand attention from afar.",
  },
  {
    icon: Package,
    title: "Packaging",
    description:
      "Custom structural design and premium finishing for product boxes that protect and sell your brand.",
  },
  {
    icon: Gift,
    title: "Promotional",
    description:
      "Branded merchandise and custom gifts that leave a lasting impression on your clients and partners.",
  },
  {
    icon: Building2,
    title: "Corporate Printing",
    description:
      "Complete stationery suites, annual reports, and internal documentation for professional consistency.",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-[#FAFAF8]">
      <Container>
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-[#1E1E1E]">
            Our Specialized Services
          </h2>

          <div className="w-16 h-1 bg-[#C9963E] mt-3 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-xl
                  border-t-4
                  border-[#7F5700]
                  p-8
                  shadow-sm
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                  flex
                  flex-col
                "
              >
                <Icon
                  size={42}
                  className="text-[#7F5700] mb-6"
                />

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7 flex-1">
                  {service.description}
                </p>

                {/* <button
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-[#7F5700]
                    font-semibold
                    hover:gap-4
                    transition-all
                  "
                >
                  Learn More
                  <ArrowRight size={18} />
                </button> */}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;