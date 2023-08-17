import React, { useState } from 'react'
import Nav from './Nav'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './Form'
import Total from './Total'
import Transaction from './Transaction'
import './App.css'
import Graph from './Graph'
const App = () => {

  const [todos,setTodo] = useState([])
  const value = {expense:50,income:50}
  let clone = []
  let [editTodo,setEditTodo]=useState({todo:{},editmode:false})

  const todoset =(index,transaction,amount,danger)=>{
    const newTodo = {
      id : index,
      title : transaction,
      amount : amount,
      danger : danger
    }
    if(editTodo.editmode){
    setTodo(todos.map(todo => {if(todo.id === newTodo.id){
      return newTodo
    }
    else{
      return todo
    }    
  }))
    editTodo.editmode=false
  }else{
      setTodo([...todos,newTodo])
    }
  }

  const piedata=(x,y)=>{
    if(x===0&&y===0){
      value.expense =50
      value.income = 50
    }else{
      value.expense =x
      value.income = y
    }
  }

  const deleteTodo=(id)=>{
    setTodo(todos.filter((todo)=>todo.id!==id))
  }

  const edittodo=(newtodo)=>{
    setEditTodo({todo : newtodo,editmode:true})
  }

  return (
      <main className='container-fluid'>
      <Nav/>
        <div className='dashboard d-flex'>
          <div className='left-dashboard d-flex flex-column'>
            <Form todoset={todoset} editTodo={editTodo}/>
            <Total todos={todos} piedata={piedata} />
            <Graph value={value} />
            <ToastContainer position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"/>
          </div>
          <div className='right-dashboard'>
          <Transaction todos={todos} deleteTodo={deleteTodo} edittodo={edittodo} />
          </div>
        </div>
     



    
      </main>
      
  )
}

export default App
