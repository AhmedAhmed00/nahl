import { useTranslation } from "react-i18next";
import { ClientsTable } from "../features/clients/ClientsTable";
import { Container } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import SearchInput from "../ui/SearchInput";
import TableOperations from "../ui/table/TableOperations";

function Clients() {
  const { t } = useTranslation();
  return (
    <>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          addPath={"/customers/customer-form"}
          addTitle={t("addButtons.addCustomer")}
        />
      </OperationsContainer>
      <Row>
        <ClientsTable />
      </Row>
    </>
  );
}

export default Clients;
