import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: [],
  length: 0,
};

const rowsSlice = createSlice({
  initialState,
  name: "rows",

  reducers: {
    addToSelected: (state, action) => {
      state.selected.push(action.payload);
      // I think that storing the id is sufficeint
      state.length = state.selected.length;
    },
    removeFromSelected: (state, action) => {
      for (let i = 0; i < state.selected.length; i++) {
        if (state.selected[i] === action.payload) {
          state.selected.splice(i, 1);
          break;
        }
      }

      state.length = state.selected.length;
    },
  },
});

export default rowsSlice.reducer;

export const { addToSelected, removeFromSelected } = rowsSlice.actions;
