import { useQuery } from "@tanstack/react-query";
import useQueryParams from "./useQueryParams";
import { useSearchParams } from "react-router-dom";

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
    queryFn: () => service(),
    enabled,
    cacheTime,
  });

  return { data, isError, isFetching, isLoading };
}
