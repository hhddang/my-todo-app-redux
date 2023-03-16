import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import todoListSlice from "./slices/todoListSlice";

export default configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
