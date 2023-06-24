import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './state/combos/comboSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
