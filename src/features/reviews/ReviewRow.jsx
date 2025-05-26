import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";

export default function ReviewRow({ data }) {
  return (
    <TableRow cols={8} role="row">
      <TableCell>
        <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
      </TableCell>
    </TableRow>
  );
}
