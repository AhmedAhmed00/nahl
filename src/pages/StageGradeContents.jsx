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

export default function StageContents() {
  const { stage, grade } = useParams();
  const blocks = [
    // {
    //   id: 1,
    //   title: "منهاج",
    //   to: `subjects`,
    // },
    {
      id: 2,
      title: "تفاعلية أسئلة",
      to: `interactive-questions`,
    },
    { id: 4, title: "فيديوهات", to: `videos` },
    {
      id: 5,
      title: "إمتحانات سابقة",
      to: `past-exams`,
    },
    { id: 6, title: "ملخصات", to: `summaries` },
  ];

  console.log(stage);
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
