import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/bonusSlice'

const Bonus = () => {

    const amount = useSelector(state=>state.account.amount)
    const points = useSelector(state=> state.bonus.points)
    const dispatch = useDispatch()

    
    return (
        <div className='card'>
            <div className="container">
                <h4><b>Bonus Component</b></h4>
                <h3>Total Points : {points}</h3>
                <h3>Total Amount : {amount}</h3>
                <button onClick={()=>dispatch(increment())}>Increment</button>
            </div>
        </div>
      )
}

export default Bonus