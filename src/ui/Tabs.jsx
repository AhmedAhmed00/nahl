import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TabLinks = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 18px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #888888;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 1px;

  &.active {
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
  }
`;

const Tabs = ({ tabs }) => {
  const { t } = useTranslation();
  return (
    <TabLinks>
      {tabs?.map((tab, index) => (
        <li key={index}>
          <StyledNavLink to={tab.to} end>
            {t(`routes.${tab.title}`)}
          </StyledNavLink>
        </li>
      ))}
    </TabLinks>
  );
};

export default Tabs;
