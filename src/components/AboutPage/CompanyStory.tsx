
import { CheckCircle2} from "lucide-react";
import Container from "../common/Container";

const highlights = [
  "Premium Offset & Digital Printing",
  "Experienced Design & Production Team",
  "Latest Printing Technology",
  "On-Time Delivery Across India",
];

const CompanyStory = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=900&q=80"
              alt="Ideal Printers"
              className="h-[600px] w-full rounded-2xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 rounded-2xl bg-[#C9963E] p-8 text-center shadow-xl">
              <h3 className="text-5xl font-bold text-white">24+</h3>
              <p className="mt-2 text-white">
                Years of
                <br />
                Excellence
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="rounded-full bg-[#C9963E]/10 px-5 py-2 text-sm font-semibold text-[#C9963E]">
              OUR STORY
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Creating Impressions Through
              <span className="block text-[#C9963E]">
                Quality Printing.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ideal Printers was established with one simple vision—to deliver
              world-class printing solutions that combine creativity,
              technology, and craftsmanship. Over the years, we have become a
              trusted printing partner for businesses, educational institutions,
              retailers, manufacturers, and individuals.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From business cards and brochures to premium packaging and
              large-format printing, every project is handled with precision,
              ensuring exceptional quality and customer satisfaction.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={22}
                    className="text-[#C9963E] flex-shrink-0"
                  />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            {/* <button className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-[#C9963E] px-8 py-4 font-semibold text-[#4A3100] transition-all duration-300 hover:scale-105 hover:bg-[#D7A13D]">
              Learn More

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyStory;