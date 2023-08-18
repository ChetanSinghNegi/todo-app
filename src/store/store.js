import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice";
export default configureStore({
  reducer: { todo: todoReducer },
});

// export default store;

// import { configureStore } from "@reduxjs/toolkit";

// export default configureStore({
//   reducer: {},
// });
