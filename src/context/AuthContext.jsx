import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) setAccessToken(token);
  }, []);

  async function login(data) {
    try {
      setIsLoading(true);
      const resData = await axios.post(
        "https://shetak-v2.cyparta.com/core/login/",
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
      value={{ accessToken, setAccessToken, logout, login, isLoading }}
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
