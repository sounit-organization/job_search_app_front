import { Action, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isLogin: boolean;
  token: string | null;
};

const initialState: InitialState = {
  isLogin: false,
  token: null,
};

type signUpAction = Action & {
  payload: string;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: signUpAction) => {
      const token = action.payload;
      state.isLogin = true;
      state.token = token;
    },
  },
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
