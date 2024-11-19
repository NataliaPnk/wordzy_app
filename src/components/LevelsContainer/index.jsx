import React from "react";
import LevelCard from "../LevelCard";
import s from "../LevelsContainer/index.module.css";

export default function LevelsContainer({ levels }) {
  if (!levels || levels.length === 0) return <div>No levels available</div>;

  return (
    <div className={s.container}>
      {levels &&
        levels.slice(0, 3).map((el) => <LevelCard key={el} level={el} />)}
    </div>
  );
}
