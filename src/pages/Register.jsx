import styled from "styled-components";
import RegisterForm from "../features/authentication/RegisterForm";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 52rem;
  align-content: center;
  justify-content: center;
`;

function Register() {
  const { isVerfied } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isVerfied) navigate("/auth/verfication");
  }, [isVerfied, navigate]);

  if (!isVerfied) return null;

  return (
    <LoginLayout>
      <RegisterForm />
    </LoginLayout>
  );
}

export default Register;
