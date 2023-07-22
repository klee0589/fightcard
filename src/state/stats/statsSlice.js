import { createSlice } from '@reduxjs/toolkit'

export const statsSlice = createSlice({
  name: 'combo',
  initialState: {
    jab: { count: 0 },
    cross: { count: 0 },
    lHook: { count: 0 },
    rHook: { count: 0 },
    lUppercut: { count: 0 },
    rUppercut: { count: 0 },
    rOverhand: { count: 0 }
  },
  reducers: {
    add: (state, action) => {
      const itemId = action.payload
      state[itemId].count++
    }
  }
})

// Action creators are generated for each case reducer function
export const { add } = statsSlice.actions

export default statsSlice.reducer
