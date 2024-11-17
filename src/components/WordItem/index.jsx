import React from "react";
import { IoMdCheckbox } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import s from "../WordItem/index.module.css";
import { useDispatch } from "react-redux";
import {
  changeStatusAction,
  deleteWordAction,
} from "../../store/reducers/wordsReducer";
import { motion } from "motion/react";

export default function WordItem({
  id,
  word_eng = "",
  word_de = "",
  lang,
  status,
  level = "",
}) {
  const progress = status === "false" ? "new" : "learned";

  const checkStyle = {
    color: status === "false" ? "#888888" : "#FFC45C",
    width: "2rem",
    height: "2rem",
  };

  const statusStyle = {
    color: status === "false" ? "#2CAFE1" : "#333333",
    backgroundColor: status === "false" ? "white" : "#FF6E6E",
    boxShadow: "rgba(153, 167, 228, 0.56) 0px 12px 70px 4px",
    padding: "0.2rem 0.4rem",
    fontSize: "1rem",
  };

  const levelStyle = {
    color: level === "beginner" ? "#333333" : "#F2F2F2",
    backgroundColor: level === "beginner" ? "#85EAF6" : "#6FCF97",
    boxShadow: "rgba(153, 167, 228, 0.56) 0px 12px 70px 4px",
    borderRadius: "0.5rem",
    padding: "0.2rem 0.4rem",
    fontSize: "1rem",
  };

  const dispatch = useDispatch();

  function handleDelete(e) {
    e.stopPropagation();

    dispatch(deleteWordAction(id));
  }

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
        <span style={statusStyle}>{progress}</span>
        <IoMdCheckbox
          style={checkStyle}
          onClick={() => dispatch(changeStatusAction(id))}
        />
      </div>
      <p style={levelStyle}>{level}</p>
      <RxCross2 onClick={handleDelete} />
    </motion.div>
  );
}
