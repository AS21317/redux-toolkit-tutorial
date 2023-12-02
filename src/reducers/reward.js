import { createAction ,createReducer } from "@reduxjs/toolkit"

const initialState=({
 reward:15,
})

 export const increment = createAction('reward/increment')  // here action creator and action dono hi bn rhe hai
 export const decrement = createAction('reward/decrement')  // here action creator and action dono hi bn rhe hai
 export const incByAmount = createAction('reward/incByAmount')  // here action creator and action dono hi bn rhe hai

  const rewardReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.reward++
      })
      .addCase(decrement , (state,action)=>{
        state.reward--
      })
      .addCase(incByAmount , (state,action)=>{
        state.reward+= action.payload
      })
    
  })

  export default rewardReducer