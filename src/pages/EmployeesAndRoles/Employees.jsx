import { useTranslation } from "react-i18next";
import { Container, Section } from "../../ui/Container";
import { OperationsContainer } from "../../ui/OperationsContainer";
import SearchInput from "../../ui/SearchInput";
import TableOperations from "../../ui/table/TableOperations";
import EmployeesTable from "../../features/EmployeesAndRoles/employees/EmployeesTable";
import Row from "../../ui/Row";

function Employees() {
  const { t } = useTranslation();
  return (
    <>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          addTitle={t("addButtons.addEmployee")}
          addPath={"/employees-and-roles/employees/employee-form"}
        />
      </OperationsContainer>
      <Row>
        <EmployeesTable />
      </Row>
    </>
  );
}
export default Employees;
