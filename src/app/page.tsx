'use client'


import React, {useState} from 'react';

export default function ToDo() {
  const [todo, setTodo]=useState('')
  const [todos,setTodos]=useState([
    { todoText:"ToDo1",completed:false},
    {todoText:"ToDo2",completed:true},
    {todoText:"ToDo3",completed:true},
    {todoText:"ToDo4",completed:false}
  
  ])
  const onClickHandler = (meraElm:any)=>{

    const newtodos = todos.map((todo)=>{

if(todo.todoText == meraElm.todoText){
  todo.completed = !todo.completed
}

return todo;
    });
setTodos(newtodos);
  };
  const addTodo =()=>{
    const newTodo ={todoText:todo, completed:false}
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  };
    const deleteTodo = (meraTodo:any)=>{
      const newTodos = todos.filter(todo=>{
        if (todo.todoText == meraTodo.todoText)
        return false;
        return true;
      });
      setTodos(newTodos)
    }
  
  return ( 
  <>
  <div>ToDo</div>
  <input placeholder='Add to do text' value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
  <button onClick={addTodo}>Add</button>
  <ul>
{todos.map((elm)=>{
  return <li style={{color:elm.completed ?"blue":"green", fontStyle:"oblique",listStyle:"none"}}
   key={elm.todoText}>
    <input type="checkbox" checked={elm.completed} onChange={()=>{onClickHandler(elm)}} />
    {elm.todoText}
    <button onClick={()=>{deleteTodo(elm)}} > Delete ToDo </button>
    </li>
})}

  </ul>
  </>
    
  )
}
