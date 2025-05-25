// import { useEffect, useState } from "react";
// import { useController } from "react-hook-form";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const StyledFileInput = styled.input.attrs({ type: "file" })`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 48px;
//   font-size: 14px;
//   border-radius: 8px;
//   width: 100%;
//   border: 1px solid
//     ${({ dangerBorder }) => (dangerBorder ? "red" : "var(--color-grey-300)")};
//   background-color: #fff;
//   cursor: pointer;
//   transition: all 0.2s;
//   outline: none;

//   &::file-selector-button {
//     font: inherit;
//     height: 100%;
//     font-weight: 500;
//     font-size: 14px;
//     padding: 0.5rem 1rem;
//     border-radius: 6px;
//     border: none;
//     background-color: #f3f4f6;
//     color: #111827;
//     cursor: pointer;
//     transition:
//       background-color 0.2s,
//       color 0.2s;

//     &:hover {
//       background-color: #e5e7eb;
//     }
//   }
// `;

// const FileList = styled.div`
//   margin-top: 10px;
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// const FileItem = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background: #f9f9f9;
//   padding: 5px 10px;
//   border-radius: 5px;
//   font-size: 14px;
// `;

// const RemoveButton = styled.button`
//   background: red;
//   color: white;
//   border: none;
//   padding: 3px 8px;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background: darkred;
//   }
// `;

// const PreviewImage = styled.img`
//   margin-top: 10px;
//   max-width: 400px;
//   height: auto;
//   border-radius: 6px;
//   object-fit: cover;
// `;

// const fileTypeMap = {
//   pdf: "application/pdf",
//   excel:
//     "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//   image: "image/png, image/jpeg, image/jpg",
//   doc: "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//   other: "*",
// };

// function FileInput({ control, name, documentType }) {
//   const [acceptedTypes, setAcceptedTypes] = useState(fileTypeMap.other);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [filePreview, setFilePreview] = useState(null);

//   const {
//     field: { onChange, onBlur, ref, value },
//   } = useController({ name, control });

//   useEffect(() => {
//     setAcceptedTypes(fileTypeMap[documentType] || fileTypeMap.other);
//   }, [documentType]);

//   useEffect(() => {
//     if (value && value instanceof File) {
//       console.log(value, "vaaaaaaaaaaaaaaaaaaaaaalues");
//       setSelectedFile(value);
//       generatePreview(value);
//     } else if (typeof value === "string") {
//       setSelectedFile(value);
//       generatePreview(value);
//       console.log(value, "value as String");
//       // const fetchFile = async () => {
//       //   const response = await fetch(value.file);
//       //   const blob = await response.blob();
//       //   const file = new File([blob], value.file.split("/").pop(), {
//       //     type: blob.type,
//       //   });
//       //   setSelectedFile(file);
//       //   generatePreview(file);
//       //   onChange(file);
//       // };
//       // fetchFile();
//     }
//   }, [value, onChange]);

//   const generatePreview = (file) => {
//     if (file && file?.type?.startsWith("image/")) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFilePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else if (typeof file === "string") {
//       setFilePreview(file);
//     } else {
//       setFilePreview(null);
//     }
//   };

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       onChange(file);
//       generatePreview(file);
//     }
//   };

//   const removeFile = () => {
//     setSelectedFile(null);
//     setFilePreview(null);
//     onChange(null);
//   };

//   return (
//     <div>
//       {!selectedFile && (
//         <div
//           style={{ marginBottom: "8px", fontSize: "14px", color: "#6B7280" }}
//         >
//           Upload file
//         </div>
//       )}
//       <StyledFileInput
//         accept={acceptedTypes}
//         onChange={handleChange}
//         onBlur={onBlur}
//         ref={ref}
//       />

//       {selectedFile && (
//         <FileList>
//           <FileItem>
//             {typeof value === "string" && (
//               <Link
//                 target="_blank"
//                 style={{
//                   textDecoration: "underline",
//                 }}
//                 to={value}
//               >
//                 {value.substring(0, 40)}...
//               </Link>
//             )}
//           </FileItem>
//           {filePreview && <PreviewImage src={filePreview} alt="Preview" />}
//         </FileList>
//       )}
//     </div>
//   );
// }

// export default FileInput;

//  version Two

// import { useEffect, useState } from "react";
// import { useController } from "react-hook-form";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { FiUpload } from "react-icons/fi";

// const HiddenFileInput = styled.input.attrs({ type: "file" })`
//   display: none;
// `;

// const UploadBox = styled.label`
//   max-width: 400px;
//   max-height: 300px;
//   min-height: 100px;
//   border: 2px dashed ${({ dangerBorder }) => (dangerBorder ? "red" : "#d1d5db")};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: all 0.2s;
//   background-color: #f9fafb;
//   text-align: center;
//   overflow: hidden;

//   &:hover {
//     background-color: #f3f4f6;
//   }

//   svg {
//     width: 32px;
//     height: 32px;
//     color: #6b7280;
//     margin-bottom: 4px;
//   }

//   img {
//     max-width: 100%;
//     max-height: 100%;
//     object-fit: cover;
//     border-radius: 6px;
//   }

//   .text-preview {
//     font-size: 12px;
//     color: #374151;
//     padding: 4px;
//     word-break: break-word;
//   }
// `;

// const fileTypeMap = {
//   pdf: "application/pdf",
//   excel:
//     "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//   image: "image/png, image/jpeg, image/jpg",
//   doc: "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//   other: "*",
// };

// function FileInput({ control, name, documentType }) {
//   const [acceptedTypes, setAcceptedTypes] = useState(fileTypeMap.other);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [filePreview, setFilePreview] = useState(null);

//   const {
//     field: { onChange, onBlur, ref, value },
//   } = useController({ name, control });

//   useEffect(() => {
//     setAcceptedTypes(fileTypeMap[documentType] || fileTypeMap.other);
//   }, [documentType]);

//   useEffect(() => {
//     if (value && value instanceof File) {
//       setSelectedFile(value);
//       generatePreview(value);
//     } else if (typeof value === "string") {
//       setSelectedFile(value);
//       generatePreview(value);
//     }
//   }, [value]);

//   const generatePreview = (file) => {
//     if (file?.type?.startsWith?.("image/")) {
//       const reader = new FileReader();
//       reader.onloadend = () => setFilePreview(reader.result);
//       reader.readAsDataURL(file);
//     } else if (typeof file === "string") {
//       setFilePreview(file);
//     } else {
//       setFilePreview(null);
//     }
//   };

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       onChange(file);
//       generatePreview(file);
//     }
//   };

//   return (
//     <div>
//       <UploadBox htmlFor={name}>
//         {filePreview && filePreview.startsWith("data:image") ? (
//           <img src={filePreview} alt="Preview" />
//         ) : typeof selectedFile === "string" ? (
//           <div className="text-preview">
//             <img src={filePreview} alt="Preview" />
//           </div>
//         ) : (
//           <>
//             <FiUpload />
//             <span style={{ fontSize: "12px", color: "#6B7280" }}>
//               Upload file
//             </span>
//           </>
//         )}
//       </UploadBox>

//       <HiddenFileInput
//         id={name}
//         accept={acceptedTypes}
//         onChange={handleChange}
//         onBlur={onBlur}
//         ref={ref}
//       />
//     </div>
//   );
// }

// export default FileInput;

// version 3

import { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { FiEdit, FiUpload } from "react-icons/fi";
import styled from "styled-components";

const HiddenFileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

const UploadBoxWrapper = styled.div`
  position: relative;
  max-width: 400px;
`;

const UploadBox = styled.div`
  max-height: 300px;
  min-height: 100px;
  border: 2px dashed ${({ dangerBorder }) => (dangerBorder ? "red" : "#d1d5db")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s;
  background-color: #f9fafb;
  overflow: hidden;
  padding: 8px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }

  .text-preview {
    font-size: 12px;
    color: #374151;
    word-break: break-word;
  }
`;

const UploadIconButton = styled.button`
  position: absolute;
  top: 12px;
  opacity: 0.5;
  right: 12px;
  background: #fff;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  transition: background 0.2s;

  svg {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background-color: #f3f4f6;
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

function FileInput({ control, name, documentType }) {
  const [acceptedTypes, setAcceptedTypes] = useState(fileTypeMap.other);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const {
    field: { onChange, onBlur, ref, value },
  } = useController({ name, control });

  useEffect(() => {
    setAcceptedTypes(fileTypeMap[documentType] || fileTypeMap.other);
  }, [documentType]);

  useEffect(() => {
    if (value && value instanceof File) {
      setSelectedFile(value);
      generatePreview(value);
    } else if (typeof value === "string") {
      setSelectedFile(value);
      generatePreview(value);
    }
  }, [value]);

  const generatePreview = (file) => {
    if (file?.type?.startsWith?.("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setFilePreview(reader.result);
      reader.readAsDataURL(file);
    } else if (typeof file === "string") {
      setFilePreview(file);
    } else {
      setFilePreview(null);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      onChange(file);
      generatePreview(file);
    }
  };

  const triggerFileInput = () => {
    const input = document.getElementById(name);
    if (input) input.click();
  };

  return (
    <div>
      <UploadBoxWrapper>
        <UploadBox>
          {filePreview && filePreview.startsWith("data:image") ? (
            <img src={filePreview} alt="Preview" />
          ) : typeof selectedFile === "string" ? (
            <div className="text-preview">
              <img src={filePreview} alt="Preview" />
            </div>
          ) : (
            <span style={{ fontSize: "12px", color: "#6B7280" }}>
              No preview available
            </span>
          )}
        </UploadBox>

        <UploadIconButton type="button" onClick={triggerFileInput}>
          {value ? <FiEdit /> : <FiUpload />}
        </UploadIconButton>
      </UploadBoxWrapper>

      <HiddenFileInput
        id={name}
        accept={acceptedTypes}
        onChange={handleChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
}

export default FileInput;
