import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { errorReducer } from "./errorSlice";
import favoritesReducer from "./favoriteSlice";
import { jobReducer } from "./jobSlice";
import { searchedJobsReducer } from "./searchedJobsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer,
    error: errorReducer,
    jobs: jobReducer,
    searchedJobs: searchedJobsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
