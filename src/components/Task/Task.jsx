import React,{useState} from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({todo,onDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [isCompleted,setIsCompleted] = useState(todo.isCompleted);
  
  return (
    <li data-cy="task" className={styles.task} key={todo.id}>
      <input type="checkbox" data-cy="task-checkbox" 
      checked={isCompleted}
      onChange={(e)=>{
        setIsCompleted(e.target.checked);
      }}
      />
      <div className={isCompleted ? styles.strikedThrough : ""} data-cy="task-text">{todo.value}</div>
      {/* Counter here */}
      <Counter initialValue={1}/>
      <button onClick={()=> onDelete(todo.id)} data-cy="task-remove-button">X</button>
    </li>
  );
};

export default Task;
