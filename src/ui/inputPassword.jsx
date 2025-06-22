import { useState } from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledInput = styled.input`
  border: 1px solid
    ${({ dangerBorder }) => (dangerBorder ? "red" : "var(--color-grey-300)")};
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 4rem 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  width: 100%;
`;

const EyeIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-40%);
  color: var(--color-grey-500);
  font-size: 1.6rem;
  cursor: pointer;
`;

export const PasswordInput = ({ dangerBorder, register, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputWrapper>
      <StyledInput
        type={showPassword ? "text" : "password"}
        dangerBorder={dangerBorder}
        {...register(name)}
      />
      <EyeIcon onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </EyeIcon>
    </InputWrapper>
  );
};
