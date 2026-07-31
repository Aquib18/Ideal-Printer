import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="w-full border-t border-[#3a3a3a] bg-[#272727]">
      {/* Top Footer */}
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-4 lg:px-16">
        {/* Company */}
        <div>
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Ideal Printers"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="leading-7 text-[#B8B8B8]">
            Defining printing excellence with premium quality, innovative
            technology, and exceptional customer service. Your trusted printing
            partner for businesses of every size.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="bg-white p-3 rounded-full hover:bg-[#C9963E] transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-full hover:bg-[#C9963E] transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-white p-3 rounded-full hover:bg-[#C9963E] transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[3px] text-[#C9963E]">
            Company
          </h3>

          <ul className="space-y-4">
            {[
              "About Us",
              "Our History",
              "Services",
              "Products",
              "Gallery",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  to="/"
                  className="text-[#CFCFCF] transition hover:translate-x-1 hover:text-[#C9963E]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[3px] text-[#C9963E]">
            Services
          </h3>

          <ul className="space-y-4">
            {[
              "Offset Printing",
              "Digital Printing",
              "Packaging",
              "Large Format",
              "Corporate Printing",
              "Promotional Items",
            ].map((item) => (
              <li key={item}>
                <Link
                  to="/services"
                  className="text-[#CFCFCF] transition hover:translate-x-1 hover:text-[#C9963E]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[3px] text-[#C9963E]">
            Contact
          </h3>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-2 text-[#C9963E]" size={24} />

              <p className="text-[#CFCFCF]">
                Behind Prabhu Chambers, Kalbhornagar,Chinchwad
                <br />
                Pune, Maharashtra - 411019
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#C9963E]" size={18} />

              <a
                href="tel:+917758874354"
                className="text-[#CFCFCF] hover:text-[#C9963E]"
              >
                +91 7758874354
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#C9963E]" size={18} />

              <a
                href="mailto:idealprinters111@gmail.com"
                className="text-[#CFCFCF] hover:text-[#C9963E]"
              >
                idealprinters111@gmail.com
                <br />
                yasirmoin81@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#3A3A3A]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-[#AFAFAF] md:flex-row lg:px-16">
          <p>
            © {new Date().getFullYear()} Ideal Printers. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link to="/privacy-policy" className="hover:text-[#C9963E]">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-[#C9963E]">
              Terms of Service
            </Link>

            <Link to="/sitemap" className="hover:text-[#C9963E]">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
