import ToDoListItem from "../ToDoListItem/ToDoListItem";
import PropTypes from "prop-types";

export default function ToDoList({ todos }) {
  function createToDoListItem(todo, index) {
    return <ToDoListItem key={index} todo={todo} index={index + 1} />;
  }

  const toDoListItems = todos.map(createToDoListItem);

  return <ul>{toDoListItems}</ul>;
}
ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
