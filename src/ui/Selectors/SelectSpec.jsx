import { useState } from "react";
import { useWatch } from "react-hook-form";
import SearchableSelect from "../SearchableSelect";
import { useInfiniteCities } from "../../features/Location/City/useInfinteCities";
import { useSelectedSpec } from "../../context/SelectedSubSpecContext";
import { useInfiniteSpec } from "../../features/Location/City/useInfiniteSpec";

export default function SelectSpec({ control, name }) {
  const [searchQuerySpec, setSearchQuerySpec] = useState(null);
  const { selectedSpec, setSelectedSpec } = useSelectedSpec();

  const selectedValue = useWatch({ control, name });

  if (selectedValue) {
    setSelectedSpec(selectedValue);
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteSpec(searchQuerySpec);

  const allItems = data?.pages.flatMap((page) => page.data) || [];

  return (
    <SearchableSelect
      renderValue="name"
      chooseValue="id"
      items={allItems}
      control={control}
      name={name}
      onSearch={setSearchQuerySpec}
      hasNextPage={hasNextPage}
      isFetchingNext={isFetchingNextPage}
      fetchNext={fetchNextPage}
    />
  );
}
