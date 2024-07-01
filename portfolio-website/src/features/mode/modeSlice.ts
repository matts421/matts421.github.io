import { PaletteMode } from "@mui/material";
import {createSlice} from "@reduxjs/toolkit";

export interface ModeState {
    mode: PaletteMode;
}

const initialState: ModeState = {
    mode: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light",
};


const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        toggleMode(state) {
            state.mode = (state.mode === "dark") ? "light" : "dark"
        }
    }
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
