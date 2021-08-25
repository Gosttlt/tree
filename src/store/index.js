import { configureStore, combineReducers } from '@reduxjs/toolkit'
import fileTreeSlice from './fileTreeSlice/index'

const rootReducer = combineReducers({
    fileTree: fileTreeSlice
})

export const store = configureStore({
    reducer: rootReducer
})
