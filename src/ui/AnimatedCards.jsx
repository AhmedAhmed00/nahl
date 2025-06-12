// AnimatedBlockList.js
import { motion, AnimatePresence, wrap } from "framer-motion";
import CardComponent from "./NavigateCard";
import Row from "./Row";
const cardVariants = {
  initial: (index, total) => {
    const middle = Math.floor(total / 2);
    const direction = index < middle ? -1 : 1;

    return {
      opacity: 0,
      x: direction * 100,
      scale: 0.8,
    };
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "", stiffness: 70, damping: 14 },
  },
  exit: (index, total) => {
    const middle = Math.floor(total / 2);
    const direction = index < middle ? -1 : 1;

    return {
      opacity: 0,
      x: direction * 100,
      scale: 0.8,
      transition: { duration: 0.3 },
    };
  },
};

export default function AnimatedBlockList({ blocks = {} }) {
  return (
    <AnimatePresence mode="wait">
      <Row
        key={blocks.map((b) => b.id).join("-")}
        type="horizontal"
        justify="center"
        wrap="wrap"
        $gap="4rem"
      >
        {blocks.map((block, index) => (
          <motion.div>
            <CardComponent title={block.title} to={block.to} />
          </motion.div>
        ))}
      </Row>
    </AnimatePresence>
  );
}
