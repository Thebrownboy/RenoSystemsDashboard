import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  selected: [],
};

const rowsSlice = createSlice({
  intialState,
  name: "rows",
  reducers: {
    addToSelected: (state, action) => {
      // I think that storing the id is sufficeint
    },
    removeFromSelected: (state, action) => {},
  },
});
