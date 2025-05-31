import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  /* padding: 2rem 1.8rem 0.4rem; */
  height: ${(props) => (props.height ? props.height : "")};
  width: ${(props) => (props.width ? props.width : "")};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : "nowrap")};
  gap: ${(props) => (props.$gap ? props.$gap : "")};
  margin: ${(props) => (props.$margin ? props.$margin : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "stretch")};

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: ${(props) =>
        props.justify ? props.justify : "space-between"};
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      justify-content: ${(props) =>
        props.justify ? props.justify : "space-between"};
      align-items: ${(props) => (props.items ? props.items : "")};
      flex-direction: column;
      gap: ${(props) => (props.gap ? props.gap : "1.6rem")};
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
