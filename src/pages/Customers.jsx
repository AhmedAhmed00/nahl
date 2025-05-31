import CustomersTable from "../features/customers/CustomersTable";
import { Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import FormRow from "../ui/FormRow";
import Form from "../ui/Form";
import FilterButtons from "../ui/FilterButtons";
import useModal from "../hooks/useModal";

function Customers() {
  const { t } = useTranslation();
  return (
    // <Section title={t("routes.customers")}>
    <>
      <OperationsContainer>
        <SearchInput />
        <TableOperations filterInputs={<FilterInputs />} />
      </OperationsContainer>
      <Row>
        <CustomersTable />
      </Row>
    </>
  );
}
export default Customers;

export function FilterInputs() {
  return (
    <>
      <FormRow>
        <Input name="name" placeholder="اسم العميل" />
      </FormRow>
    </>
  );
}
