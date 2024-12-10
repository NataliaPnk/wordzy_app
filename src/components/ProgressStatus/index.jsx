import React from "react";
import { IoMdCheckbox } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusAction as changeWordStatusAction } from "../../store/reducers/wordsReducer";
import { changeStatusAction as changeWordByLevelStatusAction } from "../../store/reducers/wordsByLevelReducer";
import { motion } from "motion/react";

export default function ProgressStatus({ id, type }) {
  const dispatch = useDispatch();

  const word = useSelector((state) =>
    state.wordsByLevel.find((el) => el.id === id)
  );

  const progress = word.status === "false" ? "new" : "learned";

  const checkStyle = {
    color: word.status === "false" ? "#888888" : "#FFC45C",
    width: "2rem",
    height: "2rem",
  };

  const statusStyle = {
    color: word.status === "false" ? "#2CAFE1" : "#333333",
    backgroundColor: word.status === "false" ? "white" : "#FF6E6E",
    boxShadow: "rgba(153, 167, 228, 0.56) 0px 12px 70px 4px",
    padding: "0.2rem 0.4rem",
    fontSize: "1rem",
  };

  const handleClick = () => {
    if (type === "word") {
      dispatch(changeWordStatusAction(id));
    } else if (type === "wordByLevel") {
      dispatch(changeWordByLevelStatusAction(id));
    }
  };

  return (
    <motion.div
      style={{ display: "flex", alignContent: "center", gap: "0.2rem" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.0 }}
    >
      <span style={statusStyle}>{progress}</span>
      <IoMdCheckbox style={checkStyle} onClick={handleClick} />
    </motion.div>
  );
}
