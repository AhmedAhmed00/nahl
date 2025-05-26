import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";

export default function BranchRow({ data }) {
  const { categoryName, numOfProducts, image, type } = data || {};

  return (
    <TableRow cols={5} role="row">
      <TableCell>{categoryName}</TableCell>
      <TableCell>{numOfProducts}</TableCell>
      <TableCell>{image}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>
        <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
      </TableCell>
    </TableRow>
  );
}
