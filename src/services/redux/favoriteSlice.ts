import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  favoriteJobs: [
    {
      _id: "j1",
      companyName: "companyName",
      city: "city",
      description: "description",
      payment: 1.0,
      skills: [],
      title: "title",
    },
  ],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
});

// export const {} = favoriteSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFavorites = (state: RootState) =>
  state.favorites.favoriteJobs;

const favoritesReducer = favoriteSlice.reducer;
export default favoritesReducer;
