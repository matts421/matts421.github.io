import { configureStore } from "@reduxjs/toolkit";
import modeReducer, { ModeState } from "./features/mode/modeSlice"; 
import sizeReducer, { SizeState } from "./features/windowSize/windowSizeSlice";

const store = configureStore({
    reducer: {
      mode: modeReducer,
      windowSize: sizeReducer,
    },
  });

export type RootState = {
    mode: ModeState;
    windowSize: SizeState;
};

export default store;