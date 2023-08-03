import React from 'react'
import './App.css'
import { incNumber, decNumber } from './actions/index'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div className='content'>
      <div className='container'>
        <h4>Using React and Redux</h4>
      </div>

      <div className='quantity'>
        <a className='quantity_minus' title='Document'  onClick={()=>dispatch(decNumber())}><span> - </span></a>
        <input name='quantity' type='text' className='quantity_input' value={myState} />
        <a className='quantity_plus' title='Increment' onClick={()=>dispatch(incNumber())}><span> + </span></a>
      </div>
    </div>
  )
}

export default App;