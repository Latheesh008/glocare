import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './reducers/headerReducer'
// import headerReducer from './reducers/headerReducer'

export const store = configureStore({
  reducer: {
    header: headerReducer
  },
})