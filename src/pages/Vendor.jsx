import { useTranslation } from "react-i18next";
import VendorTable from "../features/vendor/VendorTable";
import { Section } from "../ui/Container";
import Row from "../ui/Row";
import { OperationsContainer } from "../ui/OperationsContainer";
import TableOperations from "../ui/table/TableOperations";
import AnalysisCard from "../ui/analysis/AnalysisCard";
import { MdAttachMoney, MdCategory, MdGroup } from "react-icons/md";
import { iconStyles } from "../features/dashboard/Dash";
import { TableLayout } from "../ui/TableLayout";

function Vendor() {
  const { t } = useTranslation();

  return (
    <Section title={t("routes.vendor")}>
      <Row $margin="0px 0px 25px 0" type="horizontal" $gap="10px">
        <AnalysisCard
          percentage={78}
          title={t("dataKeys.totalVendors")}
          number="213"
          icon={<MdGroup {...iconStyles("secondary")} size={46} />}
        />
        <AnalysisCard
          percentage={16}
          title={t("dataKeys.totalProducts")}
          number="4232"
          icon={<MdCategory {...iconStyles("secondary")} size={46} />}
        />
        <AnalysisCard
          percentage={7}
          title={t("dataKeys.totalIncome")}
          number="300,00 EGP"
          icon={<MdAttachMoney {...iconStyles("secondary")} size={46} />}
        />
      </Row>
      <TableLayout>
        <OperationsContainer>
          <div></div>
          <TableOperations
            addTitle={t("addButtons.addVendor")}
            addPath={"/vendor/vendor-form"}
          />
        </OperationsContainer>
        <Row>
          <VendorTable />
        </Row>
      </TableLayout>
    </Section>
  );
}

export default Vendor;
