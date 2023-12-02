import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incByAmount, increment } from '../reducers/intrest'
// import { increment } from '../slices/bonusSlice'

const Intrest = ({value}) => {

    const amount = useSelector(state=>state.account.amount)
    const intrest = useSelector(state=> state.intrest.intrest)
    const dispatch = useDispatch()

    
    return (
        <div className='card'>
            <div className="container">
                <h4><b>Intrest  Component</b></h4>
                <h3>Total Intrest : {intrest}</h3>
                <h3>Total Amount : {amount}</h3>
                <button onClick={()=>dispatch(increment())}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
                <button onClick={()=>dispatch(incByAmount(value))}>IncBy Amount {value}</button>

            </div>
        </div>
      )
}

export default Intrest