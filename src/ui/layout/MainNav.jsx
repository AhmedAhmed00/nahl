import {
  HiOutlineHome,
  HiOutlineBuildingStorefront,
  HiOutlineTag,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUserGroup,
  HiOutlineMegaphone,
  HiOutlineGift,
  HiOutlineUserCircle,
  HiOutlineStar,
  HiOutlineCreditCard,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { StyledNavLink } from "./NavLink";
import Logo from "../Logo";
import Heading from "../Heading";
import { useAuth } from "../../context/AuthContext";
import { CiLogout } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { NavList } from "../NavList";
const navItems = [
  { path: "/dashboard", icon: <HiOutlineHome />, label: "dashboard" },
  { path: "/vendor", icon: <HiOutlineBuildingStorefront />, label: "vendor" },
  { path: "/category", icon: <HiOutlineTag />, label: "category" },
  { path: "/products", icon: <HiOutlineCube />, label: "products" },
  { path: "/orders", icon: <HiOutlineShoppingCart />, label: "orders" },
  { path: "/customers", icon: <HiOutlineUserGroup />, label: "customers" },
  { path: "/ads", icon: <HiOutlineMegaphone />, label: "ads" },
  {
    path: "/discounts-and-coupons",
    icon: <HiOutlineGift />,
    label: "discountsAndCoupons",
  },
  {
    path: "/employee-and-roles",
    icon: <HiOutlineUserCircle />,
    label: "employeesAndRoles",
  },
  { path: "/reviews", icon: <HiOutlineStar />, label: "reviews" },
  { path: "/payments", icon: <HiOutlineCreditCard />, label: "payments" },
  { path: "/branches", icon: <HiOutlineMapPin />, label: "branches" },
];

function MainNav() {
  console.log("probleeeem");
  const { logout } = useAuth();
  const { t } = useTranslation();
  return (
    <nav>
      <div
        style={{
          width: "70%",
          height: "100px",
          overflow: "hidden",
          textAlign: "center",
          margin: "auto",
          marginBottom: "10px",
        }}
      >
        <Logo w={"100%"} h={"100%"} />
      </div>

      <NavList>
        {navItems?.map((item, index) => (
          <li key={index}>
            <StyledNavLink to={item.path}>
              {item.icon}
              <Heading as={"h4"}>{t(`routes.${item.label}`)}</Heading>
            </StyledNavLink>
          </li>
        ))}
      </NavList>

      <StyledNavLink
        to={"/login"}
        onClick={() => {
          logout();
        }}
      >
        <CiLogout fontWeight={"bold"} color="var(--color-red-800)" />
        <Heading as={"h4"} color="red">
          {t("common.logout")}
        </Heading>
      </StyledNavLink>
    </nav>
  );
}

export default MainNav;
