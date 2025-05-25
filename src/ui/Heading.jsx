import styled, { css } from "styled-components";

const Heading = styled.h1`
  margin: ${(props) => props.margin && props.margin};
  font-weight: 600;
  font-size: 18px;
  ${(props) =>
    props.color === "primary" &&
    css`
      color: var(--color-primary);
    `}
  ${(props) =>
    props.color === "red" &&
    css`
      color: var(--color-red-800);
    `}

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
     ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
    `}
    
  line-height: 1.4;
`;

export default Heading;
