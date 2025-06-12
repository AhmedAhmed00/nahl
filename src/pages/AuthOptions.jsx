import { useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

import Button from "../ui/Button";

import AuthContainer from "../ui/AuthContainer";

function AuthOptions() {
  const navigate = useNavigate();

  const { isLoading, login, accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken, navigate]);

  return (
    <AuthContainer>
      <Link to={"/auth/login"}>
        <Button style={{ marginTop: "25px" }} size="large" variation="light">
          تسجيل الدخول
        </Button>
      </Link>
      <Link to={"/auth/register"}>
        <Button style={{ marginTop: "25px" }} size="large" variation="light">
          إنشاء حساب
        </Button>
      </Link>
    </AuthContainer>
  );
}

export default AuthOptions;
