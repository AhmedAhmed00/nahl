import styled from "styled-components";

const StyledLogo = styled.div`
  /* text-align: center; */
  display: flex;
  width: ${({ $w }) => $w && `${$w}px`};
  height: ${({ $h }) => $h && `${$h}px`};
  margin: auto;

  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  margin-bottom: 16px;
`;

const Img = styled.img`
  width: 100%;
`;

function Logo({ w = 300, h = 200 }) {
  return (
    <StyledLogo $w={w} $h={h}>
      <Img src="/Logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
