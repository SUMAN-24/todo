import React, {useState} from "react";
import styles from "./counter.module.css";

const Counter = ({initialValue}) => {
  // sample value to be replaced
  // let count = 0;
  const [count,setCount]=useState(initialValue);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button onClick={()=> setCount(count+1)} data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button onClick={()=> 
        {if(count===1)
        {
          return;
        }
      else{
        setCount(count-1)
      }
       }} data-cy="task-counter-decrement-button">-</button>
    </div>
    );
};

export default Counter;
