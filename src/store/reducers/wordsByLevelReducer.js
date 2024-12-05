import { wordsData } from "../../data/wordsData";

const CHANGE_LANG = "CHANGE_LANG";

export const changeLangAction = (word_id) => ({
  type: CHANGE_LANG,
  payload: word_id,
});

export const wordsByLevelReducer = (state = wordsData, action) => {
  if (action.type === CHANGE_LANG) {
    return state.map((el) =>
      el.id === action.payload
        ? { ...el, lang: el.lang === "eng" ? "de" : "eng" }
        : el
    );
  }
  return state;
};
