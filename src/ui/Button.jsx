import styled, { css } from "styled-components";
import SpinnerMini from "./SpinnerMini";

const sizes = {
  small: css`
    font-size: 1.2rem;

    padding: 0.4rem 0.8rem;
    height: 30px;
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.5rem;
    min-width: 125px;
    width: auto;
    padding: 0.8rem 1rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    min-height: 36px;
    padding: 0.5rem 2.2rem;
    width: 100%;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-primary);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const StyledButton = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

StyledButton.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default function Button({ children, isLoading, ...rest }) {
  return (
    <StyledButton disabled={isLoading} {...rest}>
      {isLoading ? <SpinnerMini /> : children}
    </StyledButton>
  );
}
