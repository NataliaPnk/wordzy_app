import React from "react";
import WordsContainer from "../../components/WordsContainer";
import AddWordForm from "../../components/AddWordForm";

export default function MyWordsPage() {
  return (
    <div>
      <AddWordForm />
      <WordsContainer />
    </div>
  );
}
