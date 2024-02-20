import { configureStore } from "@reduxjs/toolkit";

import EmployeesReducer from "./Employees/EmployeesSlice";
import RowsSlice from "./Rows/RowsSlice";
const store = configureStore({
  reducer: {
    employee: EmployeesReducer,
    rows: RowsSlice,
  },
});

export default store;
