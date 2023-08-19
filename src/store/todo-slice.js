import { createSlice } from "@reduxjs/toolkit";
export const TodoSlice = createSlice({
  name: "todo",
  initialState: { value: [] },
  reducers: {
    setTodo: (state, action) => {
      // const prevValue =
      state.value.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    deleteTodo: (state, action) => {
      let idx = -1;
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].id == action.payload) {
          idx = i;
          break;
        }
      }
      if (idx != -1) {
        state.value.splice(idx, 1);
      }
    },
    updateTodo: (state, action) => {
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].id == action.payload.id) {
          state.value[i].title = action.payload.title;
          state.value[i].description = action.payload.description;
          break;
        }
      }
    },
  },
});

export const { setTodo, deleteTodo, updateTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
