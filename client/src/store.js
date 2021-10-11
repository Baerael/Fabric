import { configureStore } from '@reduxjs/toolkit'
import authReducer from './loginReducer'


export default configureStore({
  reducer: {
    auth: authReducer,
  },
})