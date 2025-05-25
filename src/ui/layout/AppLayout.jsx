import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;

  grid-template-columns: 26rem 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`;

const Main = styled.main`
  ${"" /* padding: 2rem 1.8rem 0.4rem;  */}
  ${"" /* width: 97%; */}
  ${"" /* margin-top: 20px; */}
  border: 1px solid var(--color-grey-200);
  ${"" /* border-radius: 8px; */}
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
