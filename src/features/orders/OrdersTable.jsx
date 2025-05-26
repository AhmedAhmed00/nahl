import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import { ORDERS_HEADS } from "../../data/gridKeys";
import OrderRow from "./OrderRow";

function OrdersTable() {
  return (
    <>
      <GenericTable
        headers={ORDERS_HEADS}
        data={[]}
        renderRow={renderRow(OrderRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default OrdersTable;
