import styled from "styled-components";
import Row from "./Row";

const StyledInputsHeader = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
`;

const StyledIndex = styled.p`
  background-color: var(--color-primary);
  color: white;
  border-radius: 20%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const StyledRowWrapper = styled.div`
  margin-block: ${(props) => (props.margin ? props.margin : "20px")};

  &:first-child {
    margin-top: 0;
  }
`;

export default function InputsHeader({ index, head, margin }) {
  return (
    <StyledRowWrapper margin={margin}>
      <Row
        items="center"
        justify="center"
        width="fit-content"
        type="horizontal"
        $gap="7px"
      >
        <StyledIndex>{index}</StyledIndex>
        <StyledInputsHeader>{head}</StyledInputsHeader>
      </Row>
    </StyledRowWrapper>
  );
}
