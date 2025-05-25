import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function JobRoleRow({ jobRole }) {
  const navigate = useNavigate();

  if (!jobRole) return null; //LAAAAAAAAAATER
  const { name, created_at } = jobRole || {};
  console.log(jobRole);

  console.log(jobRole);

  return (
    <TableRow cols={3} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{created_at}</TableCell>

      <Actions
        onDelete={() => {}}
        onView={() => {}}
        onUpdate={() => {
          navigate(
            `/management/job-roles/job-roles-form?mode=update&id=${jobRole.id}`
          );
        }}
      />
    </TableRow>
  );
}

export default JobRoleRow;
