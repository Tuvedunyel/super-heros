import { configureStore } from '@reduxjs/toolkit';
import playingSliceReducer from '../features/playing.slice'

const store = configureStore({
    reducer: {
        playingSlice: playingSliceReducer
    }
})

export default store