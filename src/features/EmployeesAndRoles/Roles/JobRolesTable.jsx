import GenericTable from "../../../ui/table/GenericTable";
import JobRoleRow from "./JobRoleRow";

export const JOB_ROLES_HEADS = ["name", "created at", "actions"];

export const renderJobRow = (jobRole, index) => (
  <JobRoleRow jobRole={jobRole} key={index} />
);

function JobRolesTable() {
  return (
    <>
      <GenericTable
        headers={JOB_ROLES_HEADS}
        data={[]}
        renderRow={renderJobRow}
        pageSize={20}
        resaultsCount={0}
        isLoading={false}
      />
    </>
  );
}

export default JobRolesTable;
