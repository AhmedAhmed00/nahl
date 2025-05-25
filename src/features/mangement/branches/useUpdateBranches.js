import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { branchesServices } from "../../../data/api";

export default function useUpdateBranches() {
  const queryClient = useQueryClient();

  const {
    mutate: updateExistingBranches,
    isError: isErrorUpdatihg,
    data,
    status: updatingStatus,
  } = useMutation({
    mutationFn: ({ id, body }) => branchesServices.update(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["branches"],
      });
      toast.success("Branches updated successfully");
    },
    onError: (err) => {
      if (err.data.detail) {
        toast.error(err.data.detail);
      } else {
        toast.error("cannot update Branches");
      }
    },
  });
  return { updateExistingBranches, isErrorUpdatihg, data, updatingStatus };
}
