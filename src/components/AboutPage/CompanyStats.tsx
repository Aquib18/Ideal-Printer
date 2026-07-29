
import {
  CalendarDays,
  BriefcaseBusiness,
  Users,
  Award,
} from "lucide-react";
import Container from "../common/Container";

const stats = [
  {
    icon: CalendarDays,
    number: "25+",
    title: "Years Experience",
    description:
      "Delivering premium printing solutions with consistency and innovation.",
  },
  {
    icon: BriefcaseBusiness,
    number: "5000+",
    title: "Projects Completed",
    description:
      "Successfully completed projects across multiple industries.",
  },
  {
    icon: Users,
    number: "1500+",
    title: "Happy Clients",
    description:
      "Trusted by businesses, educational institutes, and organizations.",
  },
  {
    icon: Award,
    number: "100%",
    title: "Quality Commitment",
    description:
      "Every product undergoes strict quality inspection before delivery.",
  },
];

const CompanyStats = () => {
  return (
    <section className="py-24 bg-[#1E1E1E]">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-[#C9963E]/20 text-[#F5BD61] font-semibold text-sm">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Numbers That Reflect
            <span className="block text-[#F5BD61]">
              Our Commitment
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Our journey is measured by the trust of our clients,
            successful projects, and commitment to delivering
            exceptional printing solutions every single day.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-2xl
                  bg-white
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    mx-auto
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

                <h3 className="text-5xl font-extrabold text-[#C9963E]">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h4>

                <p className="mt-4 text-gray-600 leading-7">
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

export default CompanyStats;