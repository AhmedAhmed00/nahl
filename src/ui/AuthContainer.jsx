import { BsPerson } from "react-icons/bs";
import styled from "styled-components";

const StyledAuthContainer = styled.div`
  margin: auto;
  background-color: var(--color-brand-1);
  padding-block: 25px 70px;
  padding-inline: 20px;
  border-radius: 28px;
`;
export const Profile = styled.div`
  width: 100%;

  height: 250px;
`;

export default function AuthContainer({ children }) {
  return (
    <StyledAuthContainer>
      <Profile>
        <BsPerson
          style={{
            display: "block",
            margin: "auto",
            color: "#d4dbdb",
          }}
          size={"90%"}
        />
      </Profile>
      {children}
    </StyledAuthContainer>
  );
}
