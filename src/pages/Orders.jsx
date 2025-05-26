import OrdersTable from "../features/orders/OrdersTable";
import { Section } from "../ui/Container";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";

function Orders() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.orders")}>
      <Row>
        <OrdersTable />
      </Row>
    </Section>
  );
}
export default Orders;
