import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const playingSlice = createSlice({
    name: "playingSlice",
    initialState: {
        playingSlice: false,
        gameEnd: false
    },
    reducers: {
        setPlaying: (state, action: PayloadAction<boolean>) => {
            state.playingSlice = action.payload;
        },
        setEndGame: (state, action: PayloadAction<boolean>) => {
            state.gameEnd = action.payload;
        }
    }
})

export const { setPlaying, setEndGame } = playingSlice.actions;
export default playingSlice.reducer;