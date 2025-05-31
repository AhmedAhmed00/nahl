import { Section } from "../ui/Container";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import PaymentsTable from "../features/payments/PaymentsTable";
import { OperationsContainer } from "../ui/OperationsContainer";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";

function Payments() {
  const { t } = useTranslation();
  return (
    <>
      <OperationsContainer>
        <SearchInput />
        <TableOperations />
      </OperationsContainer>
      <Row>
        <PaymentsTable />
      </Row>
    </>
  );
}
export default Payments;
