import { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList/ToDoList";
import NewToDo from "./NewToDo/NewToDo";

export default function App() {
  const [todos, setTodos] = useState([
    "Swim",
    "Jump",
    "Climb",
  ]);

  const [showTodos, setShowTodos] = useState(true);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "HIDE" : "SHOW"}
      </button>

      {showTodos && <ToDoList todos={todos} />}
      <hr />
      <NewToDo addTodo={addTodo} />  
    </div>
  );
}