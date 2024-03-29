import { createSlice } from "@reduxjs/toolkit";
import { clientsApi } from "../../services/clientsquery";


const clientsReducerSlice = createSlice({
    name: 'clientReducer',
    initialState: {
        list: [],
        clientId: 0,
        clientOrder: 0,
        modalProperty: '',
        currentClient: null,
        loading: false,
        error: false
    },
    reducers: {
        listSortId(state) {
            state.list = state.list.sort((a, b) => a.id > b.id ? 1 : -1).map((item, i)=> ({...item, order: i+1}))
            state.clientOrder = state.clientOrder !== 0 ? state.list.find(item => item.id === state.clientId).order : 0
        },
        listSortName(state) {
            state.list = state.list.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            state.clientOrder = state.clientOrder !== 0 ? state.list.find(item => item.id === state.clientId).order : 0
        },
        listSortUsername(state) {
            state.list = state.list.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            state.clientOrder = state.clientOrder !== 0 ? state.list.find(item => item.id === state.clientId).order : 0
        },
        listSortCompany(state) {
            state.list = state.list.sort((a, b) => a.company.name.toLowerCase() > b.company.name.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            state.clientOrder = state.clientOrder !== 0 ? state.list.find(item => item.id === state.clientId).order : 0
        },
        selectClient(state, action) {
            state.clientId = action.payload.clientId
            state.clientOrder = action.payload.clientOrder
        },
        arrowDownSelectClient(state, action) {
            state.clientId = action.payload
            state.clientOrder = state.clientOrder + 1
        },
        arrowUpSelectClient(state, action) {
            state.clientId = action.payload
            state.clientOrder = state.clientOrder - 1
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
            switch (state.modalProperty) {
                case 'name':
                case 'username':
                    state.list = state.list.map(item => item.id === state.clientId ? {...item, [state.modalProperty]: action.payload} : item)
                    break;
                case 'company':
                    state.list = state.list.map(item => item.id === state.clientId ? {...item, company:{...item.company, name: action.payload}} : item)
                    break;
                default:
                    break;
            }
        },
        onDragStartHandler(state, action) {
            state.currentClient = action.payload
            state.clientOrder = action.payload.order
            state.clientId = action.payload.id
        },
        onDropHandler(state, action) {
            state.list =  state.list.map(i => {
                if(i.id === action.payload.id) {
                    return {...i, order: state.currentClient.order}
                }
                if(i.id === state.currentClient.id) {
                    return {...i, order: action.payload.order}
                }
                return i
            }).sort((a, b) => a.order > b.order ? 1 : -1)
            state.clientOrder = action.payload.order
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            clientsApi.endpoints.fetchAllClients.matchFulfilled,
            (state, {payload}) => {
                state.list = payload.map((item, i) => ({...item, order: i + 1}))
            }
        )
    }, 
})


export default clientsReducerSlice.reducer
export const {addNewClient, changeClient, deletClient, listSortCompany, listSortId, addSortValue, updateList, listSortName, listSortUsername, onDragStartHandler, onDropHandler, onModalProperty, selectClient, listLoaded, arrowDownSelectClient, arrowUpSelectClient} = clientsReducerSlice.actions