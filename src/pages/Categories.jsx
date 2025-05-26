import { Section } from "../ui/Container";
import Row from "../ui/Row";
import CategoriesTable from "../features/categories/categoriesTable";
import { useTranslation } from "react-i18next";
import { OperationsContainer } from "../ui/OperationsContainer";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";

function Categories() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.categories")}>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          addPath={"/categories/category-form"}
          addTitle={t("addButtons.addCategory")}
        />
      </OperationsContainer>
      <Row>
        <CategoriesTable />
      </Row>
    </Section>
  );
}
export default Categories;
