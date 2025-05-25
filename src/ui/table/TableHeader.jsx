import styled from "styled-components";

export const TableHeader = styled.header`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols - 1}, 1fr) auto`};
  column-gap: 2.4rem;
  align-items: center;
  background-color: #f9f9f9;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  background-color: var(--color-grey-200);

  color: var(--color-grey-600);
  padding: 1.6rem 3.6rem;
  border: 1px solid #e2e2e2;
`;
