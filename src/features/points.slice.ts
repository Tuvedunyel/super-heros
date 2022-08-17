import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const pointsSlice = createSlice( {
    name: 'pointsSlice',
    initialState: {
            goodAnswers: 0,
            badAnswers: 0,
            edit: false,
            answers : [ {
                id: -1,
                goodAnswer: 0,
                badAnswer: 0,
            } ]
    },
    reducers: {
        setGoodPoints: ( state, action: PayloadAction<number> ) => {
            state.goodAnswers = state.goodAnswers + action.payload;
        },
        setBadPoints: ( state, action: PayloadAction<number> ) => {
            state.badAnswers = state.badAnswers +  action.payload;
        },
        setEdit: ( state, { payload }: PayloadAction<boolean> ) => {
            state.edit = payload;
        },
        addAnswers: ( state, { payload }: PayloadAction<{ id: number, goodAnswer: number, badAnswer: number }> ) => {
            state.answers.push( payload );
        },
        editAnswers: ( state, { payload }: PayloadAction< { id: number, goodAnswer: number, badAnswer: number } > ) => {
          state.answers = state.answers.map( answer => {
              if ( answer.id === payload.id ) {
                  answer = payload
                  return { ...answer }
              } else {
                  return { ...answer }
              }
          } )
        }
    }
} )

export const { setGoodPoints, setBadPoints, editAnswers, addAnswers } = pointsSlice.actions;
export default pointsSlice.reducer