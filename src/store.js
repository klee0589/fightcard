import { configureStore } from "@reduxjs/toolkit";
import comboReducer from "./features/combos/comboSlice";

export default configureStore({
  reducer: {
    combos: comboReducer,
  },
});
