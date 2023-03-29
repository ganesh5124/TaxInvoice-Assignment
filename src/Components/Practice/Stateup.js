import React, { Fragment } from 'react'
import { useState } from 'react'

export default function Stateup() {

const [todos, settodos] = useState(['item1', 'item2','item3'])
  return (
   <Fragment>
    <TodoCount todos = {todos}/>
    <TodoList todos= {todos}/>
    <AddTodo todos={todos} settodos= {settodos}/>
   </Fragment>
  )
}

function TodoCount(props){
    return (<div>
        Total Todos: {props.todos.length}
    </div>)
}

function TodoList (props){
    console.log(props.todos)
    return (
        <ul>
            {props.todos.map(todo=>{
               return (<li key={todo}>{todo}</li>)
            })}
        </ul>
    )
}

function AddTodo(props) {
    function handleSubmit(e){
        e.preventDefault();
        const todo = e.target.elements.todo.value;
        props.settodos(prevTodo =>[...prevTodo, todo]);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' id ='todo'/>
            <button type='submit'>Add Todo</button>
        </form>
    )
}