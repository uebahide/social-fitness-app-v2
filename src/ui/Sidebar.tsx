import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  grid-column: 1;
  grid-row: 1/-1;
  border-right: 1px solid var(--color-grey-100);
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}
