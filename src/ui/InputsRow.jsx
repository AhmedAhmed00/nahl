import styled from "styled-components";

export const InputsRow = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.dir ? props.dir : "row")};
  margin-bottom: 16px;
  align-items: start;
  gap: 25px;
  justify-content: space-between;
  width: 100%;
`;
