import React from "react";
import WordsContainer from "../../components/WordsContainer";
import AddWordForm from "../../components/AddWordForm";
import { motion } from "motion/react";

export default function MyWordsPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={{ opacity: 1 }}
      variants={containerVariants}
    >
      <AddWordForm />
      <WordsContainer />
    </motion.div>
  );
}
