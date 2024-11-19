import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import WordsContainer from "../../components/WordsContainer";
import s from "../WordsByLevelPage/index.module.css";

export default function WordsByLevelPage() {
  const { level } = useParams();

  const wordsByLevelState = useSelector((store) => store.wordsByLevel);

  const filteredWords = wordsByLevelState.filter(
    (word) => word.level === level
  );

  return (
    <div className={s.wrapper}>
      <WordsContainer words={filteredWords} />
    </div>
  );
}
