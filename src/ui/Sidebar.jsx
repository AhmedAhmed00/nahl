import styled from "styled-components";
import MainNav from "./layout/MainNav";
// import Logo from "./Logo";

const StyledSidebar = styled.aside`
  padding: 3.2rem 0.5rem 3.2rem 1.6rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
