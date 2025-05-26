import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import CategoryRow from "./CategoryRow";
import { CATEGORIES_HEADS } from "../../data/gridKeys";

function CategoriesTable() {
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
        headers={CATEGORIES_HEADS}
        data={data}
        renderRow={renderRow(CategoryRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default CategoriesTable;
