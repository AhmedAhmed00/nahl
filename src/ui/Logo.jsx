import styled from "styled-components";

const StyledLogo = styled.div`
  /* text-align: center; */
  display: flex;
  width: ${({ $w }) => $w && `${$w}`};
  height: ${({ $h }) => $h && `${$h}`};
  margin: auto;

  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  margin-bottom: 16px;
`;

const Img = styled.img`
  width: 100%;
`;

function Logo({ w = "300px", h = "200px" }) {
  return (
    <StyledLogo $w={w} $h={h}>
      <Img src="/Logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
