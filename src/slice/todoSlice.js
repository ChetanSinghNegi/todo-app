import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTodos: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.allTodos.push(action.payload);
      localStorage.setItem("allTodos", JSON.stringify(state.allTodos));
    },
    updateTodo: (state, action) => {
      const originalTodoIdx = state.allTodos.findIndex(
        (value) => value.id === action.payload.id
      );
      state.allTodos[originalTodoIdx] = action.payload;
      localStorage.setItem("allTodos", JSON.stringify(state.allTodos));
    },
    deleteTodo: (state, action) => {
      const originalTodoIdx = state.allTodos.findIndex(
        (value) => value.id === action.payload
      );
      const newTodoList = state.allTodos.filter(
        (_, idx) => idx != originalTodoIdx
      );
      state.allTodos = newTodoList;
      localStorage.setItem("allTodos", JSON.stringify(newTodoList));
    },
    clearTodo: (state) => {
      state.allTodos = [];
      localStorage.removeItem("allTodos");
    },
  },
});

export default todoSlice.reducer;
export const { saveTodo, updateTodo, deleteTodo, clearTodo } =
  todoSlice.actions; //action creator
