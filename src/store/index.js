import { createStore, combineReducers } from "redux";
import { wordsReducer } from "./reducers/wordsReducer";
import { levelsReducer } from "./reducers/levelsReducer";
import { wordsByLevelReducer } from "./reducers/wordsByLevelReducer";

const rootReducer = combineReducers({
  words: wordsReducer,
  levels: levelsReducer,
  wordsByLevel: wordsByLevelReducer,
});

export const store = createStore(rootReducer);
