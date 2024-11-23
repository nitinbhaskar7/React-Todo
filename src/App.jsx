import { useEffect, useId, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import { TodoProvider } from './contexts/todoContext'
import TodoRender from './components/TodoRender';
function App() {
  const [todos, settodos] = useState([]);

  // Local Storage useEffect

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todos')); 
    if (data) {
      settodos(data);
    }
  }, [])

  useEffect(() => {
    if(todos.length === 0) {
      return;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addTodo = (todo) => {
    settodos((prev) => {
      return [...prev,  todo]
    })
  }

  const updateTodo = (id, todo) => {
    settodos((prev) => {
      return prev.map((oldTodo) => {
        if (oldTodo.id === id) {
          return todo;
        }
        else {
          return oldTodo;
        }
      })
    })
  }

  const deleteTodo = (id) => {
    settodos((prev) => {
      return prev.filter((todo) => { return todo.id !== id })
    })
  }

  const toggleCompleted = (id) => {
    settodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          const newTodo = {...todo , isCompleted : !todo.isCompleted} ;
          return newTodo ;
        }
        return todo
      })

    })
  }
  return (
    <div>

    <TodoProvider value={{
      todos,
      addTodo,
      updateTodo,
      deleteTodo,
      toggleCompleted
    }} >
      <TodoForm />

      {
        todos.map((todo) => {
          return (

            <div key={todo.id}>
              <TodoRender todo={todo} />
            </div>
          )
        })

      }

    </TodoProvider>
    </div>

  )
}

export default App
