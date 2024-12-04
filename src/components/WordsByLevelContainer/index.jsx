import React, { useEffect, useState } from "react";
import WordByLevelItem from "../WordByLevelItem";
import { useParams } from "react-router-dom";
import { wordsData } from "../../data/wordsData";
import s from '../WordsByLevelContainer/index.module.css'

export default function WordsByLevelContainer() {
  const [wordsByLevel, setWordsByLevel] = useState([]);
  const { level_name } = useParams();

  useEffect(() => {
    const filteredWords = wordsData.filter((el) => el.level === level_name);
    setWordsByLevel(filteredWords);
  }, [level_name]);

  return (
    <div className={s.container}>
      {wordsByLevel.map((el) => (
        <WordByLevelItem key={el.id} {...el} />
      ))}
    </div>
  );
}
