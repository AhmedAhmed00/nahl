import { createContext, useContext, useState } from "react";

const HeaderTitleContext = createContext();

export function HeaderTitleProvider({ children }) {
  const [title, setTitle] = useState("");

  return (
    <HeaderTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
}

export function useHeaderTitle() {
  const context = useContext(HeaderTitleContext);
  if (!context) {
    throw new Error("useHeaderTitle must be used within a HeaderTitleProvider");
  }
  return context;
}
