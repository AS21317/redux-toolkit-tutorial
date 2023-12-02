import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 10,
}

const incrementOnFixAmount = createAction('account/incrementByAmount')  // ye name usi action ka hoga jiske basis pr yha kuch change krna hai 

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.points += 1   //* Due to IMMER Library we can directly change state here 
    },
   
  },
  extraReducers:(builder)=>{
    builder.addCase(incrementOnFixAmount,(state,action)=>{
            if(action.payload>=100)
            {
                state.points+=1;
            }
    })

  }
})

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer