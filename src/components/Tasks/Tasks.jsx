import React, {useState} from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos,setTodos] = useState([]);
  const onDelete = (id) => {
    let newTodos = todos.filter(todo => todo.id!==id);
    setTodos(newTodos);
  }
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
         {todos.map((todo) => (
         <Task key={todo.id} todo={todo} onDelete={onDelete} />
    ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
