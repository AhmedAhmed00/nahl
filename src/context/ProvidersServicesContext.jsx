import { createContext, useContext, useState } from "react";

const ProvidersServicesContext = createContext(null);

export default function CityProvider({ children }) {
  const [providerServicesParams, setProviderServicesParams] = useState(null);
  function ClearProviderServicesParams() {
    setProviderServicesParams(null);
  }
  return (
    <ProvidersServicesContext.Provider
      value={{
        providerServicesParams,
        setProviderServicesParams,
        ClearProviderServicesParams,
      }}
    >
      {children}
    </ProvidersServicesContext.Provider>
  );
}

export function useCurrProvidersServicesParams() {
  const context = useContext(ProvidersServicesContext);
  if (!context)
    throw new Error("useCity must be used within ProvidersServicesContext");
  return context;
}
