import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  amount: 10,
}


export const getUserAccount = createAsyncThunk(
    'account/getuser',
    async (userId, thunkAPI) => {
      const {data} = await axios.get(`http://localhost:8080/accounts/${userId}`)
      return data.amount
    }
  )


export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.amount += 1   //* Due to IMMER Library we can directly change state here 
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },

    decrementByAmount: (state, action) => {
        state.amount -= action.payload
      },
  },

  extraReducers:(builder)=>{
    builder.addCase(getUserAccount.fulfilled , (state,action)=>{
        state.amount = action.payload;
        state.pending=false
    })
    .addCase(getUserAccount.pending , (state,action)=>{
        state.pending=false
    })
    .addCase(getUserAccount.rejected , (state,action)=>{
        state.pending=false
        state.error = action.error.message

    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,decrementByAmount } =accountSlice.actions

export default accountSlice.reducer