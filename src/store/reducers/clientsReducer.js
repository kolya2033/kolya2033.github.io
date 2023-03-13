export const LIST_LOADED = 'LIST_LOADED'
export const LIST_SORT_ID = 'LIST_SORT_ID'
export const LIST_SORT_NAME = 'LIST_SORT_NAME'
export const LIST_SORT_USERNAME = 'LIST_SORT_USERNAME'
export const LIST_SORT_COMPANY = 'LIST_SORT_COMPANY'
export const SELECT_CLIENT = 'SELECT_CLIENT'
export const DELET_CLIENT = 'DELET_CLIENT'
export const ADD_NEW_CLIENT = 'ADD_NEW_CLIENT'
export const ADD_MODAL_PROPERTY = 'ADD_MODAL_PROPERTY'
export const CHANGE_CLIENT = 'CHANGE_CLIENT'
export const DRAG_START_HANDLER = 'DRAG_START_HANDLER'
export const DROP_HANDLER = 'DROP_HANDLER'



const defaultState = {
    list: [],
    clientId: 0,
    clientOrder: 0,
    modalProperty: '',
    currentClient: null
}

export const clientsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LIST_LOADED:
            return {...state, list: action.payload}
        case LIST_SORT_ID:
            return {...state, list: action.payload}
        case LIST_SORT_NAME:
            return {...state, list: action.payload}
        case LIST_SORT_USERNAME:
            return {...state, list: action.payload}
        case LIST_SORT_COMPANY:
            return {...state, list: action.payload}
        case SELECT_CLIENT:
            return {...state, clientId: action.clientId, clientOrder: action.clientOrder}
        case DELET_CLIENT:
            return {...state, list: action.payload, clientOrder: 0}
        case ADD_NEW_CLIENT:
            return {...state, list: action.payload}
        case ADD_MODAL_PROPERTY: 
            return {...state, modalProperty: action.payload}
        case CHANGE_CLIENT:
            return {...state, list: action.payload}
        case DRAG_START_HANDLER:
            return {...state, currentClient: action.currentClient, clientOrder: action.clientOrder, clientId: action.clientId}
        case DROP_HANDLER:
            return {...state, list: action.list, clientOrder: action.clientOrder}
        default:
            return state
    }
}