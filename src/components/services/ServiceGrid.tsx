import {
  Box,
  Printer,
  Package,
  Image,
  Megaphone,
  Briefcase,
} from "lucide-react";

import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";

const services = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7-E7uio_AwNagh1M60xz8f8bG85fj7RSA1ytyipojQ0GVkCcH2lTyAJ6lT-dYMhkBX0A9zwfvtTwPEq4Zh_ZkvEHNPScS3kdlmPV0Wup2J0sskmFcsVwnoOQsvWiK0UkxIIriai7lR20Q7Aig_0WArE5Sg3SXCn50EPaQeZDRO2bNXkAQE8sNoDOdAu8OBHPIEFPW7VVch1M9COW6KNlw7gsxX8uiR6d_gvt08C-WyrINfJ6n6q99",
    icon: <Printer size={24} />,
    title: "Offset Printing",
    description:
      "The gold standard for high-volume, high-quality production. Perfect for detailed colour reproduction and consistency across large print runs.",
    tags: ["Books", "Brochures", "Magazines", "Catalogues"],
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBR0e5ucnDf5HQYXfe63PvIHl53dOzLK-KekXxsvuc3dlPrYdurpMJrfgLtkKPexAg-NWGuWZPieFDU6D6HjgdylIkfs4Pg5_zuvaQDwRYS06SEI6teY4DV4NryvZndwb27tStAAZosKWiLG5EPYoj8A7NevIcLREJr2Q_eJAGJCPyX2Vv9MkUURkB6egRLcuoJsopIsEraspUO8ovylw64O_AwLk-Z0pAmbofMIBlt82hu24T2D2XU",
    icon: <Box size={24} />,
    title: "Digital Printing",
    description:
      "Rapid turnaround times without compromising on quality. Ideal for short runs, personalised marketing, and on-demand collateral.",
    tags: ["Visiting Cards", "Flyers", "Posters", "Invitations"],
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxTytdtpJh26dWkYIvpFaHg2TWAcsR0JhalQWMrGk8Rt9LAtS2vqjlpe2mBdJ72hD-uSu1E_G5YWae4ZtqNrGC-VLiJOHdY6cxqFu-XRY2b4rUO8ZYCq8RGkE0yFCCPs0fxIZiFht9BYnFrE1Pm2x4KsdxL9-0iqe5rtG4OlJqwCwF9_kvfccGdBMZ__4S6STmzxA5bwDbE3LXjB2AIQqWjfGIbBIX5fq16fy3sfVcy02g6A55xBbt",
    icon: <Image size={24} />,
    title: "Large Format",
    description:
      "Command attention with expansive visuals. High-durability prints for outdoor signage, exhibition displays, and interior branding.",
    tags: ["Flex", "Vinyl", "Canvas", "Banners"],
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4FE8XBsEYNq5RMmClZ6ir0BnALLlv75F7GjTUsVQBZCdP1z9P3epMhv5GnFedij-aHMV6kbHsWf6aCeV6malnBILCJaE9PcuxLQVG4T-uti0fTDBh4hDKDVRhO_75uQQBWtFlYJJXST2rGqGr-kH-51B39eUjclgWjs4cFIK8V3kGZlqhPcl-d2d0H_Px-VqT7Gpw0DKTzbPhUVl5MdZdDN4ZNP5li9-dOLvyfrXoySDDBudB8AcA",
    icon: <Package size={24} />,
    title: "Packaging",
    description:
      "Structural integrity meets premium aesthetics. Custom packaging solutions that protect your product while enhancing the unboxing experience.",
    tags: ["Product Boxes", "Labels", "Stickers"],
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBK_7uezHv3rZPUtwwVZLvBXKQcw75omOoCQtnYc0mI5xopjiLRPcF6uLWNFJhtynlYjPvmOyCw609jgweI8CFmtpLtY8CUYQtJkLWRAW7S6x8djtHDaGHnJHOBjIB8bRU6yR6AIwnCwgV_xF_tV_Wuh1RFZcm3fkzCnL8U4XNG5qbqP4doL3KT2rgQyCzZ1ohCYD68Fb7vmG8avuCK0uttfnrYe2c-IpFV0b2aNhiBw_bIH9ZOG-0P",
    icon: <Megaphone size={24} />,
    title: "Promotional Printing",
    description:
      "Extend your brand's reach through tangible everyday objects with premium promotional merchandise.",
    tags: ["T-Shirts", "Mugs", "Pens", "Caps"],
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA65p-_Q1bDWAqkCd3CzlI0mDVB63-JvV5Yz6vQ_ImpGuOZzrIsl8WxYpSpwMyzQRsj9_37bamqaunGEn1Y6BDNd7EP44SWyGv-Jn16ESSmJvwJmZeMdEAtsuTFWsB3fZCgNVsHb4qJ8bo4rB973aMwD9yp3U3N5fbMGHgUGQ6xOldmbEgd5BoAZHjn8kwu0RWvU8RoV4WbKXjZMpCzd9HTUIlNm23gVeofWW6dbiXRQQz7ZjT5Pro6",
    icon: <Briefcase size={24} />,
    title: "Corporate Printing",
    description:
      "Professional stationery and branded materials that strengthen your company's identity.",
    tags: ["Letterheads", "Envelopes", "ID Cards", "Files"],
  },
];

const ServicesGrid = () => {
  return (
    <Section>
      <SectionTitle
        title="Capabilities"
        description="From large-scale commercial runs to intricate corporate stationery, our facility is equipped with state-of-the-art machinery to ensure every impression is flawless."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            image={service.image}
            icon={service.icon}
            title={service.title}
            description={service.description}
            tags={service.tags}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServicesGrid;