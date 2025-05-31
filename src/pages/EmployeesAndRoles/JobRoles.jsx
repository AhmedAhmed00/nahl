import { OperationsContainer } from "../../ui/OperationsContainer";
import SearchInput from "../../ui/SearchInput";
import TableOperations from "../../ui/table/TableOperations";
import Row from "../../ui/Row";
import JobRolesTable from "../../features/EmployeesAndRoles/roles/JobRolesTable";

function JobRoles() {
  return (
    <>
      <OperationsContainer>
        <SearchInput />
        <TableOperations />
      </OperationsContainer>

      <Row>
        <JobRolesTable />
      </Row>
    </>
  );
}
export default JobRoles;
