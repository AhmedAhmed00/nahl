import { useState } from "react";
import { useWatch } from "react-hook-form";
import SearchableSelect from "../SearchableSelect";
import { useInfiniteCities } from "../../features/Location/City/useInfinteCities";
import { useSelectdCity } from "../../context/SelectedCityContext";

export default function SelectCity({ control, name }) {
  const [searchQueryCity, setSearchQueryCity] = useState(null);
  const { selectedCity, setSelectedCity } = useSelectdCity();

  const selectedValue = useWatch({ control, name });

  if (selectedValue) {
    setSelectedCity(selectedValue);
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteCities(searchQueryCity);

  const allItems = data?.pages.flatMap((page) => page.data) || [];

  return (
    <SearchableSelect
      renderValue="name"
      chooseValue="id"
      items={allItems}
      control={control}
      name={name}
      onSearch={setSearchQueryCity}
      hasNextPage={hasNextPage}
      isFetchingNext={isFetchingNextPage}
      fetchNext={fetchNextPage}
    />
  );
}
