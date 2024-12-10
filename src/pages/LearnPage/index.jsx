import React from "react";
import LevelsContainer from "../../components/LevelsContainer";
import { motion } from "motion/react";

export default function LearnPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={{ opacity: 1 }}
      variants={containerVariants}
    >
      <LevelsContainer />
    </motion.div>
  );
}
