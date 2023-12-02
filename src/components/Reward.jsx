import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incByAmount, increment } from '../reducers/reward'
// import { increment } from '../slices/bonusSlice'

const Reward = ({value}) => {

    const amount = useSelector(state=>state.account.amount)
    const points = useSelector(state=> state.reward.reward)
    const dispatch = useDispatch()

    
    return (
        <div className='card'>
            <div className="container">
                <h4><b>Reward  Component</b></h4>
                <h3>Total Rewards : {points}</h3>
                <h3>Total Amount : {amount}</h3>
                <button onClick={()=>dispatch(increment())}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
                <button onClick={()=>dispatch(incByAmount(value))}>IncBy Amount {value}</button>

            </div>
        </div>
      )
}

export default Reward