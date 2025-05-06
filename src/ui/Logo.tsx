import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Img = styled.img`
  height: 10rem;
  width: auto;
`;

const P = styled.p`
  font-family: "Dancing Script", cursive;
  color: var(--color-grey-600);
`;

export default function Logo() {
  return (
    <StyledLogo>
      <Img src="/fitness.png" alt="logo image" />
      <P>SOCIAL FITNESS</P>
    </StyledLogo>
  );
}
