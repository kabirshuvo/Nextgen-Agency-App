import { combineReducers } from "@reduxjs/toolkit";
// Import your slice reducers here
import exampleSlice from "./exampleSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  // Add your slice reducers here
  example: exampleSlice,
  user: userReducer,
});

export default rootReducer;
