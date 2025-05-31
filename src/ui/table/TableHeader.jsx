import styled from "styled-components";

export const TableHeader = styled.header`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols - 1}, 1fr) auto`};
  column-gap: 2.4rem;
  align-items: center;

  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: 600;

  color: var(--color-grey-600);
  padding: 1.2rem 3.6rem;
  border: 1px solid #e2e2e2;
`;
