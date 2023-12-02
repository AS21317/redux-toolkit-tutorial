import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount ,getUserAccount} from '../slices/accountSlice'

const Account = ({value,setValue}) => {


    const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=> state.bonus.points)

  const dispatch = useDispatch()


    return (
        <div className='card'>
            <div className="container">
                <h4><b>App Component</b></h4>
                <h3>Amount: ${amount}</h3>
                <button onClick={()=>dispatch(increment())}>Increment +</button>
                {" "}
                <button onClick={()=>dispatch(decrement())}>Decrement -</button>
                {" "}
                <input type="number" value={value}  onChange={(e)=>setValue(+e.target.value)} />
                {" "}
                <button onClick={()=>dispatch(incrementByAmount(value))}>IncrementByValue {value }</button>
                {" "}
                <button onClick={()=>dispatch(decrementByAmount(value))}>DecrementByvalue {value }</button>
                {" "}
                <button onClick={()=>dispatch(getUserAccount(2))}>Initialize Account </button>
            </div>
        </div>
      )
}

export default Account