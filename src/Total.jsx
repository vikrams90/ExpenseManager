import React from 'react'
import {FaIndianRupeeSign} from 'react-icons/fa6'
import './Total.css'
const Total = ({todos,piedata}) => {
 let x =[],y=[]
   x= todos
   .filter(todo => todo.danger) 
   .map(todo => todo.amount)
   .reduce((accumulator, currentNumber) => (Number(accumulator) + Number(currentNumber)), 0);
  y=todos
  .filter(todo => !todo.danger) 
  .map(todo => todo.amount)
  .reduce((accumulator, currentNumber) => (Number(accumulator) + Number(currentNumber)), 0);

  piedata(x,y)

  return (
    <section className='total-section container-fluid'>
      <div className='container total-container d-flex justify-content-center'>
        <div className='d-flex total align-items-center'>
            <FaIndianRupeeSign className='sign' />
            <h2 className='toatal-expense text-danger'>{x}</h2>
        </div>
        <div className='line'>
        
        </div>
        <div className='d-flex total align-items-center'>
            <FaIndianRupeeSign className='sign' />
            <h2 className='total-income text-success'>{y}</h2>
        </div>
      </div>
    </section>
  )
}

export default Total
