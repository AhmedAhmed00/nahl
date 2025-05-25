import GenericTable from "../../../ui/table/GenericTable";
import BranchRow from "./BranchRow";

import useBranches from "./useBranches";

export const BRANCHES_HEADS = [
  "Name",
  "Name Ar",
  "Address",
  "City",
  "region",
  "Actions",
];

export const renderBranchRow = (branch, index) => (
  <BranchRow branch={branch} key={index} />
);
function BranchesTable() {
  const { branches: { results, count } = {}, isLoading } = useBranches();

  return (
    <>
      <GenericTable
        headers={BRANCHES_HEADS}
        data={results}
        renderRow={renderBranchRow}
        pageSize={20}
        resaultsCount={count}
        isLoading={isLoading}
      />
    </>
  );
}

export default BranchesTable;
