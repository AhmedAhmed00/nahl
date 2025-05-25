import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useInView } from "react-intersection-observer";

// Styled Components
export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 100px;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 0.7rem 1.2rem;
  font-size: 1.5rem;
  ${
    "" /* border: 1px solid
    ${(props) =>
      props.$hasError
        ? "var(--color-red-500)"
        : props.$type === "white"
          ? "var(--color-grey-900)"
          : "var(--color-grey-8900)"}; */
  }
  border: 1px solid var(--color-grey-300);

  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus {
    outline: 2px solid var(--color-brand-500);
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 20rem;
  overflow-y: auto;
  background-color: white;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  margin-top: 0.5rem;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.li`
  padding: 0.8rem 1.2rem;
  font-size: 1.3rem;
  text-transform: capitalize;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isSelected ? "var(--color-grey-200)" : "transparent"};
  color: ${(props) => (props.$isSelected ? "black" : "var(--color-text)")};

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;

export default function Select({
  name,
  control,
  rules,
  items,
  chooseValue = "id",
  renderValue = "name",
  placeholder = "Select an option",
  type,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: props.defaultValue || "",
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update selected item when value changes (e.g., form reset)
  useEffect(() => {
    if (value && items) {
      const foundItem = items.find((item) => item[chooseValue] === value);
      if (foundItem) setSelectedItem(foundItem);
    } else {
      setSelectedItem(null);
    }
  }, [value, items, chooseValue]);

  const handleSelect = (item) => {
    setSelectedItem(item);
    onChange(item[chooseValue]);
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        $hasError={!!error}
        $type={type}
      >
        {selectedItem ? selectedItem[renderValue] : placeholder}
        <span>
          {isOpen ? (
            <MdKeyboardArrowUp size={22} />
          ) : (
            <MdKeyboardArrowDown size={22} />
          )}
        </span>
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {items?.map((item) => (
            <DropdownItem
              key={item[chooseValue]}
              onClick={() => handleSelect(item)}
              $isSelected={selectedItem?.[chooseValue] === item[chooseValue]}
            >
              {item[renderValue]}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}
