import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reduc/authSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;
