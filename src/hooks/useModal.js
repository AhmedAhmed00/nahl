import { useState } from "react";

export default function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  function onClose() {
    setOpenModal(false);
  }

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  return {
    handleClose,
    isClosing,
    setIsClosing,
    openModal,
    setOpenModal,
    onClose,
  };
}
