import { wordsData } from "../../data/wordsData";

const DELETE_WORD = "DELETE_WORD";
const ADD_WORD = "ADD_WORD";

export const deleteWordAction = (word_id) => ({
  type: DELETE_WORD,
  payload: word_id,
});

export const addWordAction = (new_word) => ({
  type: ADD_WORD,
  payload: new_word,
});

export const wordsReducer = (
  state = wordsData.slice().sort(() => Math.random() - 0.5),
  action
) => {
  if (action.type === DELETE_WORD) {
    return state.filter((el) => el.id !== action.payload);
  }
  if (action.type === ADD_WORD) {
    return [action.payload, ...state];
  }
  return state;
};
