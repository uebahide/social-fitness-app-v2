import {
  FcCollaboration,
  FcConferenceCall,
  FcDataConfiguration,
  FcHome,
  FcSportsMode,
} from "react-icons/fc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMainNav = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 6rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--color-grey-400);
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    gap: 1rem;
    margin: 0 2rem;
    border-radius: 10px;
    font-weight: 600;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-600);
    background-color: var(--color-brand-50);
    font-size: 2rem;
  }
`;

export default function MainNav() {
  return (
    <nav>
      <StyledMainNav>
        <li>
          <StyledNavLink to="/dashboard">
            <FcHome />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/exercises">
            <FcSportsMode />
            <span>Exercises</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/friends">
            <FcConferenceCall />
            <span>Friends</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/chat">
            <FcCollaboration />
            <span>Chat</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <FcDataConfiguration />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </StyledMainNav>
    </nav>
  );
}
