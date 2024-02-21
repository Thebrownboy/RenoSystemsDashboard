import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allLinks: [
    {
      linkText: "Transaction Limits",
      href: "/ATM Settings/Transaction Limits",
    },
    {
      linkText: "Network configuration",
      href: "/ATM Settings/Network configuration",
    },
    {
      linkText: "Screen and Display Settings",
      href: "/ATM Settings/Screen and Display Settings",
    },
    {
      linkText: "Location Management",
      href: "/Business Setup/Location Management",
    },
    { linkText: "Product Catalog", href: "/Business Setup/Product Catalog" },
    {
      linkText: "Employee Roles and Permissions",
      href: "/Business Setup/Employee Roles and Permissions",
    },
    { linkText: "User Profiles", href: "/User Mangement/User Profiles" },
    {
      linkText: "Password Management",
      href: "/User Mangement/Password Management",
    },
    { linkText: "Activity Logs", href: "/User Mangement/Activity Logs" },
  ],
  filteredLinks: [],
};

const linksSlice = createSlice({
  initialState,
  name: "links",
  reducers: {
    filterLinks: (state, action) => {
      state.filteredLinks = [];
      for (let i = 0; i < state.allLinks.length; i++) {
        if (
          state.allLinks[i].linkText
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ) {
          state.filteredLinks.push(state.allLinks[i]);
        }
      }
    },
  },
});
