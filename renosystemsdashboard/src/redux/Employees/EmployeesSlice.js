import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shownEmployees: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    filter: (state, action) => {},

    addEmployees: (state, action) => {
      state.shownEmployees = [...state.shownEmployees, ...action.payload];
    },
  },
});

export default employeeSlice.reducer;
export const { filter, addEmployees } = employeeSlice.actions;
