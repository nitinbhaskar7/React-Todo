import React, { useState ,useId } from 'react'
import useTodos from '../contexts/todoContext'

const TodoForm = () => {
    const [todo, settodo] = useState("")
    const {addTodo} = useTodos() ;

    function submitHandler() {
        addTodo({
            id : Date.now()  ,
            isCompleted : false ,
            content : todo 
        })
        settodo("") ;
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <form onSubmit={(e) => {
                e.preventDefault();
                submitHandler(e);
            }} className='flex flex-col gap-4'>
                <input type='text' className='w-full text-black bg-gray-100 placeholder:text-slate-400 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' placeholder='Buy Chai'
                    value={todo} onChange={(e) => { settodo(e.target.value) }} />
                    
                <button type="submit" disabled={todo.length == 0} className="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 transition duration-300 ease">
                    Add
                </button>

                {todo.length == 0 &&  <div className="text-red-500 text-sm">Enter at least one character</div>}
            </form>
        </div>
    )
}

export default TodoForm
