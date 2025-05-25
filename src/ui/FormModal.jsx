import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import { fadeIn, fadeOut } from "./ConfirmDelete";
import { Overlay } from "./table/Modal";

export const ModalContent = styled.div`
  animation: ${(props) => (props.isClosing ? fadeOut : fadeIn)} 0.2s ease-in-out;
  position: relative;
  min-width: 420px;
  background-color: white;
  padding: 30px 0px;

  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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

export default function FormModal({
  children,
  onClose,
  isClosing,
  handleClose,
  form,
}) {
  return (
    <Overlay isClosing={isClosing} onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} isClosing={isClosing}>
        <CloseButton onClick={handleClose}>
          <FaTimes />
        </CloseButton>

        {form}
      </ModalContent>
    </Overlay>
  );
}
