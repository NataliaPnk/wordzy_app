import React from "react";
import { Link } from "react-router-dom";
import s from "../Header/index.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <h2 style={{ color: "#FF6E6E" }}>
        W<span style={{ color: "#FFC45C" }}>O</span>RD
        <span style={{ color: "#FFC45C" }}>Z</span>Y
      </h2>

      <nav>
        <Link to="/">My Words</Link>
        <Link to="/levels">Learn</Link>
        <Link to="/sign_up">Sign Up</Link>
      </nav>
    </header>
  );
}
