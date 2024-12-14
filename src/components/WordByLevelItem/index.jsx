import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLangAction,
  changeStatusAction,
} from "../../store/reducers/wordsByLevelReducer";
import s from "../WordByLevelItem/index.module.css";
import ProgressStatus from "../ProgressStatus";
import { motion } from "motion/react";

export default function WordByLevelItem({ id }) {
  const dispatch = useDispatch();

  const word = useSelector((store) =>
    store.wordsByLevel.find((el) => el.id === id)
  );

  const displayWord = word.lang === "eng" ? word.word_eng : word.word_de;

  const handleClick = () => {
    dispatch(changeLangAction(id));
  };

  return (
    <motion.div
      onClick={handleClick}
      className={s.item}
      initial={{ transform: "translateX(-100px)" }}
      animate={{ transform: "translateX(0px)" }}
      transition={{ type: "spring" }}
    >
      <p>{displayWord}</p>
      <ProgressStatus action={changeStatusAction} id={id} />
    </motion.div>
  );
}
