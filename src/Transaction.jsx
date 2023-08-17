import React from 'react'
import './Transaction.css'
import TransactionDetail from './TransactionDetail'

const Transaction = ({todos,deleteTodo,edittodo}) => {
   
  return (
    <section className='container-fluid transaction-section'>
        <div className='container transaction-container'>
            <ul className='transaction-list-group d-flex flex-column'>
                {todos.map((todo,index)=>(<TransactionDetail key={todo.id} todo={todo} index={index} deleteTodo={deleteTodo} edittodo={edittodo}/>))}
                
              
            </ul>
        </div>
    </section>
  )
}

export default Transaction
