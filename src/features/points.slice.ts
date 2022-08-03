import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const pointsSlice = createSlice( {
    name: 'pointsSlice',
    initialState: {
            goodAnswers: 0,
            badAnswers: 0,
    },
    reducers: {
        setGoodPoints: ( state, action: PayloadAction<number> ) => {
            state.goodAnswers = state.goodAnswers + action.payload;
        },
        setBadPoints: ( state, action: PayloadAction<number> ) => {
            state.badAnswers = state.badAnswers +  action.payload;
        }
    }
} )

export const { setGoodPoints, setBadPoints } = pointsSlice.actions;
export default pointsSlice.reducer