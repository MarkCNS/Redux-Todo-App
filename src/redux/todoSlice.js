import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoRedux",
  initialState: {
    todoList: []
    // todoList: [
    //   { id: 1, task: "Todo 1" },
    //   { id: 2, task: "Todo 2" }
    // ]
  },
  reducers: {
    addToDo: (state, action) => {
      const newTodoList = {
        id: Math.random(),
        task: action.payload.newTask
      };
      state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      const { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    removeAllTodo: (state) => {
      state.todoList = [];
    }
  }
});

export const { addToDo, deleteToDo, removeAllTodo } = todoSlice.actions;

export default todoSlice.reducer;
