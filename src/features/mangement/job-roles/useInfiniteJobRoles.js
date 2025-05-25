import { useInfiniteQuery } from "@tanstack/react-query";
import { jobRolesServices } from "../../../services/apiJobRoles";

export const useInfiniteJobRoles = (search) => {
  return useInfiniteQuery({
    queryKey: ["infinite-job-roles", search],

    queryFn: ({ pageParam = 1 }) =>
      jobRolesServices.getInfinite({
        page: pageParam,
        search: search,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    refetchOnWindowFocus: false,
  });
};
