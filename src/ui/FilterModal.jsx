import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Row from "./Row";
import Button from "./Button";
import { fadeIn, fadeOut } from "./ConfirmDelete";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  backdrop-filter: blur(1.5px);
  align-items: center;
  justify-content: center;
  z-index: 999;
  opacity: ${(props) => (props.isClosing ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;
`;

export const ModalContent = styled.div`
  animation: ${(props) => (props.isClosing ? fadeOut : fadeIn)} 0.3s ease-in-out;
  position: relative;
  min-width: 420px;
  background-color: white;
  padding: 30px 0px;

  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform-origin: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  left: 25px;
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 1.8rem;
  cursor: pointer;
  &:hover {
    color: #ff0000;src/ui/FilterModal.jsx
  }
`;

export default function FilterModal({
  children,
  onClose,
  isClosing,
  handleClose,
}) {
  return (
    <Overlay isClosing={isClosing} onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} isClosing={isClosing}>
        <CloseButton onClick={handleClose}>
          <FaTimes />
        </CloseButton>

        {children}
      </ModalContent>
    </Overlay>
  );
}
