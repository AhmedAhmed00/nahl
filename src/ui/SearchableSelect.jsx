// import { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import { useController } from "react-hook-form";
// import { useSearchParams } from "react-router-dom";
// import useQueryParams from "../hooks/useQueryParams";
// import useFilters from "../hooks/useFilter";
// import { useInView } from "react-intersection-observer";

// // Styled Components
// const SelectContainer = styled.div`
//   position: relative;
//   width: 100%;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   font-size: 1.4rem;
//   padding: 0.4rem 1.2rem;
//   height: 39px;
//   border: 1px solid var(--color-grey-300);
//   border-radius: var(--border-radius-sm);
//   background-color: var(--color-grey-0);
//   font-weight: 500;
// `;

// const DropdownList = styled.ul`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   right: 0;
//   background-color: white;
//   border: 1px solid var(--color-grey-200);
//   max-height: 200px;
//   overflow-y: auto;
//   margin-top: 4px;
//   border-radius: var(--border-radius-sm);
//   z-index: 9;
// `;

// const DropdownItem = styled.li`
//   padding: 0.8rem 1.2rem;
//   ${"" /* font-size: 1.4rem; */}
//   cursor: pointer;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }
// `;

// export default function SearchableSelect({
//   items = [],
//   chooseValue = "name",
//   renderValue,
//   control,
//   name,
//   rules,
//   onSearch,
//   placeholder = "Select an option",
//   fetchNext,
//   hasNextPage,
//   isFetchingNextPage,
// }) {
//   const {
//     field: { value, onChange, ref },
//     fieldState: { error },
//   } = useController({ name, control, rules });

//   const {
//     ref: observerRef,
//     inView,
//     entry,
//   } = useInView({
//     /* Optional options */
//     threshold: 0.1, // Trigger when 10% visible (better than 0)
//     rootMargin: "20px", // Add some margin

//     triggerOnce: false,
//   });

//   useEffect(() => {
//     if (inView && hasNextPage) fetchNext();
//   }, [inView, entry, fetchNext, hasNextPage]);

//   const [search, setSearch] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const containerRef = useRef();
//   useEffect(() => {
//     const selectedItem = items.find(
//       (item) => item[chooseValue] === value || item === value
//     );
//     if (selectedItem)
//       setSearch(
//         selectedItem[renderValue] ||
//           selectedItem.name ||
//           selectedItem.case_number ||
//           selectedItem
//       );
//   }, [value, items, chooseValue, renderValue]);

//   const handleSelect = (item) => {
//     const selectedValue = item[chooseValue] || item;
//     onChange(selectedValue);
//     setSearch(item[renderValue] || item.name || item.case_number || item);
//     setIsOpen(false);
//   };
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!containerRef.current?.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <SelectContainer ref={containerRef}>
//       <SearchInput
//         ref={ref}
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//           onSearch(e.target.value);
//           setIsOpen(true);
//         }}
//         onFocus={() => setIsOpen(true)}
//         placeholder={placeholder}
//         autoComplete="off"
//       />
//       {isOpen && (
//         <DropdownList>
//           {items.map((item, index) => (
//             <DropdownItem key={index} onClick={() => handleSelect(item)}>
//               {item[renderValue] || item.name || item.case_number || item}
//             </DropdownItem>
//           ))}
//           {isFetchingNextPage && <div>fetch more data</div>}
//           <div
//             ref={observerRef}
//             style={{ height: "1px", background: "transparent" }}
//           />
//         </DropdownList>
//       )}
//     </SelectContainer>
//   );
// }

// import { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import { useController } from "react-hook-form";
// import { useSearchParams } from "react-router-dom";
// import useQueryParams from "../hooks/useQueryParams";
// import useFilters from "../hooks/useFilter";
// import { useInView } from "react-intersection-observer";
// import { FiChevronDown, FiX } from "react-icons/fi";

// // Styled Components
// const SelectContainer = styled.div`
//   position: relative;
//   width: 100%;
// `;

// const InputContainer = styled.div`
//   position: relative;
//   width: 100%;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   font-size: 1.4rem;
//   padding: 0.4rem 1.2rem;
//   height: 39px;
//   border: 1px solid var(--color-grey-300);
//   border-radius: var(--border-radius-sm);
//   background-color: var(--color-grey-0);
//   font-weight: 500;
//   padding-right: 30px;
//   padding-left: 30px;
// `;

// const IconButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: var(--color-grey-400);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.5rem;

//   &:hover {
//     color: var(--color-grey-600);
//   }
// `;

// const DropdownList = styled.ul`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   right: 0;
//   background-color: white;
//   border: 1px solid var(--color-grey-200);
//   max-height: 200px;
//   overflow-y: auto;
//   margin-top: 4px;
//   border-radius: var(--border-radius-sm);
//   z-index: 9;
// `;

// const DropdownItem = styled.li`
//   padding: 0.8rem 1.2rem;
//   cursor: pointer;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }
// `;

// export default function SearchableSelect({
//   items = [],
//   chooseValue = "name",
//   renderValue,
//   control,
//   name,
//   rules,
//   onSearch,
//   placeholder = "Select an option",
//   fetchNext,
//   hasNextPage,
//   isFetchingNextPage,
// }) {
//   const {
//     field: { value, onChange, ref },
//     fieldState: { error },
//   } = useController({ name, control, rules });

//   const {
//     ref: observerRef,
//     inView,
//     entry,
//   } = useInView({
//     threshold: 0.1,
//     rootMargin: "20px",
//     triggerOnce: false,
//   });

//   useEffect(() => {
//     if (inView && hasNextPage) fetchNext();
//   }, [inView, entry, fetchNext, hasNextPage]);

//   const [search, setSearch] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const containerRef = useRef();

//   useEffect(() => {
//     const selectedItem = items.find(
//       (item) => item[chooseValue] === value || item === value
//     );
//     if (selectedItem)
//       setSearch(
//         selectedItem[renderValue] ||
//           selectedItem.name ||
//           selectedItem.case_number ||
//           selectedItem
//       );
//   }, [value, items, chooseValue, renderValue]);

//   const handleSelect = (item) => {
//     const selectedValue = item[chooseValue] || item;
//     onChange(selectedValue);
//     setSearch(item[renderValue] || item.name || item.case_number || item);
//     setIsOpen(false);
//   };

//   const handleClear = () => {
//     onChange(null);
//     setSearch("");
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!containerRef.current?.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <SelectContainer ref={containerRef}>
//       <InputContainer>
//         <SearchInput
//           ref={ref}
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             onSearch(e.target.value);
//             setIsOpen(true);
//           }}
//           onFocus={() => setIsOpen(true)}
//           placeholder={placeholder}
//           autoComplete="off"
//         />
//         {value ? (
//           <IconButton
//             onClick={handleClear}
//             style={{ right: 0 }}
//             aria-label="Clear selection"
//           >
//             <FiX size={18} />
//           </IconButton>
//         ) : (
//           ""
//         )}
//         <IconButton
//           onClick={() => setIsOpen(!isOpen)}
//           style={{ left: 0 }}
//           aria-label="Toggle dropdown"
//         >
//           <FiChevronDown size={18} />
//         </IconButton>
//       </InputContainer>
//       {isOpen && (
//         <DropdownList>
//           {items.map((item, index) => (
//             <DropdownItem key={index} onClick={() => handleSelect(item)}>
//               {item[renderValue] || item.name || item.case_number || item}
//             </DropdownItem>
//           ))}
//           {isFetchingNextPage && <div>fetch more data</div>}
//           <div
//             ref={observerRef}
//             style={{ height: "1px", background: "transparent" }}
//           />
//         </DropdownList>
//       )}
//     </SelectContainer>
//   );
// }

// Last Version

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

// Styled Components
const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 1.4rem;
  padding: 0.4rem 1.2rem;
  height: 39px;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  padding-right: 30px;
  padding-left: 30px;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
    box-shadow: 0 0 0 2px var(--color-brand-200);
  }
`;

const IconButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-grey-400);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: var(--color-grey-600);
  }

  &:focus {
    outline: none;
    color: var(--color-brand-600);
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid var(--color-grey-200);
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
  border-radius: var(--border-radius-sm);
  z-index: 9;
  box-shadow: var(--shadow-md);
`;

const DropdownItem = styled.li`
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const LoadingMessage = styled.div`
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  text-align: center;
`;

export default function SearchableSelect({
  items = [],
  chooseValue = "name",
  renderValue,
  control,
  setEnabled,
  name,
  rules,
  onSearch,
  placeholder = "Select an option",
  fetchNext,
  hasNextPage,
  isFetchingNextPage,
}) {
  const {
    field: { value, onChange, ref: controllerRef },
    fieldState: { error },
  } = useController({ name, control, rules });

  const {
    ref: observerRef,
    inView,
    entry,
  } = useInView({
    threshold: 0.1,
    rootMargin: "20px",
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasNextPage) fetchNext();
  }, [inView, entry, fetchNext, hasNextPage]);

  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const selectedItem = items?.find(
      (item) => item[chooseValue] === value || item === value
    );
    if (selectedItem) {
      setSearch(
        selectedItem[renderValue] ||
          selectedItem.name ||
          selectedItem.case_number ||
          selectedItem
      );
    }
    // else if (value === null || value === undefined) {
    //   setSearch("");
    // }
  }, [value, items, chooseValue, renderValue]);

  const handleSelect = (item) => {
    const selectedValue = item[chooseValue] || item;
    onChange(selectedValue);
    setSearch(item[renderValue] || item.name || item.case_number || item);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange(null);
    setSearch("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && value) {
      handleClear();
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (controllerRef && inputRef.current) {
      controllerRef(inputRef.current);
    }
  }, [controllerRef]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <SelectContainer ref={containerRef}>
      <InputContainer>
        <SearchInput
          ref={inputRef}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearch(e.target.value);
            setIsOpen(true);
            setEnabled(true);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsOpen(true);
            setEnabled(true);
          }}
          placeholder={placeholder}
          autoComplete="off"
        />
        {value ? (
          <IconButton
            onClick={handleClear}
            style={{ right: 0 }}
            aria-label="Clear selection"
            type="button"
          >
            <FiX size={18} />
          </IconButton>
        ) : (
          ""
        )}
        <IconButton
          onClick={() => {
            setIsOpen(!isOpen);
            // inputRef.current?.focus();
          }}
          style={{ left: 0 }}
          aria-label="Toggle dropdown"
          type="button"
        >
          <FiChevronDown
            size={18}
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          />
        </IconButton>
      </InputContainer>
      {isOpen && (
        <DropdownList>
          {console.log("Dropdown items:", items)}
          {items.length > 0 ? (
            items.map((item, index) => (
              <DropdownItem key={index} onClick={() => handleSelect(item)}>
                {item[renderValue] ||
                  item.name ||
                  item.case_number ||
                  item.service ||
                  item}
              </DropdownItem>
            ))
          ) : (
            <DropdownItem disabled>No options available</DropdownItem>
          )}
          {isFetchingNextPage && (
            <LoadingMessage>Loading more items...</LoadingMessage>
          )}
          <div
            ref={observerRef}
            style={{ height: "1px", background: "transparent" }}
          />
        </DropdownList>
      )}
    </SelectContainer>
  );
}
