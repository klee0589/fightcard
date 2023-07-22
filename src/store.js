import { configureStore } from '@reduxjs/toolkit'
import comboReducer from './state/combos/comboSlice'
import statsReducer from './state/stats/statsSlice'

export default configureStore({
  reducer: {
    combo: comboReducer,
    stats: statsReducer
  }
})
