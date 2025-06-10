import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/logo.png";
import { useTranslation } from "react-i18next";

// Language Toggle Button Component
const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "fr" ? "fr" : "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "fr" : "en");
  };

  const flag = currentLang === "en" ? "🇺🇸" : "🇫🇷";
  const nextLang = currentLang === "en" ? "FR" : "EN";

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-16 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
      title={`Switch to ${nextLang}`}
    >
      <div
        className="absolute top-0.5 w-7 h-7 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out flex items-center justify-center"
        style={{
          transform: currentLang === "en" ? "translateX(2px)" : "translateX(34px)",
        }}
      >
        <span className="text-sm">{flag}</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2 text-white text-xs font-medium">
        <span
          className={`transition-opacity duration-300 ${
            currentLang === "en" ? "opacity-0" : "opacity-100"
          }`}
        >
          EN
        </span>
        <span
          className={`transition-opacity duration-300 ${
            currentLang === "en" ? "opacity-100" : "opacity-0"
          }`}
        >
          FR
        </span>
      </div>
    </button>
  );
};

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

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
    { name: t("About"), path: "/about" },
    { name: t("Projects"), path: "/projects" },
    { name: t("News"), path: "/news" },
    { name: t("Contact"), path: "/contact" },
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

        {/* Right nav (News, Contact) + Language Toggle */}
        <div className="hidden md:flex gap-4 absolute right-4 items-center">
          {navItems.slice(2).map((item) => (
            <Link key={item.path} to={item.path} className={getButtonClass(item.path)}>
              {item.name}
            </Link>
          ))}
          <div className="ml-4">
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
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
