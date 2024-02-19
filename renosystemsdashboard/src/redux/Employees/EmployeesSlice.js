import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shownEmployees: [], // filtered
  allEmployees: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    usernameFilter: (state, action) => {
      state.shownEmployees = [];
      for (let i = 0; i < state.allEmployees.length; i++) {
        if (state.allEmployees[i].userName === action.payload) {
          state.shownEmployees.push(state.allEmployees[i]);
        }
      }
    },

    statusFliter: (state, action) => {
      state.shownEmployees = [];
      for (let i = 0; i < state.allEmployees.length; i++) {
        if (
          state.allEmployees[i].status.toLowerCase() ===
          action.payload.toLowerCase()
        ) {
          state.shownEmployees.push(state.allEmployees[i]);
        }
      }
    },

    allFieldsFilter: (state, action) => {
      state.shownEmployees = [];
      let msg = "hello";
      msg.toLowerCase;
      for (let i = 0; i < state.allEmployees.length; i++) {
        if (
          state.allEmployees[i].status.toLowerCase() ===
            action.payload.toLowerCase() ||
          state.allEmployees[i].email.toLowerCase().includes(action.payload) ||
          state.allEmployees[i].firstName
            .toLowerCase()
            .includes(action.payload) ||
          state.allEmployees[i].lastName
            .toLowerCase()
            .includes(action.payload) ||
          state.allEmployees[i].userName
            .toLowerCase()
            .includes(action.payload) ||
          state.allEmployees[i].group.toLowerCase() ===
            action.payload.toLowerCase()
        ) {
          state.shownEmployees.push(state.allEmployees[i]);
        }
      }
    },
    addEmployees: (state, action) => {
      state.allEmployees = [...state.allEmployees, ...action.payload];
      state.shownEmployees = [...state.allEmployees];
    },
    reset: (state) => {
      state.shownEmployees = [...state.allEmployees];
    },
  },
});

export default employeeSlice.reducer;
export const { filter, addEmployees } = employeeSlice.actions;
