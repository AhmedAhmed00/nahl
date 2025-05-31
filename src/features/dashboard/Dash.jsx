import {
  MdAttachMoney,
  MdInventory2,
  MdShoppingCart,
  MdTrendingUp,
} from "react-icons/md";

import Row from "../../ui/Row";
import { useTranslation } from "react-i18next";
import { Section } from "../../ui/Container";
import AnalysisCard from "../../ui/analysis/AnalysisCard";
import LineChartCustomers from "./LineChart";
import BarChartSales from "./BarChartSales";

// Moved above so it's defined before usage
export const iconStyles = (type = "primary") => ({
  style: {
    backgroundColor:
      type === "primary" ? "var(--color-primary)" : "var(--color-secondary)",
    borderRadius: "10px",
    padding: "8px",
    color: "#fff",
  },
});

export default function Dash() {
  const { t } = useTranslation();

  return (
    <Section title={t("routes.dashboard")}>
      <Row type="horizontal" $gap="10px">
        <AnalysisCard
          percentage={78}
          title={t("dashboard.totalRevenue")}
          number="20"
          icon={<MdAttachMoney {...iconStyles()} size={46} />}
        />
        <AnalysisCard
          percentage={16}
          title={t("dashboard.totalOrders")}
          number="20"
          icon={<MdShoppingCart {...iconStyles()} size={46} />}
        />
        <AnalysisCard
          percentage={7}
          title={t("dashboard.availableProduts")}
          number="20"
          icon={<MdInventory2 {...iconStyles()} size={46} />}
        />
        <AnalysisCard
          percentage={56}
          title={t("dashboard.todaySales")}
          number="20"
          icon={<MdTrendingUp {...iconStyles()} size={46} />}
        />
      </Row>
      <Row $gap="20px" type="horizontal" $margin="25px 0 0 0">
        <LineChartCustomers />
        <BarChartSales />
      </Row>
    </Section>
  );
}
