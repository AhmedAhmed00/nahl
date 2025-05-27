import CustomersTable from "../features/customers/CustomersTable";
import { Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";

function Customers() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.customers")}>
      <OperationsContainer>
        <SearchInput />
        <TableOperations />
      </OperationsContainer>
      <Row>
        <CustomersTable />
      </Row>
    </Section>
  );
}
export default Customers;
