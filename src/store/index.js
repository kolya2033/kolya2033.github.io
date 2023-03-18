import { configureStore } from "@reduxjs/toolkit"
import clientsReducerSlice from "./reducers/clientsReducerSlice"

export const store = configureStore({
    reducer: clientsReducerSlice
})