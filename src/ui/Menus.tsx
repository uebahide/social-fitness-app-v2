/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext, useState } from "react";
import { GrMoreVertical } from "react-icons/gr";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

type position = {
  x: number;
  y: number;
};

const ToggleButton = styled.button`
  border: none;
  background-color: inherit;

  &:focus {
    outline: none;
  }
`;

const StyledList = styled.ul<{ position: position }>`
  position: fixed;
  right: 10rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  background-color: white;

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const MenuButton = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.8rem;
  border: none;
  width: 100%;
  text-align: left;
  background-color: inherit;
  padding: 1.3rem 2rem;
  font-size: 1.4rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled.span`
  color: var(--color-grey-400);
`;

const P = styled.p`
  font-weight: 300;
`;

const MenusContext = createContext({
  currentId: "",
  open: (id: string) => {},
  close: () => {},
  position: { x: 0, y: 0 },
  handleSetPosition: (prop: { x: number; y: number }) => {},
});

function Menus({ children }: { children: ReactNode }) {
  const [currentId, setCurrentId] = useState("");
  const [position, setPosition] = useState<position>({ x: 0, y: 0 });
  const open = (id: string) => {
    setCurrentId(id);
  };
  const close = () => {
    setCurrentId("");
  };
  function handleSetPosition({ x, y }: { x: number; y: number }) {
    setPosition({ x, y });
  }
  return (
    <MenusContext.Provider
      value={{ currentId, open, close, position, handleSetPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }: { id: string }) {
  const { currentId, close, open, handleSetPosition } =
    useContext(MenusContext);

  function handleClick(e: any) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    handleSetPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    if (!currentId || currentId !== id) {
      open(id);
    } else close();
  }

  return (
    <ToggleButton onClick={handleClick}>
      <GrMoreVertical />
    </ToggleButton>
  );
}

function List({ children, id }: { children: ReactNode; id: string }) {
  const { currentId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (currentId !== id) return null;
  return (
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>
  );
}

function Button({
  children,
  onClick,
  icon,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  icon: ReactNode;
  disabled: boolean;
}) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <MenuButton onClick={handleClick} disabled={disabled}>
        <Icon>{icon}</Icon>
        <P>{children}</P>
      </MenuButton>
    </li>
  );
}

Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
