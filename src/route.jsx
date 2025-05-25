// routes.js
import { Navigate } from "react-router-dom";

import Dash from "./features/dashboard/Dash";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Unauthorized from "./features/authentication/Unauthorized";

import AppLayout from "./ui/layout/AppLayout";

const protectedRoutes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="dashboard" /> },
      { path: "dashboard", element: <Dash /> },

      // Management
      // {
      //   path: "management",
      //   element: <Mangement />,
      //   children: [
      //     { path: "branches", element: <Branches /> },
      //     { path: "users", element: <Users /> },
      //     { path: "employees", element: <Employees /> },
      //     { path: "job-roles", element: <JobRoles /> },
      //   ],
      // },
      // Misc
      // { path: "more", element: <div>more</div> },
      { path: "unauthorized", element: <Unauthorized /> },
    ],
  },
];

const publicRoutes = [
  { path: "login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
];

export { protectedRoutes, publicRoutes };
