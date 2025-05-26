import { useTranslation } from "react-i18next";
import ProductsTable from "../features/products/ProductsTable";
import { Container, Section } from "../ui/Container";
import Row from "../ui/Row";

function Products() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.products")}>
      <Row>
        <ProductsTable />
      </Row>
    </Section>
  );
}

export default Products;
