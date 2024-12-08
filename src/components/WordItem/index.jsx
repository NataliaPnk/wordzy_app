import React from "react";
import { RxCross2 } from "react-icons/rx";
import s from "../WordItem/index.module.css";
import { useDispatch } from "react-redux";
import { deleteWordAction } from "../../store/reducers/wordsReducer";
import { motion } from "motion/react";
import ProgressStatus from "../ProgressStatus";

export default function WordItem({
  id,
  word_eng = "",
  word_de = "",
  level = "",
}) {
  const levelStyle = {
    color: level === "beginner" ? "#333333" : "#F2F2F2",
    backgroundColor: level === "beginner" ? "#85EAF6" : "#6FCF97",
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
      <div>
        <ProgressStatus type="word" id={id} />
      </div>
      {level && typeof level === "string" && level.trim() && (
        <p style={levelStyle}>{level}</p>
      )}
      <RxCross2 onClick={() => dispatch(deleteWordAction(id))} />
    </motion.div>
  );
}
