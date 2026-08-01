
import Container from "../common/Container";
import yasir from "../../assets/images/yasir.png";
import Muzahirul from "../../assets/images/Muzahirul.png";
const team = [
   {
    name: "Mozahirul Haque",
    role: "Founder",
    image:Muzahirul,
  },
  {
    name: "Yasir Moin",
    role: "Managing Director",
    image: yasir,
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
            <span className="block text-[#C9963E]">Ideal Printers</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our experienced professionals bring creativity, technology and
            craftsmanship together to deliver outstanding printing solutions.
          </p>
        </div>

        {/* Team Grid */}

      {/* Team Grid */}
<div className="flex flex-wrap justify-center gap-8">
  {team.map((member) => (
    <div
      key={member.name}
      className="
        group
        w-full
        max-w-xs
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
        <p className="mt-2 font-medium text-[#C9963E]">{member.role}</p>
      </div>
    </div>
  ))}
</div>
      </Container>
    </section>
  );
};

export default OurTeam;
