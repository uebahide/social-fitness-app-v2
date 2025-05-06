import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";

const StyledHeaderButton = styled.button`
  color: var(--color-brand-500);
  background-color: inherit;
  border: none;
  border-radius: var(--border-radius-md);
  padding: 0.8rem;
  &:hover {
    background-color: var(--color-grey-100);
  }
`;

export default function Logout() {
  const { isLoggingout, logout } = useLogout();
  function handleLogout() {
    logout();
  }
  return (
    <StyledHeaderButton onClick={handleLogout}>
      {!isLoggingout ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </StyledHeaderButton>
  );
}
