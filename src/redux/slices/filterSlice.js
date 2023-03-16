import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filter",
  initialState: {
    byText: "",
    byStatus: "all",
    byPriority: "all",
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.byText = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.byStatus = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.byPriority = action.payload;
    },
  },
});
