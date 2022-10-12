import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../redux/todoSlice";

const AddTodo = () => {
  // const { todoList } = useSelector((state) => state.todoRedux);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  // const [data, setData] = useState(todoList);

  const add = () => {
    if (task === "") {
      alert("Please fill in the required field");
    } else {
      dispatch(addToDo({ newTask: task }));
      // setData({ ...data, task });
    }
    setTask("");
  };

  return (
    <div className="form">
      <h2>React Redux Todo App</h2>
      <div className="form-input">
        <input
          type="text"
          value={task}
          name="task"
          placeholder="Type in your todos..."
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button type="button" className="button" onClick={add}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
