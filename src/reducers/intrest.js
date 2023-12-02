import { createAction ,createReducer } from "@reduxjs/toolkit"

const initialState=({
 intrest:1500,
})

 export const increment = createAction('intrest/increment')  // here action creator and action dono hi bn rhe hai
 export const decrement = createAction('intrest/decrement')  // here action creator and action dono hi bn rhe hai
 export const incByAmount = createAction('intrest/incByAmount')  // here action creator and action dono hi bn rhe hai

  const intrestReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.intrest+=100
      })
      .addCase(decrement , (state,action)=>{
        state.intrest-=100
      })
      .addCase(incByAmount , (state,action)=>{
        state.intrest+= action.payload
      })
    
  })

  export default intrestReducer