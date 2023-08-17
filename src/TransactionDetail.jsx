import React from "react";
import {FaPenToSquare} from 'react-icons/fa6'

const TransactionDetail = ({todo,index,deleteTodo,edittodo}) => {
    
   function handleclick(e){
    deleteTodo(todo.id)
    }

  return (
    <>
      <li className="transaction-list d-flex">
        <h1 className="serail">{index+1}</h1>
        <div className="transaction">
          <p className="transaction-detail">{todo.title}</p>
          
          <p className={todo.danger?"transaction-amount text-danger":"transaction-amount text-success"}>{todo.amount}</p>
        </div>
        <button onClick={handleclick} className="btn btn-danger close rounded-0 ">X</button>
        <button onClick={()=>{edittodo(todo)}} className="btn btn-warning edit rounded-0"><FaPenToSquare/></button>
      </li>



      {/* <li className="transaction-list d-flex">
        <h1 className="serail">2</h1>
        <div>
          <p className="transaction-detail">Rent</p>
          <p className="transaction-amount text-danger">555</p>
        </div>
      </li> */}
    </>
  );
};

export default TransactionDetail;
