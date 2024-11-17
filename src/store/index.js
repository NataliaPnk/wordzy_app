import { createStore, combineReducers } from "redux";
import { wordsReducer } from "./reducers/wordsReducer";

const rootReducer = combineReducers({
  words: wordsReducer,
});

export const store = createStore(rootReducer);
