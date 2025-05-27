import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import ProductRow from "./ProductRow";
import { PRODUCTS_HEADS } from "../../data/gridKeys";

function ProductsTable() {
  return (
    <>
      <GenericTable
        headers={PRODUCTS_HEADS}
        data={[]}
        renderRow={renderRow(ProductRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default ProductsTable;
