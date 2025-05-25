import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

// Keyframes for fade-in and fade-out
export const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

export const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.9); }
`;

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
  transition: opacity 0.3s ease-in-out;
`;

const StyledConfirmDelete = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-radius: 8px;
  animation: ${(props) => (props.isClosing ? fadeOut : fadeIn)} 0.3s ease-in-out;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resource, onConfirm, closeModal }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal(); // Close after transition
    }, 300);
  };

  return (
    <Overlay isClosing={isClosing} onClick={handleClose}>
      <StyledConfirmDelete
        isClosing={isClosing}
        onClick={(e) => e.stopPropagation()}
      >
        <Heading as="h2">Delete Record</Heading>
        <p>Are you sure you need to delete the record ?</p>

        <div>
          <Button variation="secondary" onClick={handleClose}>
            No, keep it
          </Button>
          <Button
            size="medium"
            variation="danger"
            onClick={() => {
              onConfirm();
              handleClose();
            }}
          >
            Yes, Delete it
          </Button>
        </div>
      </StyledConfirmDelete>
    </Overlay>
  );
}

export default ConfirmDelete;
