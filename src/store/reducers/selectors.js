import { createSelector } from "@reduxjs/toolkit"
import { updateList } from "./clientsReducerSlice"
import { useDispatch } from "react-redux"

const selectlist = (state) => state.list
const selectSortValue = (state) => state.sortValue

export const takeList = (state => state.list)
export const takeClientId = (state=> state.clientId)
export const takeClientOrder = (state=> state.clientOrder)
export const takeSortList = createSelector(selectlist, selectSortValue, (list, sortValue) => {
    const dispatch = useDispatch()
    let arr  
    let array = [...list]
    switch (sortValue) {
        case 'id':
            arr = array.sort((a, b) => a.id > b.id ? 1 : -1).map((item, i)=> ({...item, order: i+1}))
            dispatch(updateList(arr))
            return arr
        case 'name':
            arr = array.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            dispatch(updateList(arr))
            return arr
        case 'username':
            arr = array.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            dispatch(updateList(arr))
            return arr
        case 'company':
            arr = array.sort((a, b) => a.company.name.toLowerCase() > b.company.name.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            dispatch(updateList(arr))
            return arr
        default:
            return array
    }
})