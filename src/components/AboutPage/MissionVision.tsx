
import { Target, Eye, Gem } from "lucide-react";
import Container from "../common/Container";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide innovative, reliable, and premium printing solutions that help businesses and individuals communicate their ideas with confidence while maintaining exceptional quality and timely delivery.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become one of India's most trusted printing companies by embracing cutting-edge technology, sustainable practices, and customer-first service in every project we undertake.",
  },
  {
    icon: Gem,
    title: "Our Core Values",
    description:
      "Quality craftsmanship, customer satisfaction, innovation, integrity, transparency, and continuous improvement are the principles that drive every print we produce.",
  },
];

const MissionVision = () => {
  return (
    <section className="bg-[#FAFAF8] py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-[#C9963E]/10 px-5 py-2 text-sm font-semibold text-[#C9963E]">
            OUR PURPOSE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Building Trust Through
            <span className="block text-[#C9963E]">
              Quality & Innovation
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything we do is guided by a commitment to excellence,
            innovation, and customer satisfaction. Our mission, vision,
            and values define who we are and inspire every project we deliver.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    mb-6
                    inline-flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#C9963E]/10
                    text-[#C9963E]
                    transition-all
                    duration-300
                    group-hover:bg-[#C9963E]
                    group-hover:text-white
                  "
                >
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;