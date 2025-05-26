import styled from "styled-components";
import Heading from "../Heading";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: rgba(249, 249, 249, 1);
  padding: 1.2rem 3.4rem;
  padding-block: 20px;
  border: 1px solid var(--color-grey-200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`;

export const Avatar = styled.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 50%;
`;

function Header({ title }) {
  return (
    <StyledHeader>
      <Heading as="h3" color="primary">
        <span>{title}</span>
      </Heading>
      <LanguageSwitcher />
    </StyledHeader>
  );
}

export default Header;
