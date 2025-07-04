import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "10.8rem auto")};

  width: 10.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, var(--color-primary) 94%, #0000) top/10px
      10px no-repeat,
    conic-gradient(#0000 30%, var(--color-primary));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 7px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

export default Spinner;
