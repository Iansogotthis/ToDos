import { ToDoListItem } from "../ToDoListItem/ToDoListItem";

export default function ToDoList({ todos }) {
  const toDoListItems = todos.map(function(todo, index) {
    
    return <ToDoListItem key={index} todo={ `${index  + 1}. ${todo}`} />;
  });

  return (
    <ul>
      {toDoListItems}
    </ul>
  );
}