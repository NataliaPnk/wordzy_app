import React from "react";
import { Link } from "react-router-dom";
import s from "../LevelCard/index.module.css";
import { motion } from "motion/react";

export default function LevelCard({ level_name }) {
  return (
    <motion.div
      className={s.card}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 1.0 }}
    >
      <Link to={`/words/${level_name}`}>
        <div>{level_name.toUpperCase()}</div>
      </Link>
    </motion.div>
  );
}
