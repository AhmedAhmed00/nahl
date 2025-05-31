import { GROUPS_HEADS } from "../../data/gridKeys";
import { renderRow } from "../../ui/RenderRow";
import GenericTable from "../../ui/table/GenericTable";
import GroupRow from "./GroupRow";

function GroupsTable() {
  return (
    <>
      <GenericTable
        headers={GROUPS_HEADS}
        data={[]}
        renderRow={renderRow(GroupRow)}
        pageSize={20}
        resaultsCount={0}
        isLoading={false}
      />
    </>
  );
}

export default GroupsTable;
