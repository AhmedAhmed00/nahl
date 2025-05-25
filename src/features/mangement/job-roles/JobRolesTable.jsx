import GenericTable from "../../../ui/table/GenericTable";
import JobRoleRow from "./JobRoleRow";
import useJobRoles from "./useJobRoles";

export const JOB_ROLES_HEADS = ["Name", "created At", "Actions"];

export const renderJobRow = (jobRole, index) => (
  <JobRoleRow jobRole={jobRole} key={index} />
);

function JobRolesTable() {
  const {
    isError,
    isLoading,
    jobRoles: { results, count } = {},
  } = useJobRoles();
  return (
    <>
      <GenericTable
        headers={JOB_ROLES_HEADS}
        data={results}
        renderRow={renderJobRow}
        pageSize={20}
        resaultsCount={count}
        isLoading={isLoading}
      />
    </>
  );
}

export default JobRolesTable;
