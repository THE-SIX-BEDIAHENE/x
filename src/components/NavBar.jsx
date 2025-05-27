import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/logo.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setShowNavbar(currentY <= lastScrollY);
      setLastScrollY(currentY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const getButtonClass = (path) =>
    `px-4 py-2 rounded-full transition-colors font-bold ${
      isActive(path)
        ? "bg-purple-700 text-white"
        : "bg-gray-100 text-purple-700 hover:bg-purple-700 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-md ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white/70 hover:bg-white`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-10 relative">
        {/* Logo */}
     <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
  <Link to="/">
    <img
      src={logo}
      alt="Logo"
      width={150}
      className="cursor-pointer hover:scale-110 transition-transform"
    />
  </Link>
</div>


        {/* Left nav (About, Projects) */}
        <div className="hidden md:flex gap-4 absolute left-20">
          {navItems.slice(0, 2).map((item) => (
            <Link key={item.path} to={item.path} className={getButtonClass(item.path)}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right nav (Blogs, Contact) */}
        <div className="hidden md:flex gap-4 absolute right-20">
          {navItems.slice(2).map((item) => (
            <Link key={item.path} to={item.path} className={getButtonClass(item.path)}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-3 font-bold">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={getButtonClass(item.path)}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
