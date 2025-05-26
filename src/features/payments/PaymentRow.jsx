import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";

function PaymentRow({ data }) {
  return (
    <TableRow cols={5} role="row">
      <TableCell>
        <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
      </TableCell>
    </TableRow>
  );
}

export default PaymentRow;
