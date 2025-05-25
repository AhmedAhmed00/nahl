import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { jobRolesServices } from "../../../services/apiJobRoles";

export default function useJobRoles() {
  const [searchParams] = useSearchParams();
  const params = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);
  const {
    data: jobRoles,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["job-roles", params],
    queryFn: () => jobRolesServices.getAll(params),
  });

  return { jobRoles, isError, isLoading };
}
