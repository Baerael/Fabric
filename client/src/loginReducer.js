import { createSlice } from '@reduxjs/toolkit'

export const authentication = createSlice({
  name: 'login',
  initialState: {
    isloggedin : null,
    username   : '',
    error      : '',
    message    : '',
    date: '',
    dir: ''
  },
  reducers: {
    loginReducer: (state, action) => {
      state.isloggedin = action.payload.isloggedin
      state.username   = action.payload.username
      state.error      = action.payload.error
      state.message    = action.payload.message
    },
    logoutReducer: (state) => {
      state.isloggedin = null
      state.username   = ''
      state.error      = ''
      state.message    = ''
      state.dir    = ''
    },
    dateReducer: (state, action) => { state.date = action.payload.date },
    dirReducer:  (state, action) => { state.dir = action.payload.dir },
  },
})

export const { loginReducer, logoutReducer, dateReducer, dirReducer } = authentication.actions

export default authentication.reducer