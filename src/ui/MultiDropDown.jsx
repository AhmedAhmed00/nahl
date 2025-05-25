import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Spinner from "./Spinner";
import { DropdownContainer, DropdownItem, DropdownList } from "./Select";
import Tag from "./Tag";
import Input from "./Input";

const InputField = styled(Input).attrs({ as: "div" })`
  padding: 0.4rem 1.2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 40px;
  cursor: pointer;
  justify-content: space-between;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const RemoveTag = styled.span`
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
  font-size: 14px;
  color: red;
`;

const MultiSelectDropdown = ({
  options,
  register,
  setValue,
  name,
  defaultValue = [],
  isLoading,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {
    if (defaultValue) {
      setSelectedOptions(defaultValue);
      setValue(
        name,
        defaultValue.map((item) => item.id || item)
      );
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (!selectedOptions.some((item) => item.id === option.id)) {
      const newSelection = [...selectedOptions, option];
      setSelectedOptions(newSelection);
      setValue(
        name,
        newSelection.map((item) => item.id)
      ); // Store only IDs
    }
  };

  const handleRemove = (option) => {
    const updatedSelection = selectedOptions.filter(
      (item) => item.id !== option.id
    );
    setSelectedOptions(updatedSelection);
    setValue(
      name,
      updatedSelection.map((item) => item.id)
    ); // Store only IDs
  };

  return (
    <DropdownContainer>
      <InputField onClick={toggleDropdown}>
        <TagContainer>
          {selectedOptions.map((option) => (
            <Tag type="green" key={option.id}>
              {option.name}
              <RemoveTag onClick={() => handleRemove(option)}>×</RemoveTag>
            </Tag>
          ))}
        </TagContainer>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </InputField>

      {/* Hidden input to store values for React Hook Form */}
      <input
        type="hidden"
        {...register(name)}
        value={selectedOptions.map((item) => item.id)}
      />

      {isOpen && (
        <DropdownList>
          {!isLoading ? (
            options.map((option) => (
              <DropdownItem
                key={option.id}
                onClick={() => handleSelect(option)}
              >
                {option.name}
              </DropdownItem>
            ))
          ) : (
            <Spinner margin={"1rem auto"} />
          )}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default MultiSelectDropdown;
