import AnalysisCard from "../ui/analysis/AnalysisCard";
import Row from "../ui/Row";
import TasksCahrt from "../features/dashboard/TasksChart";
import CasesChart from "../features/dashboard/CasesChart";
import { Container } from "../ui/Container";

const STATIC_DATA = [
  {
    title: "عدد القضايا المفتوحة",
    number: 263,
  },
  {
    title: "عدد القضايا المغلقة",
    number: 56,
  },
  {
    title: "عدد الجلسات القادمة ",
    number: 97,
  },
  {
    title: "عدد المهام المعلقة",
    number: 20,
  },
  {
    title: "عدد الفواتير المستحقة  ",
    number: 56,
  },
  {
    title: "الإيرادات الشهرية",
    number: 4,
  },
];

function Dashboard() {
  return (
    <Container>
      <Row gap="10px" type="horizontal">
        {STATIC_DATA.map(({ title, number }, i) => (
          <AnalysisCard key={i} title={title} number={number} />
        ))}
      </Row>
      <Row margin={"0px 0px"} gap="25px" type="horizontal"></Row>
    </Container>
  );
}

export default Dashboard;
