/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement, ReactElement, useContext } from "react";
import { createContext, ReactNode, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
`;

const StyledModalWindow = styled.div`
  position: fixed;
  width: 800px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: var(--shadow-lg);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
  background-color: inherit;
  border: none;
  color: var(--color-grey-400);
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const ModalContext = createContext({
  currentWindow: "",
  openWindow: (name: string) => {},
  closeWindow: () => {},
});

function Modal({ children }: { children: ReactNode }) {
  const [currentWindow, setCurrentWindow] = useState("");
  const openWindow = (name: string) => setCurrentWindow(name);
  const closeWindow = () => setCurrentWindow("");
  return (
    <ModalContext.Provider value={{ currentWindow, openWindow, closeWindow }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  name,
}: {
  children: ReactElement<any, any>;
  name: string;
}) {
  const { openWindow } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => openWindow(name) });
}

function Window({
  children,
  name,
}: {
  children: ReactElement<any, any>;
  name: string;
}) {
  const { currentWindow, closeWindow } = useContext(ModalContext);
  if (name !== currentWindow) return null;
  return (
    <Overlay>
      <StyledModalWindow>
        <CloseButton onClick={closeWindow}>
          <HiXMark />
        </CloseButton>
        {cloneElement(children, { onCloseModal: closeWindow })}
      </StyledModalWindow>
    </Overlay>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
