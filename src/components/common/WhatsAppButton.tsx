// src/components/layout/WhatsAppButton.tsx

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton = ({
  phoneNumber = "910000000000",
  message = "Hello, I'm interested in your printing services.",
}: WhatsAppButtonProps) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-[100] group"
    >
      <div className="relative">
        {/* Tooltip */}
        <span className="absolute right-full top-1/2 mr-4 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#1E1E1E] shadow-lg opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100">
          Chat on WhatsApp
        </span>

        {/* Floating Button */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95">
          <MessageCircle size={32} fill="currentColor" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;