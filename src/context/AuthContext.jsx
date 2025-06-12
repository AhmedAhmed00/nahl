import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";
import { profileServices } from "../data/api";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isVerfied, setIsVerfied] = useState(false);
  const navigate = useNavigate();

  const { data: profile, isFetching: isLoadingProfile } = useProfile({
    service: profileServices,
    key: "profile",
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) setAccessToken(token);
  }, []);

  async function signUp(data) {
    try {
      setIsLoading(true);
      const resData = await axios.post(
        "https://studentapp.pythonanywhere.com/en/core/register/",
        data
      );
      // 201114023004;

      toast.success("تم تسجيل الحساب بنجاح");
      navigate("/auth/login");
    } catch (err) {
      if (err.response?.status === 401)
        toast.error("من فضلك ادخل بيانات صحيحة");
      else {
        toast.error("خطأ في الخادم");
      }
    } finally {
      setIsLoading(false);
    }
  }
  async function login(data) {
    try {
      setIsLoading(true);
      const resData = await axios.post(
        "https://studentapp.pythonanywhere.com/en/core/login/",
        data
      );

      toast.success("تم تسجيل الدخول بنجاح");

      localStorage.setItem("accessToken", resData.data.access);
      localStorage.setItem("refreshToken", resData.data.refresh);

      setAccessToken(resData.data.access);
    } catch (err) {
      if (err.response?.status === 401)
        toast.error("من فضلك ادخل بيانات صحيحة");
      else {
        toast.error("خطأ في الخادم");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function logout() {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        setIsVerfied,
        isVerfied,
        logout,
        signUp,
        login,
        isLoading,
        profile,
        isLoadingProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
