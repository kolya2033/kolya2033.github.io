import { configureStore } from "@reduxjs/toolkit"
import clientsReducerSlice from "./reducers/clientsReducerSlice"
import { clientsApi } from "../services/clientsquery"

export const store = configureStore({
    reducer: {
        [clientsApi.reducerPath]: clientsApi.reducer,
        clientsReducerSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clientsApi.middleware)
})