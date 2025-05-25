import { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const StyledFileInput = styled.input.attrs({ type: "file", multiple: true })`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid
    ${({ dangerBorder }) => (dangerBorder ? "red" : "var(--color-grey-300)")};
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;

  &::file-selector-button {
    font: inherit;
    height: 100%;
    font-weight: 500;
    font-size: 14px;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: none;
    background-color: #f3f4f6;
    color: #111827;
    cursor: pointer;
    transition:
      background-color 0.2s,
      color 0.2s;

    &:hover {
      background-color: #e5e7eb;
    }
  }
`;

const fileTypeMap = {
  pdf: "application/pdf",
  excel:
    "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  image: "image/png, image/jpeg, image/jpg",
  doc: "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  other: "*",
};

const FileList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 3px 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;

function FilesInput({ control, name, documentType }) {
  const [acceptedTypes, setAcceptedTypes] = useState(fileTypeMap.other);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const {
    field: { onChange, onBlur, ref, value },
  } = useController({ name, control });

  // Set accepted file types
  useEffect(() => {
    setAcceptedTypes(fileTypeMap[documentType] || fileTypeMap.other);
  }, [documentType]);

  // Load existing files on edit
  useEffect(() => {
    if (value && Array.isArray(value)) {
      setSelectedFiles(value);
    }
  }, [value]);
  const [isFirstMount, setIsFirstMount] = useState(true);
  useEffect(() => {
    setIsFirstMount(false);
  }, [isFirstMount]);

  //   useEffect(() => {
  //     const initializeFiles = async () => {
  //       if (!control._formValues[name]) return;

  //       const value = control._formValues[name];

  //       console.log(value, "vaaaaaaaaaaaaaaalue");

  //       if (Array.isArray(value)) {
  //         if (value.length > 0) {
  //           // Handle URL attachments

  //           const files = await Promise.all(
  //             value.map(async (attachment, index) => {
  //               console.log(attachment.file, "attachment");
  //               const response = await fetch(attachment?.file);
  //               const blob = await response.blob();
  //               return new File([blob], `attachment-${index}.pdf`, {
  //                 type: blob.type,
  //               });
  //             })
  //           );
  //           const validFiles = files.filter(Boolean);
  //           setSelectedFiles(validFiles);
  //           onChange(validFiles);
  //         } else {
  //           // Already File objects
  //           setSelectedFiles(value);
  //         }
  //       }
  //     };

  //     initializeFiles();
  //   }, [control._formValues[name]]);

  // useEffect(() => {
  //   const fetchAttachments = async () => {
  //     if (Array.isArray(value) && value.length > 0) {
  //       const files = await Promise.all(
  //         value.map(async (attachment, index) => {
  //           const response = await fetch(attachment.file);
  //           const blob = await response.blob();
  //           console.log(blob);
  //           return new File([blob], `attachment-${index}.pdf`);
  //         })
  //       );
  //       setSelectedFiles(files);
  //       console.log(selectedFiles, "imaaaaaaaaaaaaaaaages");
  //       onChange(files);
  //     }
  //   };
  //   console.log(isFirstMount);

  //   fetchAttachments();
  // }, [isFirstMount]);

  // Handle file selection
  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedFiles = [...selectedFiles, ...files]; // Append new files
    setSelectedFiles(updatedFiles);
    onChange(updatedFiles);
  };
  // Remove a file from the list
  const removeFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onChange(newFiles);
  };

  return (
    <div>
      <StyledFileInput
        accept={acceptedTypes}
        type="file"
        onChange={handleChange}
        onBlur={onBlur}
        ref={ref}
      />

      <FileList>
        {selectedFiles.map((file, index) => (
          <FileItem key={index}>
            <span>{file?.file || file?.name || file}</span>
            <RemoveButton onClick={() => removeFile(index)}>
              Remove
            </RemoveButton>
          </FileItem>
        ))}
      </FileList>
    </div>
  );
}

export default FilesInput;
