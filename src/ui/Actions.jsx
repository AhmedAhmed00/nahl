import { useState, useRef, useEffect, Fragment } from "react";
import {
  FaCommentDots,
  FaEdit,
  FaEye,
  FaMortarPestle,
  FaTrashAlt,
} from "react-icons/fa";
import Row from "./Row";
import ConfirmDelete from "./ConfirmDelete";
import { createPortal } from "react-dom";
import { HiDotsVertical } from "react-icons/hi";
import styled, { keyframes } from "styled-components";
import { MdMoreVert } from "react-icons/md";

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const PopupMenu = styled.div`
  position: absolute;
  right: -30px;

  top: 100%;
  background: white;
  border: 1px solid var(--color-grey-200);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  font-size: 12px;
  min-width: 140px;

  animation: ${(props) => (props.$isClosing ? fadeOut : fadeIn)} 0.2s
    ease-in-out forwards;
`;

const MenuItem = styled.div`
  padding: 8px 12px;

  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

function Actions({
  onView,
  onDelete,
  onUpdate,
  onViewBranches,
  viewMoreActions,

  moreActoins,
  actions = ["update", "delete"],
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const menuRef = useRef(null);
  const menuTimerRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      startClosingMenu();
    } else {
      setIsMenuOpen(true);
      setIsMenuClosing(false);
    }
  };

  const startClosingMenu = () => {
    setIsMenuClosing(true);
    clearTimeout(menuTimerRef.current);
    menuTimerRef.current = setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 200); // Match this with your animation duration
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isMenuOpen) {
          startClosingMenu();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(menuTimerRef.current);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div style={{ paddingRight: "10px" }}>
        <Row
          justify="start"
          gap="8px"
          type="horizontal"
          style={{ position: "relative" }}
        >
          {actions.includes("update") && (
            <FaEdit
              onClick={onUpdate}
              cursor="pointer"
              fontSize="18px"
              title="Edit"
              color="var(--color-yellow-900)"
            />
          )}
          {actions.includes("view") && (
            <FaEye
              color="var(--color-grey-500)"
              onClick={onView}
              cursor="pointer"
              fontSize="18px"
              title="View"
            />
          )}

          {actions.includes("more-actoins") && (
            <div ref={menuRef} style={{ position: "relative", height: "18px" }}>
              <MdMoreVert
                onClick={toggleMenu}
                cursor="pointer"
                fontSize="18px"
                style={{
                  alignSelf: "center",
                }}
                title="Delete"
              />
              {isMenuOpen && { moreActoins }}
            </div>
          )}

          {actions.includes("view-more") && (
            <div ref={menuRef} style={{ position: "relative", height: "18px" }}>
              <MdMoreVert
                onClick={toggleMenu}
                cursor="pointer"
                fontSize="18px"
                style={{
                  alignSelf: "center",
                }}
                title="More actions"
              />
              {isMenuOpen && (
                <PopupMenu $isClosing={isMenuClosing}>
                  {viewMoreActions?.map((action, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        action.onClick();
                        startClosingMenu();
                      }}
                    >
                      {action.label}
                    </MenuItem>
                  ))}
                </PopupMenu>
              )}
            </div>
          )}

          {actions.includes("delete") && (
            <FaTrashAlt
              onClick={openModal}
              cursor="pointer"
              fontSize="18px"
              title="Delete"
              color="var(--color-red-700)"
            />
          )}
        </Row>
      </div>
      {isModalOpen &&
        createPortal(
          <ConfirmDelete
            resource="client"
            onConfirm={onDelete}
            closeModal={closeModal}
          />,
          document.body
        )}
    </>
  );
}

export default Actions;
