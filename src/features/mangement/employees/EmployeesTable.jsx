import GenericTable from "../../../ui/table/GenericTable";
import { EMPLOYEES_HEADS } from "../../EmployeesAndRoles/employees/EmployeesTable";
import EmployeeRow from "./EmployeeRow";

export const renderEmployeeRow = (employee, index) => (
  <EmployeeRow employee={employee} key={index} />
);

function EmployeesTable() {
  return (
    <>
      <GenericTable
        headers={EMPLOYEES_HEADS}
        data={[]}
        renderRow={renderEmployeeRow}
        pageSize={20}
        resaultsCount={0}
        isLoading={false}
      />
    </>
  );
}

export default EmployeesTable;
