import axios from "axios";
import { ADD_MODAL_PROPERTY,
        ADD_NEW_CLIENT,
        CHANGE_CLIENT,
        DELET_CLIENT,
        DRAG_START_HANDLER,
        DROP_HANDLER,
        LIST_LOADED,
        LIST_SORT_COMPANY,
        LIST_SORT_ID,
        LIST_SORT_NAME,
        LIST_SORT_USERNAME,
        SELECT_CLIENT} from "../reducers/clientsReducer";


export function listLoaded() {
    return async (dispatch) => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        res.data.map((item, i) => item.order = i + 1)
        dispatch({type: LIST_LOADED, payload: res.data})
    }
}

export function listSortId() {
    return {type: LIST_SORT_ID}
}

export function listSortName() {
    return {type: LIST_SORT_NAME}
}

export function listSortUsername() {
    return {type: LIST_SORT_USERNAME}
}

export function listSortCompany() {
    return {type: LIST_SORT_COMPANY}
}

export function selectClient(clientId, clientOrder) {
    return {type: SELECT_CLIENT, clientId, clientOrder}
}

export function deletClient(clientId) {
    return {type: DELET_CLIENT, payload: clientId}
}

export function addNewClient(client) {
    return {type: ADD_NEW_CLIENT, payload: client}
}

export function onModalProperty(payload) {
    return {type: ADD_MODAL_PROPERTY, payload}
}

export function changeClient(list) {
    return {type: CHANGE_CLIENT, payload: list}
}

export function onDragStartHandler(item) {
    return {type: DRAG_START_HANDLER, currentClient: item, clientOrder: item.order, clientId: item.id}
}

export function onDropHandler(list, item) {

    return {type: DROP_HANDLER, list: list ,clientOrder: item.order}
}