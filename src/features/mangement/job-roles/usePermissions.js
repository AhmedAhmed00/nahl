import { useQuery } from "@tanstack/react-query";

import useQueryParams from "../../../hooks/useQueryParams";
import { permissionsService } from "../../../data/api";

export default function usePermissions() {
  const params = useQueryParams();

  const {
    data: permissions,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["premissions", params],
    queryFn: () => permissionsService.getAll(params),
  });

  return { permissions, isError, isLoading };
}
