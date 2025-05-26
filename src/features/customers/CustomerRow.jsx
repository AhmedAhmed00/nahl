import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";

export default function CustomerRow({ data }) {
  return (
    <TableRow cols={5} role="row">
      <TableCell>
        <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
      </TableCell>
    </TableRow>
  );
}
