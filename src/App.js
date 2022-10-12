import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}
