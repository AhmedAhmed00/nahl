import { PAYMENT_HEADS } from "../../data/gridKeys";
import { renderRow } from "../../ui/RenderRow";
import GenericTable from "../../ui/table/GenericTable";
import PaymentRow from "./PaymentRow";

function PaymentsTable() {
  return (
    <>
      <GenericTable
        headers={PAYMENT_HEADS}
        data={[]}
        renderRow={renderRow(PaymentRow)}
        pageSize={20}
        resaultsCount={0}
        isLoading={false}
      />
    </>
  );
}

export default PaymentsTable;
