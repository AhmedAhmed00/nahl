import { useQuery } from "@tanstack/react-query";
import useQueryParams from "../../../hooks/useQueryParams";
import { employeeServices } from "../../../services/apiEmployees";

export default function useEmployees() {
  const params = useQueryParams();
  const {
    data: employees,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["employees", params],
    queryFn: () => employeeServices.getAll(params),
  });

  return { employees, isError, isLoading };
}
