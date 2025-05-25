import { useEffect, useState } from "react";
import SearchableSelect from "../SearchableSelect";
import { useInfiniteJobRoles } from "../../features/mangement/job-roles/useInfiniteJobRoles";
import { useWatch } from "react-hook-form";

export default function Select({ control, name }) {
  const [searchQueryJobRole, setSearchQueryJobRole] = useState(null);
  function onSearchCity(value) {
    setSearchQueryJobRole(value);
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteJobRoles(searchQueryJobRole);

  const allItems = data?.pages.flatMap((page) => page.data) || [];

  return (
    <SearchableSelect
      renderValue="name"
      chooseValue="id"
      items={allItems || []}
      control={control}
      name={name}
      onSearch={onSearchCity}
      hasNextPage={hasNextPage}
      isFetchingNext={isFetchingNextPage}
      fetchNext={fetchNextPage}
    />
  );
}
export function SelectJobRole({ control, name }) {
  const [searchQueryJobRole, setSearchQueryJobRole] = useState(null);
  function onSearchCity(value) {
    setSearchQueryJobRole(value);
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteJobRoles(searchQueryJobRole);
  const allItems = data?.pages.flatMap((page) => page.data) || [];

  return (
    <SearchableSelect
      renderValue="name"
      chooseValue="id"
      items={allItems || []}
      control={control}
      name={name}
      onSearch={onSearchCity}
      hasNextPage={hasNextPage}
      isFetchingNext={isFetchingNextPage}
      fetchNext={fetchNextPage}
    />
  );
}
