import "./ToDoListItem.css";
import PropTypes from 'prop-types';

export default function ToDoListItem({ todo, index }) {
  return (
    <li
      className="ToDoListItem"
      style={{
        backgroundColor: index % 2 ? "lavender" : "plum"
      }}
    >
      {todo}
    </li>
  );
}
ToDoListItem.propTypes = {
  todo: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};