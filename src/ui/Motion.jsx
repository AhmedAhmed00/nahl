import { motion } from "framer-motion";
import React, { Children } from "react";

export default function Motion({ Children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {Children}
    </motion.div>
  );
}
