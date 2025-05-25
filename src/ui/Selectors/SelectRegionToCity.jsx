import { useState } from "react";
import SearchableSelect from "../SearchableSelect";
import { useInfiniteReigions } from "../../features/Location/Region/useInfiniteRegions";

export default function SelectRegionToCity({ control, name }) {
  const [searchQueryRegion, setSearchQueryRegion] = useState(null);
  function onSearchCity(value) {
    setSearchQueryRegion(value);
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteReigions(searchQueryRegion);
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
