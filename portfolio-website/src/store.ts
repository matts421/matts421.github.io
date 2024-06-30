import { configureStore } from "@reduxjs/toolkit";
import modeReducer, { ModeState } from "./features/mode/modeSlice";

const store = configureStore({
    reducer: {
      mode: modeReducer,
    },
  });

export type RootState = {
    mode: ModeState;
};

export default store;