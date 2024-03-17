import { ToDoListItem } from "../ToDoListItem/ToDoListItem";

export default function ToDoList({ todos }) {
  const steps = ["practice", "project", "prioritize"];
  const toDoListItems = todos.map(function(todo, index) {
    return <ToDoListItem key={index} todo={ `${index  + 1}. ${todo}`} steps={steps} />;
  });

  return (
    <ul>
      {toDoListItems}
    </ul>
  );
}