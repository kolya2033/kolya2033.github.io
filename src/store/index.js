import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import { clientsReducer } from "./reducers/clientsReducer"
import { composeWithDevTools } from "redux-devtools-extension"

export const store = createStore(clientsReducer, composeWithDevTools(applyMiddleware(thunk)))