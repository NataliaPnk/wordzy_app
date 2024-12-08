import React, { useEffect, useState } from "react";
import WordByLevelItem from "../WordByLevelItem";
import { useParams } from "react-router-dom";
import { wordsData } from "../../data/wordsData";
import s from "./index.module.css";

export default function WordsByLevelContainer() {
  const [wordsByLevel, setWordsByLevel] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { level_name } = useParams();

  useEffect(() => {
    const filteredWords = wordsData.filter((el) => el.level === level_name);
    setWordsByLevel(filteredWords);
    setCurrentIndex(0); // Reset index when level changes
  }, [level_name]);

  const goLeft = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? wordsByLevel.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const goRight = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === wordsByLevel.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  return (
    <div className={s.container}>
      <div
        className={s.cards}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {wordsByLevel.map((el, index) => (
          <WordByLevelItem key={index} {...el} />
        ))}
      </div>

      <div className={s.buttons}>
        <button onClick={goLeft}>previous</button>
        <button onClick={goRight}>next</button>
      </div>
    </div>
  );
}
