// src/components/home/Testimonials.tsx

import { Quote, Star } from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Vikram Malhotra",
    role: "Marketing Director, Global Tech Corp",
    company: "Global Tech Corp",
    review:
      "Ideal Printers has been our sole partner for all corporate stationery for the last 5 years. Their attention to detail and color matching is simply world-class.",
  },
  {
    name: "Sarah Jenning",
    role: "Founder, Luxe Skin",
    company: "Luxe Skin",
    review:
      "The packaging they designed for our luxury cosmetic line exceeded expectations. The gold foil is crisp, and the paper quality is exceptional.",
  },
  {
    name: "Arjun Reddy",
    role: "Events Lead, Zenith Group",
    company: "Zenith Group",
    review:
      "Unbeatable speed and quality for large format event banners. They delivered 50 massive banners across 5 cities in just 3 days.",
  },
];

/**
 * Testimonials
 * Dark section with a centered badge + heading, followed by a 3-up
 * grid of dark testimonial cards (star rating, quote icon, review,
 * name/role, and an accent company tag).
 */
const Testimonials = () => {
  return (
    <section className="bg-[#1E1E1E] py-24">
      <Container>
        <SectionTitle
          badge="Client Testimonials"
          title="What Our Clients Say"
          align="center"
          textColor="light"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#2A2A2A] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9963E]/40"
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#C9963E" stroke="#C9963E" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={28} className="mb-2 text-white/15" />

              {/* Review */}
              <p className="mb-8 italic leading-8 text-gray-300">
                "{item.review}"
              </p>

              {/* User */}
              <div>
                <h4 className="text-lg font-bold text-white">{item.name}</h4>
                <p className="text-sm text-gray-400">{item.role}</p>
                <p className="mt-1 text-sm font-semibold text-[#C9963E]">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;