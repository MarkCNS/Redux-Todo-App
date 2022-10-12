import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, removeAllTodo } from "../redux/todoSlice";

const TodoList = () => {
  const { todoList } = useSelector((state) => state.todoRedux);
  const dispatch = useDispatch();

  return (
    <div>
      {todoList.length > 0 ? (
        <ul className="todos">
          {todoList.map(({ id, task }) => {
            return (
              <li className="grid" key={id}>
                <span className="content">{task}</span>
                <span className="todo-action">
                  <button
                    className="close"
                    onClick={() => dispatch(deleteToDo({ id }))}
                  >
                    Delete
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="noTasks">No tasks added yet</div>
      )}
      {todoList.length > 0 && (
        <div className="todo-clear">
          <p>{`You have ${todoList.length} pending tasks`}</p>
          <button
            onClick={() => {
              dispatch(removeAllTodo());
            }}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
