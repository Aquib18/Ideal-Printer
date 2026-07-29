// import React from "react";
import {
  BrushCleaning,
  BadgeCheck,
  Printer,
  PackageCheck,
} from "lucide-react";
import Container from "../common/Container";

const workflow = [
  {
    icon: BrushCleaning,
    title: "1. Design",
    description:
      "We finalize your artwork and prepare files for optimal output.",
  },
  {
    icon: BadgeCheck,
    title: "2. Proof Approval",
    description:
      "Digital and physical proofs for your final nod of confidence.",
  },
  {
    icon: Printer,
    title: "3. Printing",
    description:
      "Precision execution using state-of-the-art machinery.",
  },
  {
    icon: PackageCheck,
    title: "4. Delivery",
    description:
      "Secure packaging and rapid shipment to your doorstep.",
  },
];

const Workflow = () => {
  return (
    <section className="py-24 bg-[#F9F9F7]">
      <Container>

        {/* Heading */}

        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Workflow
          </h2>

          <div className="w-16 h-1 bg-[#C9963E] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">

          {/* Desktop Line */}

          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-[#C9963E]/30"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-xl
                    shadow-md
                    p-8
                    text-center
                    hover:-translate-y-2
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-20
                      h-20
                      rounded-full
                      bg-[#7F5700]
                      text-white
                      flex
                      items-center
                      justify-center
                      mx-auto
                      mb-6
                    "
                  >
                    <Icon size={36} />
                  </div>

                  <h3 className="text-xl font-bold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Workflow;