import React from "react";
import { IoMdCheckbox } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";

export default function ProgressStatus({ action, id }) {
  const dispatch = useDispatch();
  const wordByLevel = useSelector((state) =>
    state.wordsByLevel.find((item) => item.id === id)
  );

  const progress = wordByLevel.status === "false" ? "new" : "learned";

  const checkStyle = {
    color: wordByLevel.status === "false" ? "#888888" : "#FFC45C",
    width: "2rem",
    height: "2rem",
    cursor: 'pointer'
  };

  const statusStyle = {
    color: wordByLevel.status === "false" ? "#2CAFE1" : "#333333",
    backgroundColor: wordByLevel.status === "false" ? "white" : "#FF6E6E",
    boxShadow: "rgba(153, 167, 228, 0.56) 0px 12px 70px 4px",
    padding: "0.2rem 0.8rem",
    fontSize: "1rem",
    borderRadius: '1rem',
  };

  const handleToggle = () => {
    dispatch(action(id));
  };

  return (
    <motion.div
      style={{ display: "flex", alignContent: "center", gap: "0.2rem" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.0 }}
    >
      <span style={statusStyle}>{progress}</span>
      <IoMdCheckbox
        style={checkStyle}
        onClick={handleToggle}
        aria-label="checkbox"
      />
    </motion.div>
  );
}
