import { configureStore } from "@reduxjs/toolkit";

import EmployeesReducer from "./Employees/EmployeesSlice";
import RowsSlice from "./Rows/RowsSlice";
import LinksSlice from "./SideBarLinks/LinksSlice";
const store = configureStore({
  reducer: {
    employee: EmployeesReducer,
    rows: RowsSlice,
    links: LinksSlice,
  },
});

export default store;
