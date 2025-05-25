import { useState } from "react";
import SearchableSelect from "../SearchableSelect";
import { useInfiniteReigions } from "../../features/Location/Region/useInfiniteRegions";
import { useInfinteSubSpec } from "../../features/Location/Region/useInfinteSubSpec";

export default function SelectSubSpecToSpec({ control, name }) {
  const [searchQuerySubSpec, setSearchQuerySubSpec] = useState(null);
  function onSearchSubspec(value) {
    setSearchQuerySubSpec(value);
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfinteSubSpec(searchQuerySubSpec);

  const allItems = data?.pages.flatMap((page) => page.data) || [];

  console.log(allItems);

  return (
    <SearchableSelect
      renderValue="name"
      chooseValue="id"
      items={allItems || []}
      control={control}
      name={name}
      onSearch={onSearchSubspec}
      hasNextPage={hasNextPage}
      isFetchingNext={isFetchingNextPage}
      fetchNext={fetchNextPage}
    />
  );
}
