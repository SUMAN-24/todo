import React, {useState} from "react";
import styles from "./addTask.module.css";
import Task from "../Task/Task";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onDelete = (id) => {
    let newTodos = todos.filter(todo => todo.id!==id);
    setTodos(newTodos);
  }
  return (
    <div className={styles.todoForm}>
      <input onChange={(e)=>{
        setValue(e.target.value);
      }} data-cy="add-task-input" type="text" placeholder="Add Task..."/>
      <button onClick={()=>{
       setTodos([...todos, {id: Date.now() , value: value}]);
       setValue("");
      }} data-cy="add-task-button">+</button>
       {todos.map((todo) => (
         <Task key={todo.id} todo={todo} onDelete={onDelete} />
    ))}
    </div>
  );
};

export default AddTask;
