import React, { useEffect, useState } from 'react'
import './Form.css'
import { toast } from 'react-toastify'
const Form = ({todoset,editTodo}) => {
let [transaction,setTransaction] = useState("")
let [amount,setAmount] = useState("")

 useEffect(()=>{
  if(editTodo.editmode){
      setAmount(editTodo.todo.amount)
      setTransaction(editTodo.todo.title)
  }
},[editTodo])


    const handlekey=(e)=>{
      if(e.keyIdentifier=='U+000A' || e.keyIdentifier=='Enter' || e.keyCode==13){
        e.preventDefault()
        alert("please click expense or income button")
      }

    }
    const handleclick=(e)=>{
      e.preventDefault()
      if(editTodo.editmode){
        if(e.target.className.includes('btn-danger')){

          todoset(editTodo.todo.id,transaction,amount,true)
         
        }
        else
        todoset(editTodo.todo.id,transaction,amount,false)
      setAmount("")
      setTransaction("")
        
     }else{
      console.log("form editmode off")
      const newuuid = crypto.randomUUID()
        if(e.target.className.includes('btn-danger')){
          todoset(newuuid,transaction,amount,true)
          toast.error("saved expense successfuly")
          
        }
        else
        todoset(newuuid,transaction,amount,false)
        setAmount("")
        setTransaction("")
     }
    }
  
  


  return (
    <section className='input-section container-fluid'>
      <form onKeyDown={handlekey} className='forms container' >
        <fieldset className='form-field d-flex flex-column'>
            <input onChange={(e) => {setTransaction(e.target.value)}} value={transaction}  className='transaction-input input' required type="text" placeholder='Transaction Details'/>
            <input onChange={(e) => {setAmount(e.target.value) }} value={amount}  className='amount-input input' type="number" required placeholder='Amount'/>
            <div className='d-flex justify-content-between options'>
                <button onClick={handleclick} className='btn btn1 submit btn-danger' type="submit" >Expense</button>            
                <button onClick={handleclick} className='btn btn2 submit btn-success' type="submit">Income</button>
            </div>
        </fieldset>
    </form>
    </section>
  )
}

export default Form
