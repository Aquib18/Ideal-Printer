
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#1E1E1E] py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,150,62,0.15),transparent_50%)]"></div>

      {/* Decorative Circle */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9963E]/10 blur-3xl"></div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <span className="inline-block rounded-full border border-[#C9963E]/30 bg-[#C9963E]/10 px-5 py-2 text-sm font-medium tracking-wide text-[#F5BD61]">
            ABOUT IDEAL PRINTERS
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Excellence in Printing,
            <span className="block text-[#F5BD61]">
              Trusted Since Day One.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            At Ideal Printers, we combine creativity, precision, and modern
            printing technology to deliver premium-quality printing solutions
            for businesses, brands, and individuals across India.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 rounded-lg bg-[#C9963E] px-7 py-4 font-semibold text-[#4A3100] transition-all duration-300 hover:scale-105 hover:bg-[#D8A64B]">
              Explore Services
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-lg border border-gray-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-[#C9963E] hover:text-[#F5BD61]">
              Contact Us
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-[#F5BD61]">25+</h3>
              <p className="mt-2 text-sm text-gray-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#F5BD61]">5000+</h3>
              <p className="mt-2 text-sm text-gray-400">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#F5BD61]">1500+</h3>
              <p className="mt-2 text-sm text-gray-400">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#F5BD61]">100%</h3>
              <p className="mt-2 text-sm text-gray-400">Quality Focus</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;