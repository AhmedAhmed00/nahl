import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const Div = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
`;
export default function TableOperations({
  setOpenModal,
  addPath,
  addTitle,
  formType = "form",
  children,
  filterComponent,
}) {
  const navigate = useNavigate();

  return (
    <Div>
      {filterComponent && filterComponent}

      {children}

      {addTitle && (
        <Button
          size="large"
          type="button"
          onClick={() => {
            if (formType === "modal") setOpenModal((open) => !open);
            else {
              navigate(addPath);
            }
          }}
          variation="primary"
        >
          {addTitle}
        </Button>
      )}
    </Div>
  );
}
