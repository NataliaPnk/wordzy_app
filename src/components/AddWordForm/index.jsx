import React from "react";
import { useDispatch } from "react-redux";
import { addWordAction } from "../../store/reducers/wordsReducer";
import s from "../AddWordForm/index.module.css";
import { motion } from "motion/react";

export default function AddWordForm() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const { word_eng, word_de } = e.target;

    const newWord = {
      id: Date.now(),
      word_eng: word_eng.value,
      word_de: word_de.value,
      status: "false"
    };

    dispatch(addWordAction(newWord));

    e.target.reset();
  }

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit}>
        <motion.input
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1.0 }}
          type="text"
          name="word_eng"
          placeholder="ENG"
        ></motion.input>
        <motion.input
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1.0 }}
          type="text"
          name="word_de"
          placeholder="DE"
        ></motion.input>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit(e);
          }}
        >
          add your own word
          <span role="img" aria-label="emoji">
            😍
          </span>
        </motion.button>
      </form>
    </div>
  );
}
