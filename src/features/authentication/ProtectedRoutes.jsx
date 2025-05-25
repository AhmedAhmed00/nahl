import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useEffect, useMemo } from "react";

export default function ProtectedRoutes() {
  const { accessToken } = useAuth();
  const navigate = useNavigate();
  const storedToken = useMemo(
    () => accessToken || localStorage.getItem("accessToken"),
    [accessToken]
  );

  const isTokenValid = (token) => {
    if (!token) return false;
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (storedToken && !isTokenValid(storedToken)) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return isTokenValid(storedToken) ? <Outlet /> : <Navigate to="/login" />;
}
