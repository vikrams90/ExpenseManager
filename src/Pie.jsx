import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function Piechart({value}){

 
  const data = {
    labels: ['Expense', 'Income'],
    datasets: [
      {
        label: '₹',
        data: [value.expense, value.income],
        backgroundColor: [
          ' #0085ff',
          ' #6AB8FF',
         
        ],
  
      },
      
    ],
  };

  
    return <>
    <Pie data={data}/>
    </>
}

Piechart.defaultProps = {
 value : {
  income :50,
  expense :50
 }
};

export default Piechart