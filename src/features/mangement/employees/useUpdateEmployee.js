import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { employeeServices } from "../../../services/apiEmployees";
import { useState } from "react";

export default function useUpdateEmployee() {
  const queryClient = useQueryClient();
  const [id, setId] = useState();

  const {
    mutate: updateExistingEmployee,
    isError: isErrorUpdatihg,
    data,
    status: updatingStatus,
  } = useMutation({
    mutationFn: ({ id, body }) => {
      setId(id);
      employeeServices.update(id, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
      queryClient.invalidateQueries({
        queryKey: ["employee", id],
      });

      toast.success("Employee Updated Successfully");
    },

    onError: () => {
      toast.error("Cannot Update Employee");
    },
  });
  return { updateExistingEmployee, isErrorUpdatihg, data, updatingStatus };
}
