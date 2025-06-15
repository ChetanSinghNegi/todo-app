import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../slice/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
});
