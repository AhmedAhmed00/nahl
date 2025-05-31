import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TabLinks = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 12px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #888888;
  font-size: 22px;
  font-weight: 600;

  &.active {
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
  }
`;

const Tabs = ({ tabs }) => {
  return (
    <TabLinks>
      {tabs?.map((tab, index) => (
        <li key={index}>
          <StyledNavLink to={tab.to} end>
            {tab.title}
          </StyledNavLink>
        </li>
      ))}
    </TabLinks>
  );
};

export default Tabs;
