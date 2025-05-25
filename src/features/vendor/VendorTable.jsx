import GenericTable from "../../ui/table/GenericTable";
import { useFetch } from "../../hooks/useFetch";
import VendorRow from "./VendorRow";
import { renderRow } from "../../ui/RenderRow";

export const VENDOR_HEADS = [
  "vendorName",
  "email",
  "phoneNumber",
  "numOfProdcuts",
  "totalSales",
  "date",
  "status",
  "actions",
];

function VendorTable() {
  const data = [
    {
      vendorName: "test",
      email: "devahmed@gmail.com",
      phoneNumber: "01115012004",
      numberOfProducts: "30",
      totalSalse: 90,
      date: new Date().getFullYear(),
      status: "active",
    },
  ];
  return (
    <>
      <GenericTable
        headers={VENDOR_HEADS}
        data={data}
        renderRow={renderRow(VendorRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default VendorTable;
