import { useState } from "react";
import GenericTable from "../../ui/table/GenericTable";
import AdRow from "./AdRow";
import { useFetch } from "../../hooks/useFetch";
import { adsServices } from "../../services/apiAds";

export const CLIENTS_HEADS = ["Title", "Status", "Created At", "Actions"];

export const renderAdRow = (ad, index) => <AdRow ad={ad} key={index} />;

function AdsTable() {
  const {
    data: { results, count } = {},

    isLoading,
  } = useFetch({
    service: adsServices.getAll,
    key: "ads",
  });

  return (
    <>
      <GenericTable
        headers={CLIENTS_HEADS}
        data={results}
        renderRow={renderAdRow}
        pageSize={20}
        resaultsCount={count}
        isLoading={isLoading}
      />
    </>
  );
}

export default AdsTable;
