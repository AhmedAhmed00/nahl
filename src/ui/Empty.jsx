import styled from "styled-components";
import Row from "./Row";

const StyledEmpty = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
`;

const StyledImg = styled.img.attrs({
  src: "/no-results.png",
  alt: "Empty State",
})`
  width: 450px;
  height: auto;
`;

function Empty() {
  return (
    <StyledEmpty>
      <Row
        height="500px"
        items="center"
        justify="center"
        gap="15px"
        type="vertical"
      >
        <p style={{fontSize:"50px",color:"white" }}>لا توجد نتائح</p>
      </Row>
    </StyledEmpty>
  );
}

export default Empty;
