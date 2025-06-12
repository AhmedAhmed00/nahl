import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import AuthOptions from "./AuthOptions";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 52rem;
  align-content: center;
  justify-content: center;
`;

function Auth() {
  return (
    <LoginLayout>
      <AuthOptions />
    </LoginLayout>
  );
}

export default Auth;
