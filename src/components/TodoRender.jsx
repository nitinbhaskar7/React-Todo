import React, { useState } from 'react'
import useTodos from '../contexts/todoContext'

const TodoRender = ({todo}) => {
    const [content , setcontent] = useState(todo.content) ;
    const {updateTodo  , deleteTodo , toggleCompleted} = useTodos() 
    const [editMode, seteditMode] = useState(false) 

  return (
    <div className='flex gap-2'>
      <input type='checkbox' checked={todo.isCompleted} onChange={(e)=>{toggleCompleted(todo.id)}} />
      <input value={content} className={` w-full bg-transparent placeholder:text-slate-400 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${editMode ? "" : "border-none"}`} type='text' readOnly = {!editMode}  onChange={(e)=>{
        setcontent(e.target.value) ;
      }}     />
      
      <button disabled={todo.isCompleted} onClick={(e)=>{ 
        if(editMode){
          // perform save logic 
          updateTodo(todo.id , { id : todo.id , content , isCompleted : todo.isCompleted} ) ;
          seteditMode(false)
        }
        else{
          seteditMode(true) ;
        }
      }}>{editMode ? "Save" : "Edit"}</button>
      <button onClick={(e)=>{
        deleteTodo(todo.id) ;
      }}>Delete</button>


    </div>
  )
}

export default TodoRender
