import { combineReducers } from "@reduxjs/toolkit";
// Import your slice reducers here
import exampleSlice from "./slices/exampleSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  // Add your slice reducers here
  example: exampleSlice,
  user: userReducer,
});

export default rootReducer;
