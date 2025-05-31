import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";
import { Link } from "react-router-dom";
import Tag from "../../ui/Tag";

export default function VendorRow({ data }) {
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
      <TableCell style={{ padding: "0 5px", textDecoration: "underline" }}>
        <Link to={`/vendor/${vendorName}`}>{vendorName}</Link>
      </TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell
        style={{
          padding: "0 20px",
        }}
      >
        {numberOfProducts}
      </TableCell>
      <TableCell
        style={{
          padding: "0 20px",
        }}
      >
        {totalSales}
      </TableCell>
      <TableCell
        style={{
          margin: "0px -15px",
        }}
      >
        {date}
      </TableCell>
      <TableCell
        style={{
          margin: "0px -15px",
        }}
      >
        <Tag type="green">Active</Tag>
      </TableCell>

      <TableCell>
        <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
      </TableCell>
    </TableRow>
  );
}
