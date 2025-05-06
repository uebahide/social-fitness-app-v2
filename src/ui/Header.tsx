import styled from "styled-components";
import Logout from "../features/authentication/Logout";

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  padding: 1rem 6rem;
  border-bottom: 1px solid var(--color-grey-100);
  font-size: 2.4rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  );
}
