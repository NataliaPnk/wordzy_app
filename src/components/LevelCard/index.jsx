import React from "react";
import { Link } from "react-router-dom";
import s from "../LevelCard/index.module.css";

export default function LevelCard({ level }) {
  return (
    <Link to={`/levels/${level}`}>
      <div className={s.card}>{level}</div>
    </Link>
  );
}
