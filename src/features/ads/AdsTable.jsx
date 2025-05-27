import { ADS_HEAdS } from "../../data/gridKeys";
import { renderRow } from "../../ui/RenderRow";
import GenericTable from "../../ui/table/GenericTable";
import AdRow from "./AdRow";

function AdsTable() {
  return (
    <>
      <GenericTable
        headers={ADS_HEAdS}
        data={[]}
        renderRow={renderRow(AdRow)}
        pageSize={20}
        resaultsCount={0}
        isLoading={false}
      />
    </>
  );
}

export default AdsTable;
