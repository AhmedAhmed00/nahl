import styled from "styled-components";

export const StyledTopHeader = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  height: 100px;

  text-align: center;
  padding: 1rem;

  @media (max-width: 768px) {
    & h1 {
      font-size: 26px;
    }
    & div > svg {
      width: 50px;
    }

    grid-template-columns: auto 1fr;
  }
`;
