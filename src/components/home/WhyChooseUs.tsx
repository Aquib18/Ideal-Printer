
import {
  BadgeCheck,
  Zap,
  IndianRupee,
  Truck,
} from "lucide-react";
import Container from "../common/Container";

const features = [
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Rigorous 12-point inspection for every print job.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Automated workflows ensuring swift delivery timelines.",
  },
  {
    icon: IndianRupee,
    title: "Competitive Pricing",
    description:
      "Premium results at direct industrial wholesale rates.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description:
      "Reliable logistics network covering 20,000+ pin codes.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#1E1E1E] py-24 border-y border-gray-700">
      <Container>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="text-center group"
              >
                <div
                  className="
                    w-20
                    h-20
                    mx-auto
                    mb-6
                    rounded-full
                    bg-[#2b2b2b]
                    flex
                    items-center
                    justify-center
                    group-hover:bg-[#C9963E]
                    transition-all
                    duration-300
                  "
                >
                  <Icon
                    size={40}
                    className="text-[#C9963E] group-hover:text-[#1E1E1E]"
                  />
                </div>

                <h3 className="text-white text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
};

export default WhyChooseUs;