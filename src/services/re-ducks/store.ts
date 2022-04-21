import { combineReducers, createStore } from "redux";
import { favoriteReducer } from "./favorite/reducer";

const rootReducer = combineReducers({
  favorite: favoriteReducer,
});

export function configureStore() {
  return createStore(rootReducer);
}

export type RootState = ReturnType<typeof rootReducer>;
