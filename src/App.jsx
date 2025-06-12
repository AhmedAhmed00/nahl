import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

import FullPageSpinner from "./ui/FullPageSpinner";
import AuthProvider from "./context/AuthContext";
import CityProvider from "./context/SelectedCityContext";

import { protectedRoutes, publicRoutes } from "./route";
import ProtectedRoutes from "./features/authentication/ProtectedRoutes";
import SpecProvider from "./context/SelectedSubSpecContext";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
      cacheTime: 30 * 1000,
    },
  },
});

function AppRoutes() {
  const location = useLocation();

  const routes = useRoutes(
    [
      {
        element: <ProtectedRoutes />,
        children: protectedRoutes,
      },
      ...publicRoutes,
    ],
    location
  );

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={location.pathname}>{routes}</div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" />
        <ReactQueryDevtools position="bottom-left" />
        <Suspense fallback={<FullPageSpinner />}>
          <BrowserRouter>
            <AuthProvider>
              <CityProvider>
                <SpecProvider>
                  <AppRoutes />
                </SpecProvider>
              </CityProvider>
            </AuthProvider>
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
