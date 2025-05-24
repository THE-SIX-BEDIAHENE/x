import { useEffect, useState } from "react";
import logo from "/logo.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full bg-[#ffffffab] shadow-md fixed top-0 z-50 py-4 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center relative">
        {/* Left Menu */}
        <div className="flex gap-5 text-[#672D90] font-bold pr-24">
          <div className="px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-[#672D90] hover:text-white transition-colors">
            About
          </div>
          <div className="px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-[#672D90] hover:text-white transition-colors">
            Projects
          </div>
        </div>

        {/* Center Logo */}
     <div className="absolute left-1/2 transform -translate-x-1/2 px-10 cursor-pointer">
  <img
    src={logo}
    alt="Logo"
    width={150}
    className="transition-transform duration-300 ease-in-out hover:scale-110"
  />
</div>
        {/* Right Menu */}
        <div className="flex gap-5 text-[#672D90] font-bold pl-24">
          <div className="px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-[#672D90] hover:text-white transition-colors">
            Blogs
          </div>
          <div className="px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-[#672D90] hover:text-white transition-colors">
            Contact
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
