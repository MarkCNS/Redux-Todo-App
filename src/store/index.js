import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../redux/todoSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
const persistTodoReducer = persistReducer(
  {
    key: "todoRedux",
    storage
  },
  todoSlice
);

export const store = configureStore({
  reducer: { todoRedux: persistTodoReducer }
});

export const persistor = persistStore(store);
