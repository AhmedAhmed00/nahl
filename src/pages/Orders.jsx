import OrdersTable from "../features/orders/OrdersTable";
import { Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import SearchInput from "../ui/SearchInput";
import TableOperations from "../ui/table/TableOperations";

function Orders() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.orders")}>
      <OperationsContainer>
        <SearchInput />
        <TableOperations />
      </OperationsContainer>
      <Row>
        <OrdersTable />
      </Row>
    </Section>
  );
}
export default Orders;
