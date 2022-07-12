import { Action, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isLogin: boolean;
  userId: string | null;
  token: string | null;
};

const initialState: InitialState = {
  isLogin: false,
  userId: null,
  token: null,
};

type signUpAction = Action & {
  payload: { token: string; userId: string };
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: signUpAction) => {
      const { token, userId } = action.payload;
      state.isLogin = true;
      state.token = token;
      state.userId = userId;
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
