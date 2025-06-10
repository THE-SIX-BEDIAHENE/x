import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'fr' ? 'fr' : 'en';

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'fr' : 'en');
  };

  const flag = currentLang === 'en' ? '🇺🇸' : '🇫🇷';
  const nextLang = currentLang === 'en' ? 'FR' : 'EN';

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-16 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
      title={`Switch to ${nextLang}`}
    >
      <div
        className="absolute top-0.5 w-7 h-7 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out flex items-center justify-center"
        style={{
          transform: currentLang === 'en' ? 'translateX(2px)' : 'translateX(34px)'
        }}
      >
        <span className="text-sm">{flag}</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2 text-white text-xs font-medium">
        <span className={`transition-opacity duration-300 ${currentLang === 'en' ? 'opacity-0' : 'opacity-100'}`}>EN</span>
        <span className={`transition-opacity duration-300 ${currentLang === 'en' ? 'opacity-100' : 'opacity-0'}`}>FR</span>
      </div>
    </button>
  );
};

export default LanguageToggle;
