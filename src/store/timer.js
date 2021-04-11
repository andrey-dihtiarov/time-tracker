const { createSlice } = require('@reduxjs/toolkit')

const INIT_STATE = {
  name: '',
  timeStarted: 0,
}

const timer = createSlice({
  name: 'timer',
  initialState: INIT_STATE,
  reducers: {
    startTimer: (state, action) => ({ ...state, timeStarted: action.payload }),
    setTaskName: (state, action) => ({ ...state, name: action.payload }),
    stopTimer: () => INIT_STATE,
  },
})

export const { startTimer, setTaskName, stopTimer } = timer.actions

export default timer.reducer
