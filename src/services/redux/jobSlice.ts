import { Action, createSlice } from "@reduxjs/toolkit";
import { IJob } from "../../domain/Job";

type InitialState = {
  jobs: IJob[];
};

type SetJobsAction = Action & {
  payload: IJob[];
};

const initialState: InitialState = {
  jobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobs: (state, action: SetJobsAction) => {
      state.jobs = action.payload;
    },
  },
});

export const jobActions = jobSlice.actions;
export const jobReducer = jobSlice.reducer;
