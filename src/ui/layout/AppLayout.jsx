import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Footer from "../Footer";

const StyledAppLayout = styled.div``;

const Main = styled.main`
  min-height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
