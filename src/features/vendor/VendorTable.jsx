import GenericTable from "../../ui/table/GenericTable";
import VendorRow from "./VendorRow";
import { renderRow } from "../../ui/RenderRow";
import { VENDOR_HEADS } from "../../data/gridKeys";

function VendorTable() {
  const data = [
    {
      vendorName: "Click to test",
      email: "devahmed@gmail.com",
      phoneNumber: "01115012004",
      numberOfProducts: "30",
      totalSales: 90,
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
