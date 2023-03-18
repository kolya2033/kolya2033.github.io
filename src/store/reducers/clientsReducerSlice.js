import { createSlice } from "@reduxjs/toolkit";


const clientsReducerSlice = createSlice({
    name: 'clientReducer',
    initialState: {
        list: [],
        clientId: 0,
        clientOrder: 0,
        modalProperty: '',
        currentClient: null
    },
    reducers: {
        listLoaded(state, action) {
            state.list = action.payload
        },
        listSortId(state) {
            state.list = state.list.sort((a, b) => a.id > b.id ? 1 : -1).map((item, i)=> ({...item, order: i+1}))
            state.clientOrder = state.list.find(item => item.id === state.clientId).order
        },
        listSortName(state) {
            state.list = state.list.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            state.clientOrder = state.list.find(item => item.id === state.clientId).order
        },
        listSortUsername(state) {
            state.list = state.list.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            state.clientOrder = state.list.find(item => item.id === state.clientId).order
        },
        listSortCompany(state) {
            state.list = state.list.sort((a, b) => a.company.name.toLowerCase() > b.company.name.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            state.clientOrder = state.list.find(item => item.id === state.clientId).order
        },
        selectClient(state, action) {
            state.clientId = action.payload.clientId
            state.clientOrder = action.payload.clientOrder
        },
        deletClient(state, action) {
            state.list = state.list.filter(item => item.id !== action.payload).map((item, i) => ({...item, order: i+1}))
            state.clientOrder = 0
        },
        addNewClient(state, action) {
            state.list = [...state.list, action.payload]
        },
        onModalProperty(state, action) {
            state.modalProperty = action.payload
        },
        changeClient(state, action) {
            state.list = action.payload
        },
        onDragStartHandler(state, action) {
            state.currentClient = action.payload
            state.clientOrder = action.payload.order
            state.clientId = action.payload.id
        },
        onDropHandler(state, action) {
           state.list =  action.payload.list
           state.clientOrder = action.payload.item.order
        }
    }
})


export default clientsReducerSlice.reducer
export const {addNewClient, changeClient, deletClient, listSortCompany, listSortId, listSortName, listSortUsername, onDragStartHandler, onDropHandler, onModalProperty, selectClient, listLoaded} = clientsReducerSlice.actions