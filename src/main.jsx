import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/accountSlice.js'
import bonusReducer from './slices/bonusSlice.js'
import { Provider } from 'react-redux'
import rewardReducer from './reducers/reward.js'
import intrestReducer from './reducers/intrest.js'
import { adminApi } from './apiSlices/AdminSlice'


const store= configureStore({
  reducer:{

    account:accountReducer,
    bonus:bonusReducer,
    reward:rewardReducer,
    intrest:intrestReducer,
    [adminApi.reducerPath]: adminApi.reducer  // right side me kye 'admin' aa jayegi fetch hoke 

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(adminApi.middleware),

  
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App  />
    </Provider>
    
  </React.StrictMode>,
)
