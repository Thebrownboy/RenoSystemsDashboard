import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shownEmployees: [], // filtered
  allEmployees: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    nameFilter: (state, action) => {
      state.shownEmployees = [];
      for (let i = 0; i < state.allEmployees.length; i++) {
        if (
          state.allEmployees[i].firstName
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          state.allEmployees[i].lastName
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ) {
          state.shownEmployees.push(state.allEmployees[i]);
        }
      }
    },

    usernameFilter: (state, action) => {
      state.shownEmployees = [];
      for (let i = 0; i < state.allEmployees.length; i++) {
        if (
          state.allEmployees[i].userName
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ) {
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
    dateFilter: (state, action) => {
      state.shownEmployees = [];
      const payloadDate = new Date(action.payload);

      for (let i = 0; i < state.allEmployees.length; i++) {
        if (
          new Date(state.allEmployees[i].createdOn).getDate() ===
            payloadDate.getDate() &&
          new Date(state.allEmployees[i].createdOn).getMonth() ===
            payloadDate.getMonth() &&
          new Date(state.allEmployees[i].createdOn).getFullYear() ===
            payloadDate.getFullYear()
        ) {
          state.shownEmployees.push(state.allEmployees[i]);
        }
      }

      console.log();
    },

    allFieldsFilter: (state, action) => {
      state.shownEmployees = [];
      console.log("this is payload", action.payload);
      console.log(state.allEmployees[0].status);
      for (let i = 0; i < state.allEmployees.length; i++) {
        if (
          state.allEmployees[i].status.toLowerCase() ===
            action.payload.toLowerCase() ||
          state.allEmployees[i].email
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          state.allEmployees[i].firstName
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          state.allEmployees[i].lastName
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          state.allEmployees[i].userName
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          state.allEmployees[i].group.toLowerCase() ===
            action.payload.toLowerCase()
        ) {
          state.shownEmployees.push(state.allEmployees[i]);
        }
      }
      console.log(state.shownEmployees);
    },
    addEmployees: (state, action) => {
      console.log(action.payload);
      state.allEmployees = [...state.allEmployees, ...action.payload];
      state.shownEmployees = [...state.allEmployees];

      console.log(state.allEmployees);
    },
    reset: (state) => {
      state.shownEmployees = [...state.allEmployees];
    },
  },
});

export default employeeSlice.reducer;
export const {
  nameFilter,
  filter,
  addEmployees,
  allFieldsFilter,
  statusFliter,
  usernameFilter,
  dateFilter,
} = employeeSlice.actions;
