import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { employeeServices } from "../../../services/apiEmployees";

export default function useCreateEmployee() {
  const queryClient = useQueryClient();

  const {
    mutate: addNewEmployee,
    isError: isErrorAdding,
    data,
    status: addingStatus,
    error,
    failureReason,
    context,
  } = useMutation({
    mutationFn: employeeServices.create,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
      toast.success("Employee Addedd Successfully");
    },
    onError: () => {
      toast.error("Cannot Add Employee");
    },
  });
  return {
    addNewEmployee,
    isErrorAdding,
    data,
    addingStatus,
    error,
    failureReason,
  };
}
