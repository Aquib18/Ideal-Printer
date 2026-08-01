import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import { openWhatsApp } from "../../utils/whatsapp";

const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Decorative Background */}
      <div className="absolute right-0 top-0 h-full w-1/3 translate-x-1/2 -skew-x-12 bg-[#C9963E]/10" />

      <Container className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h2 className="mb-5 text-4xl font-extrabold leading-tight text-[#1E1E1E] md:text-5xl">
            Let's Print Something Great{" "}
            <span className="text-[#C9963E]">Together</span>
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Whether it's a thousand brochures or a single custom package,
            we bring the same level of precision and passion to every job.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={() =>
            openWhatsApp(
              "Hello, Ideal Printers. I'd like to get a quote for my printing requirements."
            )
          }
          className="
            group
            flex
            items-center
            gap-3
            whitespace-nowrap
            rounded-xl
            bg-[#C9963E]
            px-10
            py-5
            text-lg
            font-bold
            text-[#4A3100]
            shadow-xl
            transition-all
            duration-300
            hover:bg-[#A67B32]
            hover:scale-105
          "
        >
          Get a Quote Now

          <ArrowRight
            size={22}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </Container>
    </section>
  );
};

export default ContactCTA;