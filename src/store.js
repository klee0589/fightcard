import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/combos/comboSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})