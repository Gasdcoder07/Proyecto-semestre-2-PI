import { createContext, useContext, useState } from "react";
import es from "../locales/es.json";
import en from "../locales/en.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [idioma, setIdioma] = useState("es");

  const textos = idioma === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma, textos }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);