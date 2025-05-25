import { useQuery } from "@tanstack/react-query";
import useQueryParams from "../../../hooks/useQueryParams";
import { branchesServices } from "../../../data/api";

export default function useBranches() {
  const params = useQueryParams();
  const {
    data: branches,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["branches", params],
    queryFn: () => branchesServices.getAll(params),
  });

  return { branches, isError, isLoading };
}
