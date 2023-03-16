import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: () => {
    const todoListLocalStorage = JSON.parse(localStorage.getItem("todoList"));
    return todoListLocalStorage === null ? [] : todoListLocalStorage;
  },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const selectedTodo = state.find((todo) => todo.name === action.payload);
      selectedTodo.done = !selectedTodo.done;
    },
  },
});
