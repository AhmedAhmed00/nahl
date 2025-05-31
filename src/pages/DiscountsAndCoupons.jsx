import DiscountsAndCouponsTable from "../features/discounts-and-coupons/DiscountsAndCouponsTable";
import { Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";

function DiscountsAndCoupons() {
  const { t } = useTranslation();
  return (
    // <Section title={t("routes.discountsAndCoupons")}>
    <>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          addPath={"/discounts-and-coupons/discount-and-coupon-form"}
          addTitle={t("addButtons.addCoupon")}
        />
      </OperationsContainer>
      <Row>
        <DiscountsAndCouponsTable />
      </Row>
    </>
  );
}
export default DiscountsAndCoupons;
