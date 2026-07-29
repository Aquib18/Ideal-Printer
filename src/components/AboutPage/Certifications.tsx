
import {
  ShieldCheck,
  BadgeCheck,
  Leaf,
  Cpu,
} from "lucide-react";
import Container from "../common/Container";

const certifications = [
  {
    icon: ShieldCheck,
    title: "ISO Certified",
    description:
      "We follow internationally recognized quality management standards to ensure consistency in every project.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Every order undergoes multiple quality inspections before packaging and delivery.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Printing",
    description:
      "We promote sustainable printing with environmentally friendly inks and responsibly sourced paper.",
  },
  {
    icon: Cpu,
    title: "Latest Technology",
    description:
      "Modern offset, digital, and finishing equipment help us deliver outstanding print quality and faster turnaround.",
  },
];

const Certifications = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#C9963E]/10 px-5 py-2 text-sm font-semibold text-[#C9963E]">
            QUALITY STANDARDS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Certified Quality,
            <span className="block text-[#C9963E]">
              Trusted Excellence
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe quality is more than a promise. It is reflected in
            our certifications, advanced technology, sustainable practices,
            and commitment to customer satisfaction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-[#FAFAF8]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#C9963E]
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
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
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl bg-[#1E1E1E] px-8 py-12 text-center">
          <h3 className="text-3xl font-bold text-white">
            Committed to Quality Since Day One
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            From design consultation to final delivery, every product is
            manufactured with precision, premium materials, and strict
            quality control to exceed customer expectations.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Certifications;