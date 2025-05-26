import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import { CUSTOMERS_HEADS } from "../../data/gridKeys";
import CustomerRow from "./CustomerRow";

function CustomersTable() {
  return (
    <>
      <GenericTable
        headers={CUSTOMERS_HEADS}
        data={[]}
        renderRow={renderRow(CustomerRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default CustomersTable;
