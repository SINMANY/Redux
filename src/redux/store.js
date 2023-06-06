
import { configureStore } from '@reduxjs/toolkit'
import createReducer from './features/cart/cartSlice'


export const store = configureStore({
    reducer: {
        cart:createReducer,
    },
})
