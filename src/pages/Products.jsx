import { useTranslation } from "react-i18next";
import ProductsTable from "../features/products/ProductsTable";
import { Container, Section } from "../ui/Container";
import Row from "../ui/Row";
import { OperationsContainer } from "../ui/OperationsContainer";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";

function Products() {
  const { t } = useTranslation();
  return (
    // <Section title={t("routes.products")}>
    <>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          addTitle={t("addButtons.addProduct")}
          addPath={"/products/product-form"}
        />
      </OperationsContainer>
      <Row>
        <ProductsTable />
      </Row>
    </>
    // </Section>
  );
}

export default Products;
