import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.padding || "20px 25px"};
`;

export function Section({ title, children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
