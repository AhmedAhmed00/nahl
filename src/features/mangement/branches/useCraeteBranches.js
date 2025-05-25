import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { branchesServices } from "../../../data/api";

export default function useCreateBranches() {
  const queryClient = useQueryClient();

  const {
    mutate: addNewBranches,
    isError: isErrorAdding,
    data,
    status: addingStatus,
  } = useMutation({
    mutationFn: branchesServices.create,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["branches"],
      });
      toast.success("Branches added successfully");
    },
    onError: () => {
      toast.error("Cannot add Branches");
    },
  });
  return { addNewBranches, isErrorAdding, data, addingStatus };
}
