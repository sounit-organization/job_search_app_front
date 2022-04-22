import { FavoriteActionTypes, FavoriteState } from "./types";

const initialState: FavoriteState = {
  favoriteJobs: [
    {
      id: "j1",
      companyName: "companyName",
      city: "city",
      description: "description",
      payment: 1.0,
      skills: [],
      title: "title",
    },
  ],
};

export const favoriteReducer = (
  state = initialState,
  action: FavoriteActionTypes
) => {
  return state;
};
