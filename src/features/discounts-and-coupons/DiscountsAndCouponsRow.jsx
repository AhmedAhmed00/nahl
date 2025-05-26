import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";

export default function DiscountsAndCouponsRow({ data }) {
  const {
    vendorName,
    email,
    phoneNumber,
    numberOfProducts,
    totalSales,
    date,
    status,
  } = data || {};

  return (
    <TableRow cols={8} role="row">
      <TableCell>{vendorName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell>{numberOfProducts}</TableCell>
      <TableCell>{totalSales}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{status}</TableCell>

      <TableCell>
        <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
      </TableCell>
    </TableRow>
  );
}
