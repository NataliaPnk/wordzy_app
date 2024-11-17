import React from "react";
import { useSelector } from "react-redux";
import WordItem from "../WordItem";
import s from "../WordsContainer/index.module.css";

export default function WordsContainer() {
  const wordsState = useSelector((store) => store.words);

  return (
    <div className={s.container}>
      {wordsState.map((el) => (
        <WordItem key={el.id} {...el} />
      ))}
    </div>
  );
}
