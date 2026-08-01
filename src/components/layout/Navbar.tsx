// import { Link, NavLink } from "react-router-dom";
// import { Menu } from "lucide-react";
// import { useState } from "react";
// import logo from "../../assets/images/logo.png";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Products", path: "/products" },
//   { name: "Gallery", path: "/gallery" },
//   { name: "Contact", path: "/contact" },
//   { name: "Industry", path: "/industry" },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-[#272727] shadow-md">
//       <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 lg:px-16">
//         {/* Logo */}
//        <Link to="/" className="flex items-center">
//   <img
//     src={logo}
//     alt="Ideal Printers"
//     className="h-12 w-auto object-contain"
//   />
// </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `border-b-2 pb-1 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
//                   isActive
//                     ? "border-[#7F5700] text-[#7F5700]"
//                     : "border-transparent text-[#FAFAF8] hover:text-[#7F5700]"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Quote Button */}
//         <Link
//           to="/quote"
//           className="hidden rounded-xl bg-[#C9963E] px-6 py-2 text-sm font-semibold uppercase text-[#4A3100] transition hover:bg-[#A67B32] md:block"
//         >
//           Get a Quote
//         </Link>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="text-white md:hidden"
//         >
//           <Menu size={28} />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="border-t border-[#3a3a3a] bg-[#1E1E1E] md:hidden">
//           <nav className="flex flex-col px-5 py-4">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setMobileOpen(false)}
//                 className={({ isActive }) =>
//                   `border-b border-[#333] py-4 text-sm font-semibold uppercase tracking-[0.18em] ${
//                     isActive
//                       ? "text-[#7F5700]"
//                       : "text-[#FAFAF8] hover:text-[#7F5700]"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}

//             <Link
//               to="/quote"
//               onClick={() => setMobileOpen(false)}
//               className="mt-5 rounded-xl bg-[#C9963E] px-6 py-3 text-center text-sm font-semibold uppercase text-[#4A3100]"
//             >
//               Get a Quote
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { openWhatsApp } from "../../utils/whatsapp";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Industry", path: "/industry" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleGetQuote = () => {
    openWhatsApp(
      "Hello, Ideal Printers. I'd like to get a quote for my printing requirements.",
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#272727] shadow-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 lg:px-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Ideal Printers"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `border-b-2 pb-1 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "border-[#7F5700] text-[#7F5700]"
                    : "border-transparent text-[#FAFAF8] hover:text-[#7F5700]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Quote Button */}
        <button
          onClick={handleGetQuote}
          className="hidden rounded-xl bg-[#C9963E] px-6 py-2 text-sm font-semibold uppercase text-[#4A3100] transition-all duration-300 hover:scale-105 hover:bg-[#A67B32] md:block"
        >
          Get a Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[#3a3a3a] bg-[#1E1E1E] md:hidden">
          <nav className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `border-b border-[#333] py-4 text-sm font-semibold uppercase tracking-[0.18em] ${
                    isActive
                      ? "text-[#7F5700]"
                      : "text-[#FAFAF8] hover:text-[#7F5700]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Quote Button */}
            <button
              onClick={() => {
                setMobileOpen(false);
                handleGetQuote();
              }}
              className="mt-5 rounded-xl bg-[#C9963E] px-6 py-3 text-center text-sm font-semibold uppercase text-[#4A3100] transition-all duration-300 hover:bg-[#A67B32]"
            >
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
