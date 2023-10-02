import { createSlice } from "@reduxjs/toolkit";

const sidebar = createSlice({
  initialState: {
    expanded: true,
    activeKey: 1,
  },
  name: "sidebar",
  reducers: {
    setExpanded: (state) => {
      state.expanded = !state.expanded;
    },
    setActiveKey: (state, { payload }) => {
      state.activeKey = payload;
    },
  },
});
export const { setExpanded, setActiveKey } = sidebar.actions;

export default sidebar.reducer;
