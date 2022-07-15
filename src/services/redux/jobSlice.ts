import { Action, createSlice } from "@reduxjs/toolkit";
import { IJob } from "../../domain/Job";

type InitialState = {
  jobs: IJob[];
  count: number;
};

type SetJobsAction = Action & {
  payload: { jobs: IJob[]; count: number };
};

const initialState: InitialState = {
  jobs: [],
  count: 0,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobs: (state, action: SetJobsAction) => {
      const { jobs, count } = action.payload;
      state.jobs = jobs;
      state.count = count;
    },
  },
});

export const jobActions = jobSlice.actions;
export const jobReducer = jobSlice.reducer;
