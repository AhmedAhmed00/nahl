import { createContext, useContext, useState } from "react";

const SpecializationContext = createContext(null);

export default function SpecProvider({ children }) {
  const [selectedSpec, setSelectedSpec] = useState(null);
  return (
    <SpecializationContext.Provider value={{ selectedSpec, setSelectedSpec }}>
      {children}
    </SpecializationContext.Provider>
  );
}

export function useSelectedSpec() {
  const context = useContext(SpecializationContext);
  if (!context) throw new Error("useSubSpec must be used within Selected Spec");
  return context;
}
