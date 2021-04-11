const { createSlice } = require('@reduxjs/toolkit')

const INIT_STATE = {
  tasks: [],
}

const timer = createSlice({
  name: 'task',
  initialState: INIT_STATE,
  reducers: {
    addTask: (state, action) => ({ ...state, tasks: [...state.tasks, action.payload] }),
    deleteTask: (state, action) => {
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload)
      return { ...state, tasks: filteredTasks }
    },
  },
})

export const { addTask, deleteTask } = timer.actions

export default timer.reducer
