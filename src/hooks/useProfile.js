import { useQuery } from "@tanstack/react-query";
import useQueryParams from "./useQueryParams";
import { useSearchParams } from "react-router-dom";
import { profileServices } from "../data/api";

export function useProfile({
  key,
  id,
  enabled = true,
  service,
  cacheTime = 60 * 1000,
  params: manualParams = null,
}) {
  const { data, isFetching, isError, isLoading } = useQuery({
    queryKey: [key],
    queryFn: () => profileServices.getAll(),
    enabled,
    cacheTime,
  });

  return { data, isError, isFetching, isLoading };
}
