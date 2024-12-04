import React from "react";
import { Link } from "react-router-dom";

export default function LevelCard({ level_name }) {
  return (
    <Link to={`/words/${level_name}`}>
      <div>{level_name.toUpperCase()}</div>
    </Link>
  );
}
