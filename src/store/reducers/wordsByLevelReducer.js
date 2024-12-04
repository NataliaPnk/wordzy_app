import { wordsData } from "../../data/wordsData";

export const wordsByLevelReducer = (state = wordsData, action) => {
  if (action.type) {
    return state;
  }
};
