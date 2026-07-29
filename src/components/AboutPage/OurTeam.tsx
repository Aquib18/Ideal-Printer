
import {
//   Facebook,
//   Linkedin,
//   Instagram,
} from "lucide-react";
import Container from "../common/Container";

const team = [
  {
    name: "Rahul Sharma",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Priya Mehta",
    role: "Creative Head",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amit Verma",
    role: "Production Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sneha Kapoor",
    role: "Customer Relations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#C9963E]/10 px-5 py-2 text-sm font-semibold text-[#C9963E]">
            OUR TEAM
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Meet The People Behind
            <span className="block text-[#C9963E]">
              Ideal Printers
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our experienced professionals bring creativity,
            technology and craftsmanship together to deliver
            outstanding printing solutions.
          </p>
        </div>

        {/* Team Grid */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    h-80
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 font-medium text-[#C9963E]">
                  {member.role}
                </p>

                {/* <div className="mt-6 flex justify-center gap-3">
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-3 transition hover:bg-[#C9963E] hover:text-white"
                  >
                    <Facebook size={18} />
                  </a>

                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-3 transition hover:bg-[#C9963E] hover:text-white"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-3 transition hover:bg-[#C9963E] hover:text-white"
                  >
                    <Instagram size={18} />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;