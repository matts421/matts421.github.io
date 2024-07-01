import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"

export interface SizeState {
    width: number;
}

const initialState: SizeState = {
    width: window.innerWidth,
};


const sizeSlice = createSlice({
    name: "windowSize",
    initialState,
    reducers: {
        updateSize(state, action: PayloadAction<number>) {
            state.width = action.payload;
        }
    }
});

export const { updateSize } = sizeSlice.actions;
export default sizeSlice.reducer;
