import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useUpdateServices({ key, resourse, service }) {
  const queryClient = useQueryClient();

  const {
    mutate,
    isError: isErrorUpdatihg,
    data,
    status: updatingStatus,
  } = useMutation({
    mutationFn: service,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [key],
      });
      toast.success(` ${resourse} update successfully`);
    },
    onError: () => {
      toast.error(`cannot edit ${resourse}`);
    },
  });
  return { mutate, isErrorUpdatihg, data, updatingStatus };
}
