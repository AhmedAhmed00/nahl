import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { employeeServices } from "../../../services/apiEmployees";

export default function useDeleteEmployee() {
  const queryClient = useQueryClient();
  const { mutate, data, isError } = useMutation({
    mutationFn: employeeServices.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
      toast.success("Employee deleted successfulyy");
    },
    onError: () => {
      toast.error("cannot delete employee");
    },
  });
  return { mutate, data, isError };
}
