import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import i18n from "../utils/i18n/index";

import Input from "./Input";
import { useQueryClient } from "@tanstack/react-query";

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 60px;
  background-color: #f9f9f9;
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 20rem;
  overflow-y: auto;
  background-color: #f9f9f9;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  margin-top: 0.5rem;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.li`
  padding: 0.3rem 1.2rem;
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

const InputField = styled(Input).attrs({ as: "div" })`
  display: flex;
  flex-direction: ${({ theme }) =>
    theme.direction === "rtl" ? "row-reverse" : "row"};
  gap: 6px;
  background-color: #f9f9f9;

  align-items: center;

  min-height: 25px;
  cursor: pointer;
  justify-content: space-between;
`;

const LanguageSwitcherDropdown = () => {
  const queryClient = useQueryClient();

  const languages = [
    { id: "en", name: "en", nameAr: "" },
    { id: "ar", name: "ar", nameAr: "" },
  ];
  const getInitialLang = () =>
    localStorage.getItem("lang") || i18n.language || "en";

  const [selectedLang, setSelectedLang] = useState(getInitialLang());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);
    queryClient.invalidateQueries();
  }, [selectedLang, queryClient]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (langId) => {
    setSelectedLang(langId);
    setIsOpen(false);
  };

  const selected = languages.find((lang) => lang.id === selectedLang);

  return (
    <DropdownContainer>
      <InputField onClick={toggleDropdown}>
        <p
          style={{
            fontSize: "14px",
            textTransform: "capitalize",
          }}
        >
          {selected?.name}
        </p>
        {isOpen ? (
          <FaChevronUp color="var(--color-grey-500)" size={10} />
        ) : (
          <FaChevronDown color="var(--color-grey-500)" size={10} />
        )}
      </InputField>

      {isOpen && (
        <DropdownList>
          {languages.map((lang) => (
            <DropdownItem key={lang.id} onClick={() => handleSelect(lang.id)}>
              {lang.name}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default LanguageSwitcherDropdown;
