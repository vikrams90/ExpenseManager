import React from 'react'
import './Graph.css'
import Piechart from './Pie'
const Graph = ({value}) => {
  return (
    <div className='graph-section d-flex align-items-center'>
      <div className='bar-graph d-flex'>
        <div className='jan-bar d-flex align-items-end'>
            <div className='jan-income'></div>
            <div className='jan-expense'></div>
        </div>
        <div className='feb-bar d-flex align-items-end'>
            <div className='feb-income'></div>
            <div className='feb-expense'></div>
        </div>
      </div>
    
    <div className='line'>

    </div>
    <div className='pie-section'>
        <div className='piechart'>
            <Piechart value={value} />
        </div>

    </div>

    </div>
  )
}

export default Graph
