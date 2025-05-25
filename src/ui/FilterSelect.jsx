import { useForm } from "react-hook-form";
import styled from "styled-components";
import useFilters from "../hooks/useFilter";
import { useEffect } from "react";
import Select from "./Select";

const Filter = styled(Select).attrs((props) => ({
  placeholder: props.theme.direction === "rtl" ? "تصفية" : "Filter",
}))``;

export function FilterSelect({ filterKey, items, renderValue }) {
  const { watch, control } = useForm();
  const { handleFilter, searchParams, setSearchParams } = useFilters();

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
      if (value[filterKey] === "all") {
        searchParams.delete(filterKey);
        setSearchParams(searchParams);
      } else {
        console.log(filterKey);
        handleFilter({ [filterKey]: value[filterKey] });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, handleFilter, searchParams, setSearchParams, filterKey]);

  return (
    <form
      style={{
        height: "100px;",
      }}
    >
      <Filter
        control={control}
        name={String(filterKey)}
        chooseValue="name"
        renderValue={renderValue || "name"}
        items={items}
      />
    </form>
  );
}
