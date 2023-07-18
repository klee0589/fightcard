import { createSlice } from '@reduxjs/toolkit'

export const comboSlice = createSlice({
  name: 'combo',
  initialState: [
    { name: 'combo_1', combination: ['Jab'] },
    { name: 'combo_2', combination: ['Jab', 'Cross'] },
    { name: 'combo_3', combination: ['Jab', 'Cross', 'Left Hook'] },
    { name: 'combo_4', combination: ['Jab', 'Cross', 'Left Hook', 'Cross'] },
    { name: 'combo_5', combination: ['Jab', 'Cross', 'Left Hook', 'Cross', 'Left Uppercut'] },
    { name: 'combo_6', combination: ['Cross', 'Left Hook', 'Cross'] },
    { name: 'combo_7', combination: ['Left Hook', 'Cross', 'Left Hook'] },
    { name: 'combo_8', combination: ['Right Uppercut', 'Left Hook', 'Cross'] },
    { name: 'combo_9', combination: ['Left Uppercut', 'Cross', 'Left Uppercut'] },
    { name: 'combo_10', combination: ['Cross', 'Left Uppercut', 'Cross'] },
    { name: 'combo_11', combination: ['Jab', 'Cross', 'Jab'] },
    { name: 'combo_12', combination: ['Cross', 'Jab', 'Cross'] },
    { name: 'combo_13', combination: ['Jab', 'Right Uppercut', 'Left Hook'] },
    { name: 'combo_14', combination: ['Jab', 'Cross', 'Left Uppercut', 'Right Overhand'] },
    { name: 'combo_15', combination: ['Left Hook', 'Right Uppercut', 'Left Hook'] },
    { name: 'combo_16', combination: ['Cross', 'Left Hook', 'Right Hook'] },
    { name: 'combo_17', combination: ['Left Hook', 'Right Hook', 'Left Uppercut'] },
    { name: 'combo_18', combination: ['Right Uppercut', 'Left Hook', 'Right Hook'] },
    { name: 'combo_19', combination: ['Left Uppercut', 'Right Hook', 'Left Hook'] },
    { name: 'combo_20', combination: ['Right Hook', 'Left Hook', 'Right Uppercut'] }
  ],
  reducers: {
    removeById: (state, action) => {
      const itemId = action.payload
      return state.filter((item) => item.name !== itemId)
    }
  }
})

// Action creators are generated for each case reducer function
export const { removeById } = comboSlice.actions

export default comboSlice.reducer
