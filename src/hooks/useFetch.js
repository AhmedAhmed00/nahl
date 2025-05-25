import { useQuery } from "@tanstack/react-query";
import useQueryParams from "./useQueryParams";
import { useSearchParams } from "react-router-dom";

export function useFetch({
  key,
  id,
  enabled = true,
  service,
  cacheTime = 60 * 1000,
  params: manualParams = null,
}) {
  const [searchParams] = useSearchParams();

  // Default params to an empty object or use the provided manualParams
  const paramsUrl = Object.fromEntries(searchParams.entries());
  const params = {
    ...manualParams,
    page: searchParams.get("page") || 1,
    search: searchParams.get("search") || "",
    ...paramsUrl,
  };

  const { data, isFetching, isError, isLoading } = useQuery({
    queryKey: [key, params],

    queryFn: () => (id ? service(id, params) : service(params)),
    enabled,
    cacheTime,
  });

  return { data, isError, isFetching, isLoading };
}
