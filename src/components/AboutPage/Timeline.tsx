import { Calendar } from "lucide-react";
import Container from "../common/Container";

const timeline = [
  {
    year: "1999",
    title: "Company Founded",
    description:
      "Ideal Printers was established with a vision to deliver premium printing services with uncompromising quality.",
  },
  {
    year: "2005",
    title: "Offset Printing Expansion",
    description:
      "Introduced advanced offset printing machines, increasing production capacity and print precision.",
  },
  {
    year: "2012",
    title: "Digital Printing Division",
    description:
      "Expanded into digital printing to offer faster turnaround times and customized print solutions.",
  },
  {
    year: "2018",
    title: "Packaging Solutions",
    description:
      "Started premium packaging and label printing for retail, food, and manufacturing industries.",
  },
  {
    year: "2026",
    title: "Trusted Across India",
    description:
      "Serving thousands of businesses with modern printing technology and nationwide delivery.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-[#FAFAF8] py-24">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-[#C9963E]/10 px-5 py-2 text-sm font-semibold text-[#C9963E]">
            OUR JOURNEY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Milestones That Define
            <span className="block text-[#C9963E]">
              Our Success Story
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every milestone reflects our commitment to innovation,
            customer satisfaction, and excellence in printing.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}

          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-[#C9963E]/30 lg:block"></div>

          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >
              {/* Card */}

              <div className="w-full lg:w-1/2 lg:px-10">
                <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-full bg-[#C9963E]/10 p-3 text-[#C9963E]">
                      <Calendar size={22} />
                    </div>

                    <span className="text-3xl font-bold text-[#C9963E]">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}

              <div className="absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-[#C9963E] shadow-lg lg:block"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;