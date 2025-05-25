import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { branchesServices } from "../../../data/api";

export default function useDeleteBranch() {
  const queryClient = useQueryClient();
  const { mutate, data, isError } = useMutation({
    mutationFn: branchesServices.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["branches"],
      });
      toast.success("Branch Deleted Successfully");
    },
    onError: () => {
      toast.error("Cannot Delete This Brnach");
    },
  });
  return { mutate, data, isError };
}
