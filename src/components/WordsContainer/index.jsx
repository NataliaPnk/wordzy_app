import React from "react";
import WordItem from "../WordItem";
import s from "../WordsContainer/index.module.css";

export default function WordsContainer({ words }) {
  return (
    <div className={s.container}>
      {words.map((el) => (
        <WordItem key={el.id} {...el} />
      ))}
    </div>
  );
}
