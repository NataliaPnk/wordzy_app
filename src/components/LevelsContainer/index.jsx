import React from "react";
import s from "../LevelsContainer/index.module.css";
import { useSelector } from "react-redux";
import LevelCard from "../LevelCard";

export default function LevelsContainer() {
  const levelsState = useSelector((store) => store.levels);

  const uniqueLevels = [...new Set(levelsState.map((el) => el.level))];

  return (
    <div className={s.container}>
      {uniqueLevels.map((el) => (
        <LevelCard key={el} level_name={el} />
      ))}
    </div>
  );
}
