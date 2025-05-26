import { useNavigate } from "react-router-dom";
import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";

function ProductRow({ data }) {
  return (
    <TableRow cols={5} role="row">
      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default ProductRow;
