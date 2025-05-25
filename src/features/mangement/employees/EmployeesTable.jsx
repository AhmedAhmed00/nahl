import GenericTable from "../../../ui/table/GenericTable";
import EmployeeRow from "./EmployeeRow";
import useEmployees from "./useEmployees";

export const EMPLOYEES_HEADS = [
  "Name",
  "Email",
  "Phone",
  "Role",
  "Status",
  "Actions",
];

export const renderEmployeeRow = (employee, index) => (
  <EmployeeRow employee={employee} key={index} />
);

function EmployeesTable() {
  const {
    employees: { results, count } = {},
    isError,
    isLoading,
  } = useEmployees();
  return (
    <>
      <GenericTable
        headers={EMPLOYEES_HEADS}
        data={results}
        renderRow={renderEmployeeRow}
        pageSize={20}
        resaultsCount={count}
        isLoading={isLoading}
      />
    </>
  );
}

export default EmployeesTable;
