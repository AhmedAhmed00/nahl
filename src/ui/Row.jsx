// import styled, { css } from "styled-components";

// const Row = styled.div`
//   display: flex;
//   /* padding: 2rem 1.8rem 0.4rem; */
//   height: ${(props) => (props.height ? props.height : "")};
//   width: ${(props) => (props.width ? props.width : "")};
//   flex-wrap: ${(props) => (props.wrap ? props.wrap : "nowrap")};
//   gap: ${(props) => (props.$gap ? props.$gap : "")};
//   margin: ${(props) => (props.$margin ? props.$margin : "")};
//   padding: ${(props) => (props.$padding ? props.$padding : "")};
//   align-self: ${(props) => (props.alignSelf ? props.alignSelf : "stretch")};

//   ${(props) =>
//     props.type === "horizontal" &&
//     css`
//       justify-content: ${(props) =>
//         props.justify ? props.justify : "space-between"};
//       align-items: center;
//     `}

//   ${(props) =>
//     props.type === "vertical" &&
//     css`
//       justify-content: ${(props) =>
//         props.justify ? props.justify : "space-between"};
//       align-items: ${(props) => (props.items ? props.items : "")};
//       flex-direction: column;
//       gap: ${(props) => (props.gap ? props.gap : "1.6rem")};
//     `}
// `;

// Row.defaultProps = {
//   type: "vertical",
// };

// export default Row;

// import styled, { css } from "styled-components";

// const Row = styled.div`
//   display: flex;
//   width: ${(props) => props.width || "100%"};
//   height: ${(props) => props.height || "auto"};
//   flex-wrap: ${(props) => props.wrap || "nowrap"};
//   gap: ${(props) => props.$gap || "0"};
//   margin: ${(props) => props.$margin || "0"};
//   padding: ${(props) => props.$padding || "0"};
//   align-self: ${(props) => props.alignSelf || "stretch"};

//   ${(props) =>
//     props.type === "horizontal" &&
//     css`
//       flex-direction: row;
//       justify-content: ${props.justify || "space-between"};
//       align-items: center;
//     `}

//   ${(props) =>
//     props.type === "vertical" &&
//     css`
//       flex-direction: column;
//       justify-content: ${props.justify || "space-between"};
//       align-items: ${props.items || "stretch"};
//       gap: ${props.gap || "1.6rem"};
//     `}

//   /* Responsive Styles */
//   @media (max-width: 768px) {
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 2rem;
//     margin: 2rem 1rem;
//   }
// `;

// Row.defaultProps = {
//   type: "vertical",
// };

// export default Row;

import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.$gap || "0"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
  align-self: ${(props) => props.alignSelf || "stretch"};

  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: ${props.justify || "space-between"};
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      justify-content: ${props.justify || "space-between"};
      align-items: ${props.items || "stretch"};
      gap: ${props.gap || "1.6rem"};
    `}

  /* Responsive Styles */
  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 2rem 2rem;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 1.5rem 1rem;
    margin: 2rem 1rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 1rem 0.5rem;
  }
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
