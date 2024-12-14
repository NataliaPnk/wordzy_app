import React from "react";
import { RxCross2 } from "react-icons/rx";
import s from "../WordItem/index.module.css";
import { useDispatch } from "react-redux";
import { deleteWordAction } from "../../store/reducers/wordsReducer";
import { motion } from "motion/react";

export default function WordItem({
  id,
  word_eng = "",
  word_de = "",
  level = "",
}) {
  const levelBackgroundColors = {
    beginner: "#85EAF6",
    intermediate: "#6FCF97",
    advanced: "#FFC45C",
  };

  const levelColors = {
    beginner: "#333333",
    intermediate: "#F2F2F2",
    advanced: "333333",
  };

  const levelStyle = {
    color: levelColors[level],
    backgroundColor: levelBackgroundColors[level],
    boxShadow: "rgba(153, 167, 228, 0.56) 0px 12px 70px 4px",
    borderRadius: "0.5rem",
    padding: "0.2rem 0.4rem",
    fontSize: "1rem",
  };

  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.0 }}
      className={s.item}
    >
      <div>
        <p>
          {" "}
          <span role="img" aria-label="de">
            🇺🇸
          </span>
          {word_eng.toUpperCase()}
        </p>
        <p>
          {" "}
          <span role="img" aria-label="de">
            🇩🇪
          </span>
          {word_de.toUpperCase()}
        </p>
      </div>
      <div></div>
      {level && typeof level === "string" && level.trim() && (
        <p style={levelStyle}>{level}</p>
      )}
      <RxCross2 onClick={() => dispatch(deleteWordAction(id))} />
    </motion.div>
  );
}
