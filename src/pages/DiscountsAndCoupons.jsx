import DiscountsAndCouponsTable from "../features/discounts-and-coupons/DiscountsAndCouponsTable";
import { Section } from "../ui/Container";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";

function DiscountsAndCoupons() {
  const { t } = useTranslation();
  return (
    <Section title={t("routes.discountsAndCoupons")}>
      <Row>
        <DiscountsAndCouponsTable />
      </Row>
    </Section>
  );
}
export default DiscountsAndCoupons;
