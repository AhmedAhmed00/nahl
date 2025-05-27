// routes.js
import { Navigate } from "react-router-dom";

import Dash from "./features/dashboard/Dash";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Unauthorized from "./features/authentication/Unauthorized";

import AppLayout from "./ui/layout/AppLayout";
import Vendor from "./pages/Vendor";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Orders from "./pages/orders";
import Customers from "./pages/Customers";
import Ads from "./pages/Ads";
import DiscountsAndCoupons from "./pages/DiscountsAndCoupons";
import Reviews from "./pages/Reviews";
import Payments from "./pages/Payments";
import Branches from "./pages/Branches";
import VendorForm from "./features/vendor/VendorForm";
import CategoryForm from "./features/categories/CategoryForm";
import ProductForm from "./features/products/ProductForm";

const protectedRoutes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="dashboard" /> },
      { path: "dashboard", element: <Dash /> },

      { path: "/vendor", element: <Vendor /> },
      { path: "/vendor/vendor-form", element: <VendorForm /> },

      { path: "/categories", element: <Categories /> },
      { path: "/categories/category-form", element: <CategoryForm /> },

      { path: "/products", element: <Products /> },
      { path: "/products/product-form", element: <ProductForm /> },

      { path: "/orders", element: <Orders /> },
      { path: "/customers", element: <Customers /> },
      { path: "/ads", element: <Ads /> },
      { path: "/discounts-and-coupons", element: <DiscountsAndCoupons /> },
      { path: "/reviews", element: <Reviews /> },
      { path: "/payments", element: <Payments /> },
      { path: "/branches", element: <Branches /> },

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
