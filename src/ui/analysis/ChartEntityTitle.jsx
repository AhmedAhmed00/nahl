import styled from "styled-components";
import Row from "../Row";

const ChartTitle = styled.div`
  position: relative;
  padding-right: 20px;
  margin-bottom: 20px;
  color: ${({ color }) => color || "black"};

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border: 2px solid ${({ color }) => color || "black"};
    border-radius: 50%;
  }
`;

export default function ChartEntityTitle({ title, color }) {
  return (
    <Row>
      <ChartTitle color={color}>{title}</ChartTitle>
    </Row>
  );
}
