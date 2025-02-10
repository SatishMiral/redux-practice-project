import {configureStore} from '@reduxjs/toolkit'
import costReducer from '../features/cost/costSlice'

export const store = configureStore({
    reducer: {
        cost: costReducer, 
    },
})