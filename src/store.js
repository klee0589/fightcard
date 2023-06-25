import { configureStore } from '@reduxjs/toolkit'
import comboReducer from './state/combos/comboSlice'

export default configureStore({
  reducer: {
    combo: comboReducer
  }
})
