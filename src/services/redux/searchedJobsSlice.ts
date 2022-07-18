import { Action, createSlice } from "@reduxjs/toolkit";
import { IJob } from "../../domain/Job";

type InitialState = {
  searchedJobs: IJob[];
  count: number;
};

type SetSearchedJobsAction = Action & {
  payload: { searchedJobs: IJob[]; count: number };
};

const initialState: InitialState = {
  searchedJobs: [],
  count: 0,
};

const searchedJobsSlice = createSlice({
  name: "searchedJobs",
  initialState,
  reducers: {
    setSearchedJobs: (state, action: SetSearchedJobsAction) => {
      const { searchedJobs, count } = action.payload;

      state.searchedJobs = searchedJobs;
      state.count = count;
    },
  },
});

export const searchedJobsActions = searchedJobsSlice.actions;
export const searchedJobsReducer = searchedJobsSlice.reducer;
