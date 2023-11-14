import { createSlice } from "@reduxjs/toolkit";

const dashboard = createSlice({
  initialState: {
    activeCourse: "1",
  },
  name: "dashboard",
  reducers: {
    setActiveCourse: (state, { payload }) => {
      state.activeCourse = payload;
    },
  },
});
export const { setActiveCourse } = dashboard.actions;

export default dashboard.reducer;
