import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import ProductRow from "./ProductRow";
import { PRODUCTS_HEADS } from "../../data/gridKeys";

function ProductsTable() {
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
        headers={PRODUCTS_HEADS}
        data={data}
        renderRow={renderRow(ProductRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default ProductsTable;
