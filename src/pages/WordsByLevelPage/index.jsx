import React from "react";
import s from "../WordsByLevelPage/index.module.css";
import WordsByLevelContainer from "../../components/WordsByLevelContainer";

export default function WordsByLevelPage() {


  return (
    <div className={s.wrapper}>
      <WordsByLevelContainer progressStyle={true} />
    </div>
  );
}
