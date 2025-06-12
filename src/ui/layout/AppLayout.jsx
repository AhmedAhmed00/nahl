import { Outlet } from "react-router-dom";

import styled from "styled-components";

const StyledAppLayout = styled.div``;

const Main = styled.main``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
