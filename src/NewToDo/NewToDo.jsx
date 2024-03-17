import { useState } from "react";

export default function NewToDo({ addTodo }) {
  // Destructure addTodo from props here
  const [newToDo, setNewToDo] = useState("");

  const handleInputChange = (e) => {
    setNewToDo(e.target.value);
  };

  function handleAddTodo() {
    evt.preventDefault();
    addTodo(newToDo);
    setNewToDo("");
  }

  return (
    <>
      <h2></h2>
      <form title="New To-Do" onSubmit={handleAddTodo}>
        <input
          placeholder="New To-Do"
          value={newToDo}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>ADD TO-DO</button>
      </form>
    </>
  );
}
