import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import { DISCOUNT_COUPONS_HEADS } from "../../data/gridKeys";
import DiscountsAndCouponsRow from "./DiscountsAndCouponsRow";

function DiscountsAndCouponsTable() {
  return (
    <>
      <GenericTable
        headers={DISCOUNT_COUPONS_HEADS}
        data={[]}
        renderRow={renderRow(DiscountsAndCouponsRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default DiscountsAndCouponsTable;
