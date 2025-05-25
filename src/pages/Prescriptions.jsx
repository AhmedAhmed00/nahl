import styled from "styled-components";
import Select from "../ui/Select";
import useModal from "../hooks/useModal";
import { Container } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";
import PrescriptionsTable from "../features/prescriptions/PrescriptionsTable";
import Row from "../ui/Row";
import { createPortal } from "react-dom";
import FormModal from "../ui/FormModal";
import AdForm from "../features/ads/AdForm";
import { useForm } from "react-hook-form";
import useFilters from "../hooks/useFilter";
import { useEffect } from "react";

// Styled Select with placeholder
const FilterAds = styled(Select).attrs({
  placeholder: "Filter ",
})``;

function Prescriptions() {
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();

  return (
    <Container>
      <OperationsContainer>
        <SearchInput />

        <TableOperations
          setOpenModal={setOpenModal}
          formType="modal"
          children={<FilterForm />}
        />
      </OperationsContainer>

      <Row>
        <PrescriptionsTable />
      </Row>

      {openModal &&
        createPortal(
          <FormModal
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
            form={<AdForm handleClose={handleClose} />}
          />,
          document.body
        )}
    </Container>
  );
}

export default Prescriptions;

function FilterForm() {
  const { register, watch, control } = useForm();
  const { handleFilter, searchParams, setSearchParams } = useFilters();

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.filterAds === "all") {
        searchParams.delete("status");
        setSearchParams(searchParams);
      } else {
        handleFilter({ status: value.filterAds });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, handleFilter, searchParams, setSearchParams]);

  return (
    <form>
      <FilterAds
        control={control}
        name={"filterAds"}
        chooseValue="name"
        items={[{ name: "all" }, { name: "pending" }, { name: "accepted" }]}
      />
    </form>
  );
}
