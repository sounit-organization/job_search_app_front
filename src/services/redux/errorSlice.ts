import { Action, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  errorMessage: string | null;
};

type SetErrorAction = Action & {
  payload: string | null;
};

const initialState: InitialState = {
  errorMessage: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action: SetErrorAction) => {
      console.log("setError action", action);

      state.errorMessage = action.payload;
    },
  },
});

export const errorActions = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
