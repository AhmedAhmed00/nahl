import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";
import useDeleteEmployee from "./useDeleteEmployee";
import Tag from "../../../ui/Tag";

function EmployeeRow({ employee }) {
  const navigate = useNavigate();
  const { data, isError, mutate } = useDeleteEmployee();
  if (!employee) return null; //LAAAAAAAAAATER
  const { name, created_at, department, status, job_role, user } =
    employee || {};
  console.log(employee);

  console.log(employee);

  return (
    <TableRow cols={6} role="row">
      <TableCell>{user?.name || name || "N/A"}</TableCell>
      <TableCell>{user?.email || "N/A"}</TableCell>
      <TableCell>{user?.phone || "N/A"}</TableCell>
      <TableCell>{job_role?.name || "N/A"}</TableCell>
      <TableCell>
        <Tag type={status === "active" ? "green" : "red"}>{status}</Tag>
      </TableCell>

      <Actions
        onDelete={() => {
          mutate(employee.id);
        }}
        onView={() => {}}
        onUpdate={() => {
          navigate(
            `/management/employees/employee-form?mode=update&id=${employee.id}`
          );
        }}
      />
    </TableRow>
  );
}

export default EmployeeRow;
