import { wordsData } from "../../data/wordsData";

const CHANGE_LANG = "CHANGE_LANG";
const CHANGE_STATUS = "CHANGE_STATUS";

export const changeLangAction = (word_id) => ({
  type: CHANGE_LANG,
  payload: word_id,
});

export const changeStatusAction = (word_id) => ({
  type: CHANGE_STATUS,
  payload: word_id,
});

export const wordsByLevelReducer = (state = wordsData, action) => {
  if (action.type === CHANGE_LANG) {
    return state.map((el) =>
      el.id === action.payload
        ? { ...el, lang: el.lang === "eng" ? "de" : "eng" }
        : el
    );
  } else if (action.type === CHANGE_STATUS) {
    const target = state.find((el) => el.id === action.payload);
    target.status = target.status === "false" ? "true" : "false";
    return [...state];
  }
  return state;
};
