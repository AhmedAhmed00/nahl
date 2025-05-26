import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import { BRANCHES_HEADS } from "../../data/gridKeys";
import BranchRow from "./BranchRow";

function BranchesTable() {
  return (
    <>
      <GenericTable
        headers={BRANCHES_HEADS}
        data={[]}
        renderRow={renderRow(BranchRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default BranchesTable;
