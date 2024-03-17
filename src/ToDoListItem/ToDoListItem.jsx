export function ToDoListItem({ todo }){
  return(
  <>
  <div>
    <ul>
     <li className = "todo">{todo}</li>
   </ul>
   </div>
   </>
   )
}

export default ToDoListItem;