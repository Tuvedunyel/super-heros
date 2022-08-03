import { configureStore } from '@reduxjs/toolkit';
import playingSliceReducer from '../features/playing.slice'
import pointsSliceReducer from '../features/points.slice'

const store = configureStore({
    reducer: {
        playingSlice: playingSliceReducer,
        pointsSlice: pointsSliceReducer,
    }
})

export default store