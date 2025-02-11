import {configureStore} from '@reduxjs/toolkit'
import costReducer from '../features/cost/costSlice'
import userReducer from '../features/User/userSlice'

export const store = configureStore({
    reducer: {
        cost: costReducer, 
        auth: userReducer
    },
})