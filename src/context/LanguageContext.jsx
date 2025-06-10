import React, { createContext, useState, useContext } from "react";

// Create context
const LanguageContext = createContext();

// Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // Toggle between English and French
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  // Translation function
  const t = (enText, frText) => {
    return language === "en" ? enText : frText;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for convenience
export const useLanguage = () => useContext(LanguageContext);

// Export context directly for use with useContext()
export { LanguageContext };
