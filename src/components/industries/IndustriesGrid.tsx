import {
  School,
  Hospital,
  ShoppingBag,
  Hotel,
  Landmark,
  Building2,
  Cpu,
  Factory,
  Truck,
  Scale,
} from "lucide-react";

import Card from "../common/Card";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const industries = [
  {
    icon: <School size={40} />,
    title: "Schools",
    description:
      "High-volume curriculum materials and durable student handbooks.",
  },
  {
    icon: <Hospital size={40} />,
    title: "Hospitals",
    description:
      "Sterile packaging, patient record systems, and wayfinding signage.",
  },
  {
    icon: <ShoppingBag size={40} />,
    title: "Retail",
    description:
      "Luxury packaging, point-of-sale displays, and seasonal lookbooks.",
  },
  {
    icon: <Hotel size={40} />,
    title: "Hospitality",
    description:
      "Premium menus, guest directories, and bespoke stationery sets.",
  },
  {
    icon: <Landmark size={40} />,
    title: "Finance",
    description:
      "Secure annual reports, investor kits, and tactile business cards.",
  },
  {
    icon: <Building2 size={40} />,
    title: "Real Estate",
    description:
      "Oversized architectural renders and high-gloss property brochures.",
  },
  {
    icon: <Cpu size={40} />,
    title: "Technology",
    description:
      "Technical manuals, sleek hardware packaging, and event graphics.",
  },
  {
    icon: <Factory size={40} />,
    title: "Industry",
    description:
      "Durable equipment labels, safety logs, and logistics forms.",
  },
  {
    icon: <Truck size={40} />,
    title: "Logistics",
    description:
      "Multi-part waybills, inventory tags, and weatherproof tracking labels.",
  },
  {
    icon: <Scale size={40} />,
    title: "Legal",
    description:
      "Confidential litigation binders and court-ready exhibits.",
  },
];

const IndustriesGrid = () => {
  return (
    <Section>
      <SectionTitle
        title="Our Sectors"
        description="From high-volume educational materials to sterile medical packaging and luxury retail branding, our facility is equipped to handle the rigorous standards of diverse marketplaces."
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {industries.map((industry) => (
          <Card
            key={industry.title}
            className="border-t-4 border-[#C9963E] p-8 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-6 text-[#C9963E]">
              {industry.icon}
            </div>

            <h3 className="mb-3 text-2xl font-bold">
              {industry.title}
            </h3>

            <p className="text-gray-600 leading-7">
              {industry.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default IndustriesGrid;