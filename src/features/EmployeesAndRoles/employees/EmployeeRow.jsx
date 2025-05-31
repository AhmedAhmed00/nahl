import { TableRow } from "../../../ui/table/TableRow";
import Actions from "../../../ui/Actions";

function EmployeeRow({ data }) {
  return (
    <TableRow cols={6} role="row">
      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default EmployeeRow;
