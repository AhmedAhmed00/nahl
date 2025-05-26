import CustomersTable from "../features/customers/CustomersTable";
import { Section } from "../ui/Container";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";

function Customers() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.customers")}>
      <Row>
        <CustomersTable />
      </Row>
    </Section>
  );
}
export default Customers;
