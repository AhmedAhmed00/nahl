import GenericTable from "../../ui/table/GenericTable";
import AdRow from "./AdRow";

export const CLIENTS_HEADS = ["Title", "Status", "Created At", "Actions"];

export const renderAdRow = (ad, index) => <AdRow ad={ad} key={index} />;

function AdsTable() {
  return (
    <>
      <GenericTable
        headers={CLIENTS_HEADS}
        data={[]}
        renderRow={renderAdRow}
        pageSize={20}
        resaultsCount={0}
        isLoading={false}
      />
    </>
  );
}

export default AdsTable;
