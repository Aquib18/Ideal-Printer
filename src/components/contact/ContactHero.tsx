// src/components/contact/ContactHero.tsx

import React from "react";

interface ContactHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

const DEFAULT_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD8APMhCksGb4EGcuy1VlCxXuks7DI-EKVr1_Q1nMGYZEU9GMMSRCjCUEZAavSvCnDWXphs-5uu9rcqB1pWZSi0FeNI_OOcSA-G8jaI9FkOXnOQjZejzdF58dFnxHsTeEXczNwY6nzHjSGHDTPR3HueoKH2jYtIg6c0H1QAMmlWL5iPhXjJ4A2ugAKydvVH8wgwIliSxRGnDaxZGFEPhPG3Tu7W13fSCZHqAYVp2LCnjsgYyi2omUqO";

/**
 * ContactHero
 * Full-bleed banner at the top of the Contact page: dimmed background
 * photo behind a centered title + description.
 */
const ContactHero: React.FC<ContactHeroProps> = ({
  title = "Get in Touch.",
  description = "Experience industrial-grade precision and luxury service for your next print project.",
  backgroundImage = DEFAULT_BG,
}) => {
  return (
    <section className="relative flex h-[409px] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 z-10 bg-[#1E1E1E]/60" />

      <div className="relative z-20 px-6 text-center md:px-0">
        <h1 className="mb-4 text-4xl font-black text-[#F5BD61] md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#F5F1EA] opacity-90">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ContactHero;