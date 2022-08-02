import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const playingSlice = createSlice({
    name: "playingSlice",
    initialState: {
        playingSlice: false,
    },
    reducers: {
        setPlaying: (state, action: PayloadAction<boolean>) => {
            state.playingSlice = action.payload;
        }
    }
})

export const { setPlaying } = playingSlice.actions;
export default playingSlice.reducer;