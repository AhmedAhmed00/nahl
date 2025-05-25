import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";
import useDeleteBranch from "./useDeleteBranch";

function BranchRow({ branch }) {
  const navigate = useNavigate();
  const { data, isError, mutate } = useDeleteBranch();
  if (!branch) return null; //LAAAAAAAAAATER
  const { name, name_ar, address, city, region } = branch || {};

  return (
    <TableRow cols={6} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{name_ar}</TableCell>
      <TableCell>{address}</TableCell>
      <TableCell>{city}</TableCell>
      <TableCell>{region}</TableCell>

      <Actions
        onDelete={() => {
          mutate(branch.id);
        }}
        onView={() => {}}
        onUpdate={() => {
          navigate(
            `/management/branches/branchForm?mode=update&id=${branch.id}`
          );
        }}
      />
    </TableRow>
  );
}

export default BranchRow;
