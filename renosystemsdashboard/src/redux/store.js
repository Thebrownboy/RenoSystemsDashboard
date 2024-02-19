import { configureStore } from "@reduxjs/toolkit";

import EmployeesReducer from "./Employees/EmployeesSlice";

const store = configureStore({
  reducer: {
    employee: EmployeesReducer,
  },
});

export default store;
