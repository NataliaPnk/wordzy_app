import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLangAction } from "../../store/reducers/wordsByLevelReducer";
import s from "../WordByLevelItem/index.module.css";

export default function WordByLevelItem({ id }) {
  const dispatch = useDispatch();

  const word = useSelector((state) =>
    state.wordsByLevel.find((el) => el.id === id)
  );

  if (!word) return null;

  const displayWord = word.lang === "eng" ? word.word_eng : word.word_de;

  const handleClick = () => {
    dispatch(changeLangAction(id));
  };

  return (
    <div className={s.item} onClick={handleClick}>
      <p>{displayWord}</p>
    </div>
  );
}
