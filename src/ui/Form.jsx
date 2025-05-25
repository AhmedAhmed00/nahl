import styled, { css } from "styled-components";

const Form = styled.form`
  min-height: 100%;
  ${(props) =>
    props.type !== "modal" &&
    css`
      /* padding: 2.4rem 4rem; */
      padding: 20px 25px;
      padding-top: 30px;

      /* Box */
      background-color: var(--color-grey-0);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    

  font-size: 1.4rem;
`;

export default Form;
