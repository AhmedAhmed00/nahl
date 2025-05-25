import { createContext, useContext, useState } from "react";

const CityContext = createContext(null);

export default function CityProvider({ children }) {
  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </CityContext.Provider>
  );
}

export function useSelectdCity() {
  const context = useContext(CityContext);
  if (!context) throw new Error("useCity must be used within AuthProvider");
  return context;
}
