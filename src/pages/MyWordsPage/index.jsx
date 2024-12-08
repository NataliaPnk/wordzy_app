import React from "react";
import WordsContainer from "../../components/WordsContainer";
import AddWordForm from "../../components/AddWordForm";
import { useSelector } from "react-redux";

export default function MyWordsPage() {
  const wordsState = useSelector((store) => store.words);

  return (
    <div>
      <AddWordForm />
      <WordsContainer words={wordsState} progressStyle={true} />
    </div>
  );
}
