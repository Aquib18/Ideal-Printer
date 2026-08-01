import Button from "../common/Button";
import Section from "../common/Section";
import { useNavigate } from "react-router-dom";
const ServicesCTA = () => {
    const navigate = useNavigate();
  return (
    <Section className="bg-[#C9963E]">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
        {/* Left Content */}

        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-4xl font-bold text-[#1E1E1E] md:text-5xl">
            Need a Custom Print Solution?
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#4A3100]">
            Our experts are ready to assist you with large-scale projects,
            custom specifications, and material selection to ensure your brand
            stands out.
          </p>
        </div>

        {/* Buttons */}

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
           onClick={() => navigate("/contact")}
           className="bg-black text-white hover:bg-black">
            Consult Our Team
          </Button>

          <Button
            variant="outline"
            className="border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ServicesCTA;