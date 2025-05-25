import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid
    ${({ dangerBorder }) => (dangerBorder ? "red" : "var(--color-grey-300)")};
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

export default Input;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const DiscountInput = styled(Input).attrs({ type: "number" })`
  padding: 0.8rem 7.5rem 0.8rem 1.2rem;
  width: 100%;
`;

const PercentIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 1.8rem;
  transform: translateY(-50%);
  color: var(--color-grey-500);
  font-size: 1.6rem;
  font-weight: 500;
  pointer-events: none;
`;

export const DiscountPercentageInput = ({ dangerBorder, register, name }) => {
  const { t } = useTranslation();

  return (
    <InputWrapper>
      <DiscountInput dangerBorder={dangerBorder} {...register(name)} />
      <PercentIcon>%</PercentIcon>
    </InputWrapper>
  );
};
