import { BsPerson } from "react-icons/bs";
import { Container } from "../ui/Container";
import NavigateCard from "../ui/NavigateCard";
import Row from "../ui/Row";
import { StyledTopHeader } from "../ui/TopHeader";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";
import AnimatedBlockList from "../ui/AnimatedCards";
import { useParams } from "react-router-dom";
import Profile from "../ui/Profile";
import { useFetch } from "../hooks/useFetch";
import { gradeServices } from "../data/api";
import Empty from "../ui/Empty";

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    scale: 0.5,
    y: -50 * (index + 1), // staggered vertical offset
  }),
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: index * 0.1, // stagger delay
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.5,
    y: 50,
    transition: { duration: 0.3 },
  },
};

export default function StageGrades() {
  const { stage } = useParams();
  const { data: { results: grades } = {} } = useFetch({
    service: gradeServices.getAll,
    params: {
      stage: stage,
    },
  });
  console.log(grades);
  const blocks = grades?.map((grade) => ({
    id: grade.id,
    title: grade.name,
    to: `/stage/${stage}/grade/${grade.id}`,
  }));

  if (!blocks?.length) return <Empty></Empty>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Container>
        <StyledTopHeader>
          <Profile size={70} />
          <div>
            <Heading color="light" as={"h1"}>
              منصة نهل أكاديمي
            </Heading>
          </div>
          <div /> {/* Empty right column to balance the layout */}
        </StyledTopHeader>

        <Row
          style={{
            padding: "20px 70px",
          }}
          $margin="70px 0px"
          type="horizontal"
          justify="space-between"
        >
          <AnimatedBlockList key={blocks.length} blocks={blocks} />
        </Row>
      </Container>
    </motion.div>
  );
}
