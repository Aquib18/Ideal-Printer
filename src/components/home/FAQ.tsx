import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../common/Container";

const faqs = [
  {
    question: "What is the average turnaround time for bulk orders?",
    answer:
      "For standard offset printing, we typically deliver within 5–7 business days. Custom packaging or complex finishes may take up to 10–12 days depending on complexity.",
  },
  {
    question: "Do you offer design assistance for new brands?",
    answer:
      "Yes, our in-house creative team can assist with structural packaging design and artwork prepress to ensure the best final print results.",
  },
  {
    question: "Can I request a physical proof before final printing?",
    answer:
      "Absolutely. We recommend physical proofs for large-scale packaging or high-stakes corporate stationery to verify color and paper stock.",
  },
  {
    question: "What file formats do you accept for artwork?",
    answer:
      "We prefer high-resolution PDFs with outlined fonts and 3mm bleed. We also accept AI, EPS, and PSD files.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FAFAF8]">
      <Container className="max-w-5xl">

        {/* Heading */}

        <div className="mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="w-16 h-1 bg-[#C9963E] mt-3 rounded-full"></div>
        </div>

        {/* FAQ */}

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                border
                border-gray-200
                overflow-hidden
                transition-all
                duration-300
              "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  px-7
                  py-6
                  text-left
                "
              >
                <span className="font-bold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-7 text-gray-600 leading-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default FAQ;