import { useTranslation } from "react-i18next";
import { Section } from "../../ui/Container";
import Tabs from "../../ui/Tabs";
import Row from "../../ui/Row";
import { Outlet } from "react-router-dom";
import { vendorTabs } from "../../data/appData";

function VendorDetails() {
  const { t, i18n: { language } = {} } = useTranslation();

  return (
    <Section title={t("routes.vendorDetails")}>
      <Tabs tabs={vendorTabs} />

      <Row style={TableLayoutStyles}>
        <Outlet />
      </Row>
    </Section>
  );
}
export default VendorDetails;

export const TableLayoutStyles = {
  border: "1px solid var(--color-grey-300)",
  borderRadius: "10px",
  padding: "18px 18px",
  marginTop: "20px",
};
