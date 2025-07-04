import styled, { css } from "styled-components";

const Form = styled.form`
  height: 100%;
  & button {
    margin-top: 24px;
  }

  ${(props) =>
    props.type !== "filter" &&
    css`
      & button {
        margin-top: 24px;
        margin-right: auto;
        display: block;
      }
    `}

  ${(props) =>
    props.type !== "modal" &&
    css`
      padding-inline: 36px;
      padding-block: 0px 60px;
      padding-top: 30px;
      background-color: var(--color-grey-0);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}

  font-size: 1.45rem;
`;

export default Form;
