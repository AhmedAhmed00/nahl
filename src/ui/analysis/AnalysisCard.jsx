import styled from "styled-components";
import Heading from "../Heading";
import Row from "../Row";

const AnalysisCardStyles = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  border: 1px solid #f5f5f5;
  border-radius: 6px;
`;

const Number = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Percentage = styled.span`
  background-color: var(--color-green-700);
  color: white;
  font-weight: 600;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 12px;
  margin-left: 4px;
  display: inline-block;
  vertical-align: middle;
`;

export default function AnalysisCard({ title, number, icon, percentage }) {
  return (
    <AnalysisCardStyles>
      <Row type="vertical" $gap="8px">
        <Heading style={{ color: "#888888" }} as={"h4"}>
          {title}
        </Heading>
        <Number>
          {number} <Percentage>+{percentage} %</Percentage>
        </Number>
      </Row>
      {icon}
    </AnalysisCardStyles>
  );
}
