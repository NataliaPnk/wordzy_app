import { wordsData } from "../../data/wordsData";

const DELETE_WORD = "DELETE_WORD";
const ADD_WORD = "ADD_WORD";
const CHANGE_STATUS = "CHANGE_STATUS";

export const deleteWordAction = (word_id) => ({
  type: DELETE_WORD,
  payload: word_id,
});

export const addWordAction = (new_word) => ({
  type: ADD_WORD,
  payload: new_word,
});

export const changeStatusAction = (word_id) => ({
  type: CHANGE_STATUS,
  payload: word_id,
});

export const wordsReducer = (state = wordsData, action) => {
  if (action.type === DELETE_WORD) {
    return state.filter((el) => el.id !== action.payload);
  }
  if (action.type === ADD_WORD) {
    return [...state, action.payload];
  } else if (action.type === CHANGE_STATUS) {
    const target = state.find((el) => el.id === action.payload);
    target.status = target.status === "false" ? "true" : "false";
    return [...state];
  }
  return state;
};
