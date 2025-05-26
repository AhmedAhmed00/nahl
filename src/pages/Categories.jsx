import { Section } from "../ui/Container";
import Row from "../ui/Row";
import CategoriesTable from "../features/categories/categoriesTable";
import { useTranslation } from "react-i18next";

function Categories() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.categories")}>
      <Row>
        <CategoriesTable />
      </Row>
    </Section>
  );
}
export default Categories;
