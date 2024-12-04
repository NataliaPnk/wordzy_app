import React from "react";
import s from "../WordByLevelItem/index.module.css";

export default function WordByLevelItem({
  id,
  word_eng = "",
  word_de = "",
  lang,
  status,
  level = "",
}) {
  return (
    <div className={s.item}>
      <p>{word_eng}</p>
      <span>{status}</span>
    </div>
  );
}
