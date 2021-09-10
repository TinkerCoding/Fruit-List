import React, { useState } from 'react';


const Quantity = ({ todo }) => {
  const [count, setCount] = useState(+todo.count);


  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
   setCount(prevCount => prevCount + 1)
 }

  // edit count function 

  const updateCount = async e => {
    e.preventDefault();
    try {
      const body = { count };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
    
      window.location = "/";
    } catch (err) {
      console.error(err.message);
      
    }
  }



 //////////////////



 
 /////////////////////
  
  


 return (
  <>
    <button onClick={() => decrementCount(todo.todo_id), () => setCount(todo.count)}>-</button>
    <span>{count}</span>
    <button onClick= {() => incrementCount(todo.todo_id), () => setCount(todo.count)}>+</button>
    </> 
  )
  }
  

export default Quantity;