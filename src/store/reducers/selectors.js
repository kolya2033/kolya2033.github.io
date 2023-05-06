import { createSelector } from "@reduxjs/toolkit"

const selectlist = (state) => state.list
const selectSortValue = (state) => state.sortValue

export const takeList = (state => state.list)
export const takeClientId = (state=> state.clientId)
export const takeClientOrder = (state=> state.clientOrder)
export const takeSortList = createSelector(selectlist, selectSortValue, (list, sortValue) => {
    let array = [...list]
    switch (sortValue) {
        case 'id':
            return array.sort((a, b) => a.id > b.id ? 1 : -1).map((item, i)=> ({...item, order: i+1}))
            // state.clientOrder = state.clientOrder !== 0 ? state.list.find(item => item.id === state.clientId).order : 0
            // break;
        case 'name':
            return array.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            // state.clientOrder = state.clientOrder !== 0 ? state.list.find(item => item.id === state.clientId).order : 0
            // break;
        case 'username':
            return array.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            // state.clientOrder = state.clientOrder !== 0 ? state.list.find(item => item.id === state.clientId).order : 0
            // break;
        case 'company':
            return array.sort((a, b) => a.company.name.toLowerCase() > b.company.name.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            // state.clientOrder = state.clientOrder !== 0 ? state.list.find(item => item.id === state.clientId).order : 0
            // break;
        default:
            return list
    }
})