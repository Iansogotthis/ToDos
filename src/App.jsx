import "./App.css";
import ToDoList from "./ToDoList/ToDoList";

const todos = ["Swim", "Jump", "climb"];

export default function App() {
  return (
    <div className="App">
      <h1>React To-Do</h1>
      <ToDoList todos={todos} />
    </div>
  );
}
