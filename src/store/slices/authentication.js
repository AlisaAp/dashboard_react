import { createSlice } from "@reduxjs/toolkit";

const authentication = createSlice({
  initialState: {
    currentUser: 2,
    isLoggined: true,
    isAdmin: true,
  },
  name: "authentication",
  reducers: {
    logIn: (state, { payload }) => {
      state.isLoggined = true;
      state.currentUser = payload;
    },
    logOut: (state) => {
      state.isLoggined = false;
      state.currentUser = null;
    },
  },
});
export const { logIn, logOut } = authentication.actions;

export default authentication.reducer;
