import { createSelector } from "@reduxjs/toolkit"
import { testTest } from "./clientsReducerSlice"

const selectlist = (state) => state.list
const selectSortValue = (state) => state.sortValue

export const takeList = (state => state.list)
export const takeClientId = (state=> state.clientId)
export const takeClientOrder = (state=> state.clientOrder)
export const takeSortList = createSelector(selectlist, selectSortValue, (list, sortValue) => {
    let array = [...list]
    switch (sortValue) {
        case 'id':
            array.sort((a, b) => a.id > b.id ? 1 : -1).map((item, i)=> ({...item, order: i+1}))
            testTest(array)
            return array
        case 'name':
            array.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            testTest(array)
            return array
        case 'username':
            array.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            testTest(array)
            return array
        case 'company':
            array.sort((a, b) => a.company.name.toLowerCase() > b.company.name.toLowerCase() ? 1 : -1)
            .map((item, i) => ({...item, order: i+1}))
            testTest(array)
            return array
        default:
            testTest(array)
            return array
    }
})