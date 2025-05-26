import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/logo.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
 <nav
  className={`w-full bg-[#ffffffab] hover:bg-white shadow-md fixed top-0 z-50 py-0 md:py-10 transition-all duration-300 ${
    showNavbar ? "translate-y-0" : "-translate-y-full"
  }`}
>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:justify-center relative">
        {/* Logo - centered on md+, left on small */}
        <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <img
            src={logo}
            alt="Logo"
            width={150}
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Left nav (About, Projects) */}
        <div className="hidden md:flex gap-4 text-[#672D90] font-bold absolute left-20">
          <div className="px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-[#672D90] hover:text-white transition-colors">
            About
          </div>
          <div className="px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-[#672D90] hover:text-white transition-colors">
            Projects
          </div>
        </div>

        {/* Right nav (Blogs, Contact) */}
        <div className="hidden md:flex gap-4 text-[#672D90] font-bold absolute right-20">
          <div className="px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-[#672D90] hover:text-white transition-colors">
            Blogs
          </div>
          <div className="px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-[#672D90] hover:text-white transition-colors">
            Contact
          </div>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden z-50">
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-3 text-[#672D90] font-bold">
          {["About", "Projects", "Blogs", "Contact"].map((item) => (
            <div
              key={item}
              className="px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-[#672D90] hover:text-white transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
